module.exports = {
    devServer: {
        proxy: {
            '/api/has_session': 'http://localhost:8081',
            '/api/create_session': 'http://localhost:8081'
        }
    }
};