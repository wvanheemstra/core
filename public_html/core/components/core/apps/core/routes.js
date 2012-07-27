/**
 * Resource Routes
 */
module.exports = function() {
    var Resource = require('express-resource');
    express.resource('services/persons', require('./resources/Person'));
};