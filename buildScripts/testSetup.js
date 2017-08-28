// This file isn't transpiled

// Register Babel to transpile before our tests run.
require('babel-register')()

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = () => {}
