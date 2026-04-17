module.exports = {
    preset: 'react-native',
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    testMatch: [
        '**/__tests__/**/*.test.ts',
    ],
};
