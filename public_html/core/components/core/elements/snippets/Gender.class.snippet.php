<?php
/**
 * Gender::Class
 *
 * Gender object mapped on table
 */
 class Gender extends Table
 {
 	var $Name = NULL;
 	protected $table = "gender";
 	protected $idField = "kp_GenderID";
 	private $limit = NULL;
 	private $output = NULL;
 	private $result = NULL;
 	private $object = NULL;
 	
 	// constructor
 	function Gender() {
 		return(true);
 	}
 	// select
 	function select(array $fields, array $criteria) {
 		try {
 			//  ???? HOW ARE WE SETTING THE WHERE CLAUSE???
 			// AND WHAT IF NO ID IS PROVIDED IN THE $criteria
 			if($criteria != null) {
 				foreach ($criteria as $key => $val) {
 					$gender = new Gender();
 					// print "$key = $val\n";
 					if($key == "id") {
 						$id = $val;
 						$limit = "0,1"; // Limit the select to the first record found
 						$gender->load($id,$this->idField,$limit);
 						$result = $gender;
 						// Map table fields to object properties
 						$this->setName($result->GenderName);
 						$output = $this;
 					}
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
 	protected function getName() {
 		return ($this->Name);
 	}
 	protected function setName($name) {
 		$this->Name = $name;
 	}
 }