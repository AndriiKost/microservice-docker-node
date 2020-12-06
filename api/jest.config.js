module.exports = {
	moduleFileExtensions: ['js', 'json', 'ts'],
	transformIgnorePatterns: ['/node_modules/'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	testURL: 'http://localhost/',
	testMatch: ['**/test/unit/**/*.(js|ts)'],
	collectCoverage: false,
	coveragePathIgnorePatterns: [
		'/node_modules/',
	]
};
