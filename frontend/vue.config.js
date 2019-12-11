var path = require("path")

module.exports = {
    outputDir: path.resolve(__dirname, "../backend/public/"),
    devServer: {
        proxy: {
            '/api':{
                target: 'http://localhost:3000',
                chageOrigin: true,
            },
            '/season':{
                target: 'http://localhost:3000',
                chageOrigin: true,
            },
            '/season_backgroud':{
                target: 'http://localhost:3000',
                chageOrigin: true,
            },
            '/players':{
                target: 'http://localhost:3000',
                chageOrigin: true,
            },
            '/top_record':{
                target: 'http://localhost:3000',
                chageOrigin: true,
            },
            '/top_record_combine':{
                target: 'http://localhost:3000',
                chageOrigin: true,
            },
            '/formation':{
                target: 'http://localhost:3000',
                chageOrigin: true,
            }
        },
    }
}