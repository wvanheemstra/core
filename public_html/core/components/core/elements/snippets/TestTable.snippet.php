<?php
/**
 * TestTable::Snippet
 *
 * 
 */
include('C:\wamp\www\core\components\core\settings.php');

include(CORE_SNIPPETS_PATH.'IDatabase.interface.snippet.php');
include(CORE_SNIPPETS_PATH.'DatabaseConnectionType.enum.snippet.php');
include(CORE_SNIPPETS_PATH.'DatabaseContext.context.snippet.php');
include(CORE_SNIPPETS_PATH.'DatabaseMySQLI.class.snippet.php');
include(CORE_SNIPPETS_PATH.'DatabaseODBC.class.snippet.php');
include(CORE_SNIPPETS_PATH.'Table.abstract.snippet.php');
include(CORE_SNIPPETS_PATH.'Person.class.snippet.php');

// Person specific

/** To find one person by its id:
 * $person = new Person();
 * $person->load('5','kp_PersonID');
*/

$person = new Person();
$person->load('2','kp_PersonID');
// echo "{$person->PersonFirstName} {$person->PersonLastName}";

/** Format output in JSON */
$myArray = $person;
$myJSONString = json_encode($myArray);



/** To add one person 
 * $person = new Person();
 * $data = array("PersonFirstName"=>"Napoleon","PersonLastName"=>"Bonaparte");
 * $person->bind($data);
 * $person->store('kp_PersonID'); // provide the name of the id field
*/

/** To update an existing person
 * $person = new Person();
 * $person->load('2','kp_PersonID');
 * $data = array("PersonFirstName"=>"Napoleon","PersonLastName"=>"Bonaparte"); // the new information
 * $person->bind($data);
 * $person->store('kp_PersonID'); // provide the name of the id field
*/


return $myJSONString;