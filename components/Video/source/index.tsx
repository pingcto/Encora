import * as React from 'react';
import { Video as Player } from 'expo-av';

export const Video: React.FC = (props) => 
{
	return(
		<Player 
			{...props}
		/>
	);
}