<?php
/**
 * Salutation::Class
 *
 * Salutation object mapped on table
 */
 class Salutation extends Table
 {
 	var $Abbreviation = NULL;
 	protected $table = "salutation";
 	protected $idField = "kp_SalutationID";
 	private $limit = NULL;
 	private $output = NULL;
 	private $result = NULL;
 	private $object = NULL;
 	
 	// constructor
 	function Salutation() {
 		return(true);
 	}
 	// select
 	function select(array $fields, array $criteria) {
 		try {
 			//  ???? HOW ARE WE SETTING THE WHERE CLAUSE???
 			// AND WHAT IF NO ID IS PROVIDED IN THE $criteria
 			if($criteria != null) {
 				foreach ($criteria as $key => $val) {
 					$salutation = new Salutation();
 					//print "$key = $val\n";
 					if($key == "id") {
 						$id = $val;
 						$limit = "0,1"; // Limit the select to the first record found
 						$salutation->load($id,$this->idField,$limit);
 						$result = $salutation;
 						// Map table fields to object properties
 						$salutation->setAbbreviation($result->SalutationAbbreviation);
 						$output = $salutation;
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
 	protected function getAbbreviation() {
 		return ($this->Abbreviation);
 	}
 	protected function setAbbreviation($abbreviation) {
 		$this->Abbreviation = $abbreviation;
 	}
 }