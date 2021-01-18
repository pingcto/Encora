import * as React from 'react';

import { NavigationContainer, Route } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export type TabNavigatorProps = {
	screens: {
		name: string,
		component: React.FunctionComponent,
		options?: BottomTabNavigationOptions | ((props: { route: Route<string, object | undefined>; navigation: any; }) => BottomTabNavigationOptions) | undefined
	}[],
	children?: React.ReactNode
}

export const TabNavigator: React.FunctionComponent<TabNavigatorProps> =
	({ screens }) => {
		return(
			<NavigationContainer>
				<Tab.Navigator>
					{
						screens.map(screen =>
							<Tab.Screen key={screen.name} {...screen} />
						)
					}
				</Tab.Navigator>
			</NavigationContainer>
		);
	}
