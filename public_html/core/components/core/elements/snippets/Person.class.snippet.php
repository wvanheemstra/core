<?php
/**
 * Person::Class
 *
 * Person table
 */
 class Person extends Table
 {
	var $personFirstName = NULL;
	var $personLastName = NULL;
	var $table = "person";
	
	// constructor
    function Person() {
        return(true);
    }
	
	// methods
	function methods() {
		$methods[] = get_class_methods(new Person()); // returns the names of all methods of this class
		return($methods);
	}

	// insert
    function insert(array $values) {
		try {
			$data = $values; // the new information
			$person->bind($data);
			$person->store('kp_PersonID'); // provide the name of the id field
		}
		catch(exception $ex) {
			// do something with the exception;
			return(false);
			exit;
		}
        return(true);
    }
	
    // update
    function update($id, array $values) {
		try {
			$person->load($id,'kp_PersonID');
			$data = $values; // the new information
			$person->bind($data);
			$person->store('kp_PersonID'); // provide the name of the id field
		}
		catch(exception $ex) {
			// do something with the exception;
			return(false);
			exit;
		}
        return(true);
    }

    // select
    function select($fields, $criteria) {
		try {
			//  ???? HOW ARE WE SETTING THE WHERE CLAUSE???
			// AND WHAT IF NO ID IS PROVIDED IN THE fields
			$person->load($id,'kp_PersonID');
		}
		catch(exception $ex) {
			// do something with the exception;
			return(null);
			exit;
		}
        return($person);
    }
	
	
 }