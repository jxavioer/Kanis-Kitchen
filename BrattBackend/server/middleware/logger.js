//Resources: https://nodejs.org/dist/latest-v10.x/docs/api/fs.html

// Requires
const path = require('path');
const promises = require('fs').promises;
const { format } = require('date-fns');

// Logger 
const logger = async (log, log_file) => {
    // Try to write to the logs
    try {
        // Check if the logs folder exists, if not create it
        await promises.mkdir(path.join(__dirname, '..', 'logs'), { recursive: true });

        // Append to the log file
        await promises.appendFile(path.join(__dirname, '..', 'logs', `${log_file}`), `${log}`);
    } catch (err) {
        console.error(`Log Error | ${err.name}: ${err.message}`);
    }
};

// Request logger
const requests_handler = async (req, res, next) => {
    // Attempt to get the passport user
    var user;
    try {
        user = req.passport.user;
    } catch (err){
        user = '-';
    }
    // `Request Limit Reached: ${req.method} ${req.url} <- ${req.headers.origin} | ${options.message.message}`
    // Log format
    const log = `${req.ip} - ${user} ${format(new Date(), 'dd/MMMM/yyyy:HH:mm:ss +0500')} "${req.method} ${req.url} HTTP/${req.httpVersion}" "${res.statusCode}" "${req.get('User-Agent')}"\n`;
    
    // Log the Request
    await logger(log, 'requests.log');

    // Continue
    next();
};

// Error logger
const error_handler = async (err, req, res) => {
    // Attempt to get the passport user
    var user = req.passport ? req.passport.user : '-';

    // Log format if req, or otherwise
    var log;
    if (req){
        log = `${req.ip} - ${user} ${format(new Date(), 'dd/MMMM/yyyy:HH:mm:ss +0500')} "${req.method} ${req.url} HTTP/${req.httpVersion}" "${err.name}: ${err.mesage}" "${req.get('User-Agent')}"\n`;
    } else {
        log = `${format(new Date(), 'dd/MMMM/yyyy:HH:mm:ss +0500')} "${err.name}: ${err.message}"\n`;  
    }

    // Log the error
    await logger(log, 'errors.log');

    // If there is no res.statusCode, send 500 status code, otherwise send the status code
    return res ? res.statusCode ? res.status(res.statusCode).send(err.name + ': ' + err.message) : res.status(500).send(err.name + ': ' + err.message) : console.error(err.name + ': ' + err.message);
};


// Export
module.exports = {logger, requests_handler, error_handler};