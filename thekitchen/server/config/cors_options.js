// Resources: https://expressjs.com/en/resources/middleware/cors.html

// Whitelist 
const whitelist = [
    'http://localhost:5000' // TODO: Development
]

// Cors options
const cors_options = {
    origin: (origin, callback) => {
        // Check if the origin is in the whitelist, or it is undefined (locahost for development)
        if (whitelist.indexOf(origin) !== -1 || !origin) { // TODO: !origin is only for dev purposes
            callback(null, true)
        } else {
            callback(new Error('CORS Error: Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
    
}

// Export
module.exports = cors_options 