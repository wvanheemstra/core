<?php
/**
 * Nationality::Class
 *
 * Nationality object mapped on table
 */
 class Nationality extends Table
 {
 	var $Name = NULL;
 	protected $table = "nationality";
 	protected $idField = "kp_NationalityID";
 	private $limit = NULL;
 	private $output = NULL;
 	private $result = NULL;
 	private $object = NULL;
 	
 	// constructor
 	function Nationality() {
 		return(true);
 	}
 	// select
 	function select(array $fields, array $criteria) {
 		try {
 			//  ???? HOW ARE WE SETTING THE WHERE CLAUSE???
 			// AND WHAT IF NO ID IS PROVIDED IN THE $criteria
 			if($criteria != null) {
 				foreach ($criteria as $key => $val) {
 					$nationality = new Nationality();
 					// print "$key = $val\n";
 					if($key == "id") {
 						$id = $val;
 						$limit = "0,1"; // Limit the select to the first record found
 						$nationality->load($id,$this->idField,$limit);
 						$result = $nationality;
 						// Map table fields to object properties
 						$nationality->setName($result->NationalityName);
 						$output = $nationality;
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
