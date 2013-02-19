<?php   
function getInputParms()
{
    $result = NULL;
    if(function_exists('json_decode')) {
        $jsonData = json_decode(trim(file_get_contents('php://input')), true);
        $result = $jsonData['data'][0];
    }
    return $result;
}
include 'dbparams.php';

$connection = mysql_connect($host, $user, $pw) or
   die("Could not connect: " . mysql_error());
mysql_set_charset("UTF8", $connection);     
mysql_select_db($db) or die("Could not select database");

createRecords();

function createRecords() 
{
	$num_rows = 1;  // We insert 1 record at a time
    $jsonData = getInputParms();
	if (isset($_GET['table'])) {
		$table = $_GET['table'];
	};
	if (isset($_GET['idField'])) {
		$idField = $_GET['idField'];
	};
	if (isset($_GET['timezone'])) {
		$timezone = $_GET['timezone'];
	};
	
	// PERSON
    if (is_array($jsonData)) {
		$sqlPerson = "INSERT INTO `".$table."` (`kf_SalutationID`,`PersonFirstName`,`PersonLastName`,`kf_GenderID`,`kf_NationalityID`) VALUES (".$jsonData['kf_SalutationID'].",'".$jsonData['PersonFirstName']."','".$jsonData['PersonLastName']."',".$jsonData['kf_GenderID'].",".$jsonData['kf_NationalityID'].")";
		$result = mysql_query($sqlPerson) or die(mysql_error());
		$idPerson = mysql_insert_id();
    } 

	// DATE - hasOne
	if(!is_null($jsonData['DateStart'])) {
		$dateStart = $jsonData['DateStart'];
		$dateStart = date("Y-m-d",strtotime($dateStart)); // use this for CREATING a date, don't use the explode 
		//$dateStart = explode(" ", $dateStart); // is like ["Wed","Sep","26","2012","00:00:00","GMT+0100","(GMT","Daylight","Time)"]
		//$dateID = $jsonData['kf_DateID'];
		$sqlDate = "SET FOREIGN_KEY_CHECKS = 0;";
		$result = mysql_query($sqlDate) or die(mysql_error());
		$sqlDate  = "INSERT INTO `date` (`DateStart`) VALUES('".$dateStart."')";
		$result = mysql_query($sqlDate) or die(mysql_error());
		$idDate = mysql_insert_id();
		$sqlDate = "SET FOREIGN_KEY_CHECKS = 1;";
		$result = mysql_query($sqlDate) or die(mysql_error());
		$sqlPerson  = "UPDATE `person` SET `kf_DateID` = ".$idDate." WHERE `kp_PersonID` = ".$idPerson.";";
		$result = mysql_query($sqlPerson) or die(mysql_error());
		$date = array("kp_DateID"=>$idDate, "DateStart"=>$dateStart);
		$dates = array("date" => $date);
	};
	
	// MEMBERSHIP - hasMany	
	$sqlMembership  = "DELETE FROM `membership` WHERE `kf_PersonID` = ".$idPerson.";";
	$result = mysql_query($sqlMembership) or die(mysql_error());
	$sqlMembership = "SET FOREIGN_KEY_CHECKS = 0;";
	$result = mysql_query($sqlMembership) or die(mysql_error());
	$sqlMembership  = "INSERT INTO `membership` (`kf_PersonID`) VALUES('".$idPerson."');";
	$result = mysql_query($sqlMembership) or die(mysql_error());
	$idMembership = mysql_insert_id();
	$sqlMembership = "SET FOREIGN_KEY_CHECKS = 1;";
	$result = mysql_query($sqlMembership) or die(mysql_error());
	
	// CONTACT - hasMany
	$sqlContact  = "DELETE FROM `contact` WHERE `kf_MembershipID` = ".$idMembership.";";
	$result = mysql_query($sqlContact) or die(mysql_error());
	
	// CONTACT - Telephone	
	$sqlContactTelephone = "SELECT `kp_KindOfContactID` FROM `kind_of_contact` WHERE `KindOfContactName` = 'TelephoneLandlineNumber';"; 
	$idKindOfContactTelephone = mysql_query($sqlContactTelephone) or die(mysql_error());
	$sqlContactTelephone = "SET FOREIGN_KEY_CHECKS = 0;";
	$result = mysql_query($sqlContactTelephone) or die(mysql_error());
	// Despite the disabled foreign key restraint, we have to do the following in two steps instead on one 
	$sqlContactTelephone  = "INSERT INTO `contact` (`kf_MembershipID`) VALUES('".$idMembership."');";
	$result = mysql_query($sqlContactTelephone) or die(mysql_error());
	$idContact = mysql_insert_id();
	$sqlContactTelephone  = "UPDATE `contact` SET `kf_KindOfContactID` = '".$idKindOfContactTelephone."' WHERE `kp_ContactID` = '".$idContact."'"; // Here something fails to execute, to do with a constraint
//	$result = mysql_query($sqlContactTelephone) or die(mysql_error());  // THIS IS TO PUT THE KIND OF CONTACT INTHE TABLE.. A REQUIREMENT
	$sqlContactTelephone = "SET FOREIGN_KEY_CHECKS = 1;";	
	$result = mysql_query($sqlContactTelephone) or die(mysql_error());
	
	// CONTACT - Mobile
	$sqlContactMobile = "SELECT `kp_KindOfContactID` FROM `kind_of_contact` WHERE `KindOfContactName` = 'TelephoneMobileNumber';"; // Make this less error prone
	$idKindOfContactMobile = mysql_query($sqlContactMobile) or die(mysql_error());
	$sqlContactMobile = "SET FOREIGN_KEY_CHECKS = 0;";
	$result = mysql_query($sqlContactMobile) or die(mysql_error());
	// Despite the disabled foreign key restraint, we have to do the following in two steps instead on one	
	$sqlContactMobile  = "INSERT INTO `contact` (`kf_MembershipID`) VALUES('".$idMembership."');";	
	$result = mysql_query($sqlContactMobile) or die(mysql_error());
	$idContact = mysql_insert_id();
	$sqlContactMobile  = "UPDATE `contact` SET `kf_KindOfContactID` = '".$idKindOfContactMobile."' WHERE `kp_ContactID` = '".$idContact."'"; // Here something fails to execute, to do with a constraint
//	$result = mysql_query($sqlContactMobile) or die(mysql_error());  // THIS IS TO PUT THE KIND OF CONTACT INTHE TABLE.. A REQUIREMENT
	$sqlContactMobile = "SET FOREIGN_KEY_CHECKS = 1;";	
	$result = mysql_query($sqlContactMobile) or die(mysql_error());	
		
	// CONTACT - Fax
	$sqlContactFax = "SELECT `kp_KindOfContactID` FROM `kind_of_contact` WHERE `KindOfContactName` = 'FaxNumber';"; // Make this less error prone
	$idKindOfContactFax = mysql_query($sqlContactFax) or die(mysql_error());
	$sqlContactFax = "SET FOREIGN_KEY_CHECKS = 0;";
	$result = mysql_query($sqlContactFax) or die(mysql_error());
	// Despite the disabled foreign key restraint, we have to do the following in two steps instead on one	
	$sqlContactFax  = "INSERT INTO `contact` (`kf_MembershipID`) VALUES('".$idMembership."');";	
	$result = mysql_query($sqlContactFax) or die(mysql_error());
	$idContact = mysql_insert_id();
	$sqlContactFax  = "UPDATE `contact` SET `kf_KindOfContactID` = '".$idKindOfContactFax."' WHERE `kp_ContactID` = '".$idContact."'"; // Here something fails to execute, to do with a constraint
//	$result = mysql_query($sqlContactFax) or die(mysql_error());  // THIS IS TO PUT THE KIND OF CONTACT INTHE TABLE.. A REQUIREMENT
	$sqlContactFax = "SET FOREIGN_KEY_CHECKS = 1;";	
	$result = mysql_query($sqlContactFax) or die(mysql_error());
	
	// CONTACT - Email
	$sqlContactEmail = "SELECT `kp_KindOfContactID` FROM `kind_of_contact` WHERE `KindOfContactName` = 'ElectronicMailAddress';"; // Make this less error prone
	$idKindOfContactEmail = mysql_query($sqlContactEmail) or die(mysql_error());
	$sqlContactEmail = "SET FOREIGN_KEY_CHECKS = 0;";
	$result = mysql_query($sqlContactEmail) or die(mysql_error());
	// Despite the disabled foreign key restraint, we have to do the following in two steps instead on one	
	$sqlContactEmail  = "INSERT INTO `contact` (`kf_MembershipID`) VALUES('".$idMembership."');";	
	$result = mysql_query($sqlContactEmail) or die(mysql_error());
	$idContact = mysql_insert_id();
	$sqlContactEmail  = "UPDATE `contact` SET `kf_KindOfContactID` = '".$idKindOfContactEmail."' WHERE `kp_ContactID` = '".$idContact."'"; // Here something fails to execute, to do with a constraint
//	$result = mysql_query($sqlContactEmail) or die(mysql_error());  // THIS IS TO PUT THE KIND OF CONTACT INTHE TABLE.. A REQUIREMENT
	$sqlContactEmail = "SET FOREIGN_KEY_CHECKS = 1;";	
	$result = mysql_query($sqlContactEmail) or die(mysql_error());
	
	// PERSON_GROUP - hasMany
	$numOfGroupIDs = 0;
	$countedGroupIDs = 0;
	$sqlPersonGroup  = "DELETE FROM `person_group` WHERE `kf_PersonID` = ".$idPerson.";";
	if($jsonData['GroupIDs'].length > 0) {
		$groupIDs = explode(",", $jsonData['GroupIDs']);
		$numOfGroupIDs = count($groupIDs);

		if($numOfGroupIDs > 0){
			for ($i = 0; $i < $numOfGroupIDs; $i++) {
				$countedGroupIDs = $countedGroupIDs + 1;
				$sqlPersonGroup .= "INSERT INTO `person_group` (`kf_PersonID`, `kf_GroupID`) VALUES (".$idPerson.", ".$groupIDs[$i].");";
				$group[$i] = array("GroupID"=>$groupIDs[$i]);
			}
			$groups = array("groups" => $group);
		}
	};
	$queries = preg_split("/;+(?=([^'|^\\\']*['|\\\'][^'|^\\\']*['|\\\'])*[^'|^\\\']*[^'|^\\\']$)/", $sqlPersonGroup); 
	foreach ($queries as $query){ 
	   if (strlen(trim($query)) > 0) {
		$result = mysql_query($query) or die(mysql_error());
	   }
	};
	
    $data = readRecords($idPerson, $groups, $dates);
    $return = array(
		'total' => $num_rows,
		'submittedDateStart' => $jsonData['DateStart'],
		'dateStart' => $dateStart,
		'timezone' => $timezone,
		'countedGroupIDs' => $countedGroupIDs,
		'submittedGroupIDs' => $jsonData['GroupIDs'],
		'groupIDs' => $groupIDs,
        'success' => TRUE,
		'sqlPerson' => $sqlPerson,
		'sqlDate' => $sqlDate,
		'sqlPersonGroup' => $sqlPersonGroup,
        'data' => $data // this should be the data returned from new/updated record in table
    );
	header('Content-type: application/json'); 	
    $return = json_encode($return);
    echo $return;
}

function readRecords($id, $groups, $dates)
{	
	if (isset($_GET['table'])) {
		$table = $_GET['table'];
	};
	if (isset($_GET['idField'])) {
		$idField = $_GET['idField'];
	};
    $sql = "SELECT * FROM `".$table."` WHERE `".$idField."` = ".$id;
    $result = mysql_query($sql) or die(mysql_error());
    while($rec = mysql_fetch_array($result, MYSQL_ASSOC)){
        $arr[] = $rec;
    };
	if($groups) {
		$arr[0] = array_replace($arr[0], $groups); // Add groups to arr
	}
	if($dates) {
		$arr[0] = array_replace($arr[0], $dates); // Add dates to arr
	}
    return $arr;
}
?>
