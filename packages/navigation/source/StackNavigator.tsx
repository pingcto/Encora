import * as React from 'react';

import { NavigationContainer, Route } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

const Stack = createStackNavigator();

export type StackNavigatorProps = {
	screens: {
		name: string,
		component: React.FunctionComponent,
		options?: StackNavigationOptions | ((props: { route: Route<string, object | undefined>; navigation: any; }) => StackNavigationOptions)
	}[],
	children?: React.ReactNode
}

export const StackNavigator: React.FunctionComponent<StackNavigatorProps> =
	({ screens }) => {
		return(
			<NavigationContainer>
				<Stack.Navigator>
					{
						screens.map(screen =>
							<Stack.Screen key={ screen.name } { ...screen } />
						)
					}
				</Stack.Navigator>
			</NavigationContainer>
		);
	}

StackNavigator.displayName = 'StackNavigator';
