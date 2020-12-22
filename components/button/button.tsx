import * as React from 'react';
import { Pressable, GestureResponderEvent } from  'react-native';

export interface ButtonProps {
	onPress?: ((event: GestureResponderEvent) => void) | null
}

export const Button = ({
	onPress
}: ButtonProps) => {

	return(
		<Pressable
			onPress={onPress}
		>

		</Pressable>
	)
}