import * as React from 'react';

import { NavigationContainer, Route } from '@react-navigation/native';
import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export type DrawerNavigatorProps = {
	screens: {
		name: string,
		component: React.FunctionComponent,
		options?: DrawerNavigationOptions | ((props: { route: Route<string, object | undefined>; navigation: any; }) => DrawerNavigationOptions)
	}[],
	children?: React.ReactNode
}

export const DrawerNavigator: React.FunctionComponent<DrawerNavigatorProps> =
	({ screens }) => {
		return(
			<NavigationContainer>
				<Drawer.Navigator>
					{
						screens.map(screen =>
							<Drawer.Screen key={screen.name} {...screen} />
						)
					}
				</Drawer.Navigator>
			</NavigationContainer>
		);
	}

export { useIsDrawerOpen } from '@react-navigation/drawer';
