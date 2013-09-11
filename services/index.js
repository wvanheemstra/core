/*
 * Index Read and Write Service.
 */
/********************************************************************************************
 * INDEX READ
 *********************************************************************************************/
exports.read = function(req, res) {
    /****************************************************************************
     * Requirements
     *****************************************************************************/
    var sys = require("sys"),
            http = require("http"),
            url = require("url"),
            path = require("path"),
            fs = require("fs");
    /****************************************************************************
     * Properties
     *****************************************************************************/
    function indexProperties() {
        this.err = null;
        this.req = null;
        this.res = null;
        this.result = null;
    }
    /*****************************************************************************
     * Main
     ******************************************************************************/
    var indexProperties = new indexProperties(); // instantiate the function object holding all properties

    indexProperties.req = req;
    indexProperties.res = res;
    indexProperties.result = [];
    indexProperties.result.title = 'My Title';
    indexProperties.result.welcome = 'Hello from Skin !';
    indexProperties.result.background = 'Hello from Skin !';
    indexProperties.res.header('Access-Control-Allow-Origin', '*'); // to allow cross-domain, replace * with a list of domains is desired.
    indexProperties.res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    indexProperties.res.header('Access-Control-Allow-Credentials', true);
    indexProperties.res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    indexProperties.res.header('Content-Type', 'text/html');
    indexProperties.res.render(__dirname + '/../views/index.jade', {
        title: indexProperties.result.title,
        welcome: indexProperties.result.welcome
    });    
    indexProperties.res.send();
};//eof export.read
/********************************************************************************************
 * INDEX WRITE
 *********************************************************************************************/
exports.write = function(req, res) {
    // not implemented
};//eof export.write