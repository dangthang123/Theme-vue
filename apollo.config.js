module.exports = {
    client: {
        service: {
            name: 'theme-vue',
            // URL to the GraphQL API
            url: 'http://localhost/Testvue/graphql',
        },
        // Files processed by the extension
        includes: [
            'src/**/*.vue',
            'src/**/*.js',
        ],
    },
}