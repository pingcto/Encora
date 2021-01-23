export default {
	transform: {'^.+\\.ts?$': 'ts-jest'},
	preset: 'ts-jest',
	testEnvironment: 'node',
	testRegex: '/__tests__/.*\\.(test|spec)?\\.(ts|tsx)$',
	moduleFileExtensions: ['ts', 'tsx', 'js']
};
