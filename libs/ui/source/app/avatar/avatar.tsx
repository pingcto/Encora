import React from 'react';
import { View, Image } from 'react-native-web';

export interface IAvatar {
	name: string,
	src: string,
	size?: number,
	showBorder?: true,
	borderColor?: string
}

export const Avatar: React.FC<IAvatar> = (props) => {
	const { 
		name, 
		src,
		size = 200,
		showBorder = false,
		borderColor = '#222'
	} = props

	return (
		<View>
			<Image
				accessible
				accessibilityLabel={name}
				source={{ uri: src }}
				style={{ 
					width: size,
					height: size, 
					borderRadius: size / 2,
					borderColor,
					borderWidth: showBorder ? 2 : 0
				}} 
			/>
		</View>
	);
};

export default Avatar;
