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

updateRecords();

function updateRecords() 
{
	$num_rows = 1;  // We insert 1 record at a time
    $jsonData = getInputParms();
	if (isset($_GET['table'])) {
		$table = $_GET['table'];
	};
	if (isset($_GET['idField'])) {
		$idField = $_GET['idField'];
	};
	
	// PERSON
    if (is_array($jsonData)) {
		$id = $jsonData[$idField];
		$sqlPerson  = "UPDATE `".$table."` SET kf_SalutationID = ".$jsonData['kf_SalutationID'].",PersonFirstName = '".$jsonData['PersonFirstName']."',PersonLastName = '".$jsonData['PersonLastName']."',kf_GenderID = ".$jsonData['kf_GenderID'].",kf_NationalityID = ".$jsonData['kf_NationalityID'];
		$sqlPerson .= " WHERE ".$idField." = ".$id;
		$result = mysql_query($sqlPerson) or die(mysql_error());
    };
	
	// DATE
	if($jsonData['DateStart'].length > 0) {
		$dateStart = $jsonData['DateStart'];
		$dateStart = date("Y-m-d",strtotime($dateStart));
		$dateID = $jsonData['kf_DateID'];
		$sqlDate  = "UPDATE `date` SET DateStart = '".$dateStart."' WHERE kp_DateID = ".$dateID;
		$result = mysql_query($sqlDate) or die(mysql_error());
	};
	
	// PERSON_GROUP
	$numOfGroupIDs = 0;
	$countedGroupIDs = 0;
	$sqlPersonGroup  = "DELETE FROM `person_group` WHERE kf_PersonID = ".$id.";";
	if($jsonData['kf_GroupID'].length > 0) {
		$groupIDs = explode(",", $jsonData['kf_GroupID']);
		$numOfGroupIDs = count($groupIDs);

		if($numOfGroupIDs > 0){
			for ($i = 0; $i < $numOfGroupIDs; $i++) {
				$countedGroupIDs = $countedGroupIDs + 1;
				$sqlPersonGroup .= "INSERT INTO `person_group` (`kf_PersonID`, `kf_GroupID`) VALUES (".$id.", ".$groupIDs[$i].");";
			}
		}
	};
	$queries = preg_split("/;+(?=([^'|^\\\']*['|\\\'][^'|^\\\']*['|\\\'])*[^'|^\\\']*[^'|^\\\']$)/", $sqlPersonGroup); 
	foreach ($queries as $query){ 
	   if (strlen(trim($query)) > 0) {
		$result = mysql_query($query) or die(mysql_error());
	   }
	};

    $data = readRecords($id);
    $return = array(
		'total' => $num_rows,
		'dateStart' => $dateStart,
		'countedGroupIDs' => $countedGroupIDs,
		'submittedGroupIDs' => $jsonData['kf_GroupID'],
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

function readRecords($id)
{	
	if (isset($_GET['table'])) {
		$table = $_GET['table'];
	};
	if (isset($_GET['idField'])) {
		$idField = $_GET['idField'];
	};
    $sqlPerson = "SELECT * FROM `".$table."` WHERE ".$idField." = ".$id;
    $result = mysql_query($sqlPerson) or die(mysql_error());
    while($rec = mysql_fetch_array($result, MYSQL_ASSOC)){
        $arr[] = $rec;
    };
    return $arr;
}
?>
