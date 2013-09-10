<?php
/**
 * Person::Class
 *
 * Person object mapped on table
 */
 class Person extends Table
 {
 	var $FirstName = NULL;
 	var $LastName = NULL;
 	var $SalutationAbbreviation = NULL;
 	var $Gender = NULL;
 	var $Nationality = NULL;
 	var $RelationshipWithSelf = NULL;
	protected $table = "person";
	protected $idField = "kp_PersonID";
	private $limit = NULL;	
	private $output = NULL;
	private $result = NULL;
	private $results = NULL;
	private $object = NULL;

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
			$person->store($this->idField); // provide the name of the id field
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
			$person->load($id,$this->idField);
			$data = $values; // the new information
			$person->bind($data);
			$person->store($this->idField); // provide the name of the id field
		}
		catch(exception $ex) {
			// do something with the exception;
			return(false);
			exit;
		}
        return(true);
    }
    // select
    function select(array $fields, array $criteria, $limit) {
		try {
			//  ???? HOW ARE WE SETTING THE WHERE CLAUSE???
			// AND WHAT IF NO ID IS PROVIDED IN THE $criteria
			if($criteria != null) {
				foreach ($criteria as $key => $val) {
					$person = new Person();
					//print "$key = $val\n";
					if($key == "id") {
						$id = $val;
						if($id != null){
							$person->load($id,$this->idField,$limit);
							$result = $person;
							// Map table fields to object properties
							$person->setFirstName($result->PersonFirstName);
							$person->setLastName($result->PersonLastName);
							$person->setSalutationAbbreviation($result->kf_SalutationID);
							$person->setGender($result->kf_GenderID);
							$person->setNationality($result->kf_NationalityID);
							$person->setRelationshipWithSelf($result->RelationshipWithSelf);
							$output = $person;
						}
					}
				}
				// If no id provided, select all records
				if($id == null){
					$person->loadAll($limit);
					$results = $person;
					$i = 1;
					foreach ($results as $key => $val) {
						$array = json_encode($results->$i);
						$array = json_decode($array,true); // turns it from an object into an array, for easy adding
						$person = new Person();
						// Map table fields to object properties
						$person->setFirstName($array['PersonFirstName']);
						$person->setLastName($array['PersonLastName']);
						$person->setSalutationAbbreviation($array['kf_SalutationID']);
						$person->setGender($array['kf_GenderID']);
						$person->setNationality($array['kf_NationalityID']);
						$person->setRelationshipWithSelf($array['RelationshipWithSelf']);
						$array['FirstName']=$person->getFirstName();
						$array['LastName']=$person->getLastName();		
						$array['SalutationAbbreviation']=$person->getSalutationAbbreviation();		
						$array['Gender']=$person->getGender();		
						$array['Nationality']=$person->getNationality();				
						$array['RelationshipWithSelf']=$person->getRelationshipWithSelf();					
						$array = json_encode($array); // turns it back into an object
						$result[$i] = $array;
						$i = $i+1;
					}
					$output = $result;  // NOTE: Momentarily too many times through the foreach !!
				}
			}
		}
		catch(exception $ex) {
			// do something with the exception;
			return(null);
			exit;
		}
        return($output);
    }
    function delete(array $criteria) {
    	// Implement the deletion of a person here
    }
    protected function getFirstName() {
    	return ($this->FirstName);   	
    }
    protected function setFirstName($firstName) {
    	$this->FirstName = $firstName;
    }
    protected function getLastName() {
    	return ($this->LastName);    	 
    }
    protected function setLastName($lastName) {
    	$this->LastName = $lastName;
    }
    protected function getRelationshipWithSelf() {
    	return ($this->RelationshipWithSelf);
    }
    protected function setRelationshipWithSelf($relationshipWithSelf) {
    	$this->RelationshipWithSelf = $relationshipWithSelf;
    }    
    protected function getSalutationAbbreviation() {
    	return ($this->Salutation); 	
    }
    protected function setSalutationAbbreviation($id) {
    	$fields = array();
    	$criteria = array('id'=>$id);
    	$salutation = new Salutation();
    	$result = $salutation->select($fields,$criteria);
    	if($result != null){
    		$this->SalutationAbbreviation = $result->Abbreviation;
    	}
    }
    protected function getGender() {
    	return ($this->Gender);
    }
    protected function setGender($id) {
    	$fields = array();
    	$criteria = array('id'=>$id);
    	$gender = new Gender();
    	$result = $gender->select($fields,$criteria);
    	if($result != null){
    		$this->Gender = $result->Name;
    	}
    }
    protected function getNationality() {
    	return ($this->Nationality);
    }
    protected function setNationality($id) {
    	$fields = array();
    	$criteria = array('id'=>$id);
    	$nationality = new Nationality();
    	$result = $nationality->select($fields,$criteria);
    	if($result != null){
    		$this->Nationality = $result->Name;
    	}
    }
 }