import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

type StackNavigatorProps = {
	screens: { name: string, component: React.FunctionComponent }[]
	children?: React.ReactNode
}

export const StackNavigator: React.FunctionComponent<StackNavigatorProps> =
	({ screens }) => {
		return(
			<NavigationContainer>
				<Stack.Navigator>
					{
						screens.map(screen => {
							<Stack.Screen {...screen} />
						})
					}
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
