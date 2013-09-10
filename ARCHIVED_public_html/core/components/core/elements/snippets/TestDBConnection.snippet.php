<?php
/**
 * TestDBConnection::Snippet
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

/** ODBC Connection Test **/
print_r("<br/><hr/>");
print_r("ODBC Connection Test");
$dbConnTypeODBC = DatabaseConnectionType::ODBC;
$dbODBC = new DatabaseContext($dbConnTypeODBC);
$credentialsODBC = array (
    "dsn"  => "fmp_odbc_32bit",
    "user" => "Admin",
    "pwd"  => ""
);
print_r("<pre>");
print_r($credentialsODBC);
print_r("</pre>");
print_r("<br/>Select kp_PersonID, PersonFirstName, PersonLastName from PERSON_self<br/>");
$dbODBC->doConnect($credentialsODBC);
$dbODBC->doQuery("Select kp_PersonID, PersonFirstName, PersonLastName from PERSON_self");
$dbODBC->loadObjectList();
$dbODBC->doDisconnect();
print_r("<br/><hr/>");

/** MySQLI Connection Test **/
print_r("<br/><hr/>");
print_r("MySQLI Connection Test");
$dbConnTypeMySQLI = DatabaseConnectionType::MYSQLI;
$dbMySQLI = new DatabaseContext($dbConnTypeMySQLI);
$credentialsMySQLI = array (
    "host"  => "localhost",
    "port"  => "3306",
    "user" => "root",
    "pwd"  => "",
    "db"  => "core",
);
print_r("<pre>");
print_r($credentialsMySQLI);
print_r("</pre>");
print_r("<br/>select * from person<br/>");
$dbMySQLI->doConnect($credentialsMySQLI);
$dbMySQLI->doQuery("select * from person");
$result = $dbMySQLI->loadObjectList();
$dbMySQLI->doDisconnect();
print_r(implode(',', $result)."<br/><hr/>");


return;