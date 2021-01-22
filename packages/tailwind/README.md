# @encora/tailwind

Tailwind CSS for React Native and Expo.

## Install
```
npm install --save-dev @encora/tailwind
```

## Usage

```ts
import { tailwind } from '@encora/tailwind';

const App = () => {
	return(
		const App = () => (
			<SafeAreaView style={tailwind('h-full')}>
				<View style={tailwind('pt-12 items-center')}>
					<View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
						<Text style={tailwind('text-blue-800 font-semibold')}>
							Hello Tailwind
						</Text>
					</View>
				</View>
			</SafeAreaView>
	);
}
```


## Credits

This package was originally a fork of: https://github.com/vadimdemedes/tailwind-rn

