var pkg = require('./package.json');

module.exports = {
    // Documentation for GitBook is stored under "docs"
    root: './Users/nazimfaour/GitBook/Library/waves-platform/wavesdocs',
    title: 'WavesDocs',


    // Enforce use of GitBook v3
    gitbook: '3.1.1',

    // Use the "official" theme

    plugins: ["collapse-expand-chapters"]

    plugins: ['theme-official@2.1.1', '-sharing', '-fontsettings', 'sitemap'],

    variables: {
        version: pkg.version
    },

    pluginsConfig: {
        sitemap: {
            hostname: 'https://waves-platform.gitbooks.io/wavesdocs/content/'
        }
    }


};
