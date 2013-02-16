/*
 * MQL Read service.
 */
exports.read = function(req, res) {
	
	var output = {};
	
	var service = "mqlread";
	output["service"] = service;
	
	var url = "/services/mql/read";
	output["url"] = url;

	// Static for the time being, make this dynamic
	var wines = [
    	{
        	name: "CHATEAU DE SAINT COSME",
        	year: "2009",
        	grapes: "Grenache / Syrah",
        	country: "France",
        	region: "Southern Rhone",
        	description: "The aromas of fruit and spice...",
        	picture: "saint_cosme.jpg"
    	},
    	{
        	name: "LAN RIOJA CRIANZA",
        	year: "2006",
        	grapes: "Tempranillo",
        	country: "Spain",
        	region: "Rioja",
        	description: "A resurgence of interest in boutique vineyards...",
        	picture: "lan_rioja.jpg"
    	}
	];
	
	// Static for the time being, make this dynamic	
	var persons = [
	    {
	     "type": "/core/person",
	     "kp_PersonID": 2,
	     "PersonFirstName": "Giuseppe",
	     "PersonLastName": "Cerda"
	    }
	 ];

	var code = "/api/status/ok";
    output["code"] = code; // Change depending on success or failure

    var result = persons; // Pick your choice of result here
    output["result"] = result;

	var status = "200 OK"; // Change depending on success or failure
	output["status"] = status;
	
	var transaction_id = "not implemented";
	output["transaction_id"] = transaction_id;

	res.header("Access-Control-Allow-Origin", "*"); // to allow cross-domain, replace * with a list of domains is desired.
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.send(output);
};

exports.write = function(req, res) {
	
	
	res.header("Access-Control-Allow-Origin", "*"); // to allow cross-domain, replace * with a list of domains is desired.
	res.header("Access-Control-Allow-Headers", "X-Requested-With");	
	res.send({ service : "mql.write", url 
	: "/services/mql/write", info: "mql.write not implemented" });
};