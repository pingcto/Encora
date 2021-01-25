/* eslint-disable react/jsx-no-bind */

import * as React from 'react';
import { Pressable, View } from 'react-native';
import { useHover, useFocus, useActive } from 'react-native-web-hooks';
import { useTailwind } from '../index';

interface IProps {
	className?: string,
	onPress?: () => {}
}

export const Div: React.FC<IProps> =
	({ className, children }) => {

		const { tailwind } = useTailwind();

		const [pressed, setPressed] = React.useState(false);
		const ref = React.useRef(null);

		const isHovered = useHover(ref);
		const isFocused = useFocus(ref);
		const isActive = useActive(ref);

		return (
			<Pressable
				onPressIn={ () => { setPressed(true); } }
				onPressOut={ () => { setPressed(false); } }
			>
				<View
					ref={ ref }
					style={ tailwind(className, isHovered || pressed) }
				>
					{ children }
				</View>
			</Pressable>
		)
	}

Div.displayName = 'Div';
