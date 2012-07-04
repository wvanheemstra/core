<?php
/**
 * ManageObject::Snippet
 *
 * 
 */
include('C:\wamp\www\core\components\core\settings.php');

include(CORE_SNIPPETS_PATH.'IDatabase.interface.snippet.php');
include(CORE_SNIPPETS_PATH.'DatabaseConnectionType.enum.snippet.php');
include(CORE_SNIPPETS_PATH.'DatabaseContext.context.snippet.php');
include(CORE_SNIPPETS_PATH.'DatabaseMySQL.class.snippet.php');
include(CORE_SNIPPETS_PATH.'DatabaseMySQLI.class.snippet.php');
include(CORE_SNIPPETS_PATH.'DatabaseODBC.class.snippet.php');
include(CORE_SNIPPETS_PATH.'Table.abstract.snippet.php');
include(CORE_SNIPPETS_PATH.'Person.class.snippet.php');
include(CORE_SNIPPETS_PATH.'Salutation.class.snippet.php');
include(CORE_SNIPPETS_PATH.'Gender.class.snippet.php');
include(CORE_SNIPPETS_PATH.'Nationality.class.snippet.php');

$output = NULL;
$result = NULL;
$object = NULL;
$params = array();

// Set values for parameters provided
$params['id'] = isset($id) ? $id : null;  // e.g. 45
$params['object'] = isset($object) ? $object : 'person'; // e.g. person
$params['function'] = isset($function) ? $function : 'select';  // e.g. select
$params['format'] = isset($format) ? $format : 'json';  // e.g. json
$params['limit'] = isset($limit) ? $limit : '0,25';  // e.g. 0,25

switch ($params['function'])
{
case "select":
  $fields = array();
  $criteria = array('id'=>$params['id']);
  switch ($params['object'])
  {
    case "person":
      //code to be executed if $object="person";
      $object = new Person();
      $result = $object->select($fields,$criteria,$params['limit']);
      //echo "{$result->PersonFirstName} {$result->PersonLastName}";
      break;
    default:
      break;
  }
  break;
case "update":
  $criteria = array('id'=>$params['id']);
  switch ($params['object'])
  {
    case "person":
      //code to be executed if $object="person";
      $object = new Person();
      // call to update function here....
      break;
    default:
      break;
  }
  break;
case "insert":
  $criteria = array('id'=>$params['id']);
  switch ($params['object'])
  {
    case "person":
      //code to be executed if $object="person";
      $object = new Person();
      // call to insert function here....
      break;
    default:
      break;
  }
  break;
case "delete":
  $criteria = array('id'=>$params['id']);
  switch ($params['object'])
  {
    case "person":
      //code to be executed if $object="person";
      $object = new Person();
      // call to delete function here....
      break;
    default:
      break;
  }
  break;
default:
  //code to be executed if $function is different from any of the above;
  break;
}

switch ($params['format'])
{
case "json":
  $output = json_encode($result);
  break;
default:
  $output = $result;
  break;
}


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
echo ($output);
//return ($output);