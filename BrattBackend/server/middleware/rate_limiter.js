// Resources: https://express-rate-limit.mintlify.app/overview

// Requires
const rate_limiter = require('express-rate-limit');
const { logger } = require('./logger');
const { format } = require('date-fns');

// Rate limiter
const limiter = rate_limiter({
	// TODO: Options are the recommended default by the docs, but can be changed
	windowMs: 15 * 60 * 1000, // Minutes * Seconds * Milliseconds = 15 minutes
	limit: 100, // Request limit per windowMs
    message: 'Too many requests, please try again after 15 minutes', // Message to send when the limit is reached
    handler: (req, res, next, options) => // Handler function to handle the rate limit
        logger(`${format(new Date(), 'dd/MMMM/yyyy:HH:mm:ss +0500')} "${options.statusCode}: ${options.message}" "${req.method} ${req.url} HTTP/${req.httpVersion}" "${res.statusCode}" "${req.get('User-Agent')}" ${req.ip}\n`, 'errors.log') &&
		res.status(options.statusCode).send(options.message),
	standardHeaders: true, // `RateLimit-*` headers are sent with information about the rate limit
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Export 
module.exports = limiter;