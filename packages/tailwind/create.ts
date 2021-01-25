/* eslint-disable dot-location */
/* eslint-disable complexity */
/* eslint-disable require-unicode-regexp */
/* eslint-disable prefer-named-capture-group */

import React from 'react';
import { IStyle, IStyles } from './interfaces';

const defaultBreakpointKey = '__default';

export const useVariables = (object: IStyle): Object => {

	const newObject: IStyle = {};

	for (const [key, value] of Object.entries(object)) {

		if (!key.startsWith('--')) {
			if (typeof value === 'string') {
				newObject[key] = value.replace(/var\(([a-zA-Z-]+)\)/, (_, name): any => {
					return object[name];
				});
			}
		}
		else newObject[key] = value;
	}

	return newObject;
}

export const addFontVariant = (style: any, separateClassNames: any, prefix: any) => {
	const regex = new RegExp(`^${prefix}(oldstyle-nums|lining-nums|tabular-nums|proportional-nums)$`);

	const matches = separateClassNames
		.filter((className: string) => regex.test(className))
		.map((className: string) => className.replace(prefix, ''))

	if (matches.length > 0)
		style.fontVariant = matches;
}

export const addLetterSpacing = (style: any, letterSpacing: any) => {
	style.letterSpacing = Number.parseFloat(letterSpacing) * style.fontSize;
}

export const create = (tailwindStyles: IStyles, webStyles: IStyles, breakPointsConfig: any ) => {

    const screenNames = breakPointsConfig
		.map((breakpoint: { name: string }) => breakpoint.name);

	const supportedScrees = [
		defaultBreakpointKey,
		...breakPointsConfig
			.filter((breakpoint: { actif: string }) => breakpoint.actif)
			.map((breakpoint: { name: string }) => breakpoint.name)
	];

	const breakpointPrefixRegex = new RegExp(`^(${screenNames.join('|')}):`);

	const tailwind = (classNames?: string): React.CSSProperties => {
		const style = {};

		if (!classNames)
			return style;

		const seperateClassNames = classNames
			.replace(/\s+/g, ' ')
			.trim()
			.split(' ');

		const classNamesByScreens = seperateClassNames.reduce((acc: { [index: string]: any }, className) => {
            const screen: string | undefined = screenNames.find((_screen: any) => classNames.startsWith(`${_screen}:`));

            // ADDED but not sure.
            if(!screen)
                return acc;

			if (screen &&!acc[screen])
				acc[screen] = [];

			acc[screen].push(className);

			return acc;
		}, {});

		let letterSpacingClassName = null;

		for (const screen of supportedScrees) {

			if (!classNamesByScreens[screen])
				continue;

			const breakpointPrefix = defaultBreakpointKey === screen ? '' : `${screen}:`;
			addFontVariant(style, seperateClassNames, breakpointPrefix);

			for (const screenClassName of classNamesByScreens[screen]) {

                const className = screenClassName.replace(breakpointPrefixRegex, '');

				if (!tailwindStyles[className])
					console.warn(`Unsupported Tailwind class: "${screenClassName}"`);
				else if (className.startsWith('tracking-'))
					letterSpacingClassName = className;
				else Object.assign(style, tailwindStyles[className]);
			}
		}

		if (letterSpacingClassName)
			addLetterSpacing(style, tailwindStyles[letterSpacingClassName].letterSpacing);

		return useVariables(style);
	}

	const getColor = (name: string) => {
		const style = tailwind(name.split(' ').map(className => `bg-${className}`).join(' '));
		return style.backgroundColor;
	};


	return { tailwind, getColor };
}
