import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
	createBottomTabNavigator,
	BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

interface ITabScreen {
	name: string
	component: string,
}

interface ITabNavigator extends BottomTabBarProps {
	screens: ITabScreen[],
	children?: React.ReactNode
}

export const TabNavigator: React.FunctionComponent<ITabNavigator> =
	({ navigation, screens }) => {
		return(
			<NavigationContainer>
				<Tab.Navigator
					{...navigation}
				>
					{
						screens.map(screen =>
							<Tab.Screen key={screen.name} {...screen} />
						)
					}
				</Tab.Navigator>
			</NavigationContainer>
		);
	}
