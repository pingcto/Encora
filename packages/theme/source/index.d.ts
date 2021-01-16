import * as React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { $PropertyType, $Values } from 'utility-types';

export declare type Theme = {
	breakpoints: [number, number, number, number];
	colors?: Record<string, string>;
	borderWidths?: number[];
	fontSizes?: number[];
	space?: number[];
	sizes?: number[];
	fonts?: Record<string, string>;
	fontWeights?: Record<string, $PropertyType<TextStyle, "fontWeight">>;
	lineHeights?: number[];
	letterSpacings?: number[];
	borderStyles?: Record<string, $PropertyType<ViewStyle, "borderStyle">>;
	radii?: number[];
	zIndices?: number[];
};

export declare const ThemeProvider: React.FunctionComponent<{ value: Theme }>;