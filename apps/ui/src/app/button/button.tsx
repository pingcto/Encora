import React from 'react';
import { Pressable, Text, GestureResponderEvent, ViewStyle } from 'react-native'

export interface IButton {
	color?: string,
	background?: string,
	title?: string,
	style?: ViewStyle,
	onPress?: (event: GestureResponderEvent) => void
}

export const Button = (props: IButton) => {
	return (
		<Pressable
			onPress={props.onPress}
			style={props.style}
		>
			<Text
				style={{
					color: props.color
				}}
			>
				{props.title}
			</Text>
		</Pressable>
	);
};

export default Button;
