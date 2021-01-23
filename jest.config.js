export default
{
	preset: 'jest-expo',
	transform: {
		'^.+\\.(ts|tsx)?$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	transformIgnorePatterns: [
		'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)'
	],
	moduleFileExtensions: ['ts', 'tsx', 'js'],
	testRegex: '/__tests__/.*\\.(test|spec)?\\.(ts|tsx)$',
	testEnvironment: 'node',
	coverageDirectory: './coverage',
	coveragePathIgnorePatterns: ['node_modules'],
};