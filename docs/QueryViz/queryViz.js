var s1 = "Bars";
var s2 = "IMDB";
var s3 = "Sailors";
var s4 = "Belief worlds";
var s5 = "Abstract";
var s6 = "Core";

window.onload = function() {
    	$("select_query").onchange = loadQuery;
    	$("submit").onclick = run;
    	$("reset").onclick = reset;
    	loadQuery();
};


function loadQuery(){
	var q = $("select_query").value;
	
	$("query").value = QUERY[q];
	
	// Holds the values for schema and query consistent
	if (q == 0){
		reset();
	} else if (q < 200){
		$("schema").value = SCHEMA[s1];
	} else if (q < 300){
		$("schema").value = SCHEMA[s2];
	} else if (q < 400){
		$("schema").value = SCHEMA[s3];
	} else if (q < 500){
		$("schema").value = SCHEMA[s4];	
	} else if (q < 600){
		$("schema").value = SCHEMA[s5];	
	} else if (q < 700){
		$("schema").value = SCHEMA[s6];	
	}		
	$("query").focus();		// focus on query text after choice
}

function run(){
	var schema = $("schema").value;
	var query = $("query").value;
	
	if ((schema == "") || (query == "")){
		showMessage("Input(s) unspecified");
		$("image").src = "";
	} else {
		$("message").hide();
		var parameters = {schema: schema,
				  query: query
				 };
		new Ajax.Request("http://queryviz.com/online/local.php",
					{
						method: "get",              // get URL of image
						onSuccess: loadOutput,
						onFailure: ajaxFailure,
						onException: ajaxFailure,
						parameters: parameters
					}
		);
	}
}


// Get the unique url for the user (for now, it is still the default common/src/.....)
function loadOutput(ajax){
	var dir = ajax.responseText;                // responseText contains the url of the created image
	$("image").src = dir;
	showMessage("Image loaded.");
}


function ajaxFailure(ajax) {
	var err = ajax.responseText;
	showMessage(err);
	$("message").style.color = "Red";
}


function reset(){
	$("query").value = $("schema").value = "";
	$("query").style.height = "180px";		// sets the query field height back	
	$("schema").style.height = "60px";		// sets the query field height back		
	$("select_query").value = "0";			// choose empty selection
	$("image").src = "";					// delete picture
	showMessage("");						// delete message
}


// Displays an error message within the fieldset for invalid user queries
function showMessage(message){
	$("message").innerHTML = message;
	$("message").show();
	$("message").style.color = "";
}