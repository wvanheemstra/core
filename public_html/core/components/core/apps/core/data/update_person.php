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
    if (is_array($jsonData)) {
		$id = $jsonData[$idField];
		$sql  = "UPDATE `".$table."` SET kf_SalutationID = ".$jsonData['kf_SalutationID'].",PersonFirstName = '".$jsonData['PersonFirstName']."',PersonLastName = '".$jsonData['PersonLastName']."',kf_GenderID = ".$jsonData['kf_GenderID'].",kf_NationalityID = ".$jsonData['kf_NationalityID'];
		$sql .= " WHERE ".$idField." = ".$id;
		$result = mysql_query($sql) or die(mysql_error());
    };
	
	if($jsonData['DateStart'].length > 0) {
		$dateStart = $jsonData['DateStart'];
		$dateStart = date("Y-m-d",strtotime($dateStart));
		$dateID = $jsonData['kf_DateID'];
		// UPDATE date HERE for DateStart where person.kf_DateID = date.kp_DateID
		$sqlDate  = "UPDATE `date` SET StartDate = ".$dateStart." WHERE kp_DateID = ".$dateID;
		$result = mysql_query($sqlDate) or die(mysql_error());
	};
	
	if($jsonData['kf_GroupID'].length > 0) {
		$groupIDs = explode(",", $jsonData['kf_GroupID']);
		$numOfGroupIDs = count($groupIDs);
		$countedGroupIDs = 0;
		if($numOfGroupIDs > 0){
			for ($i = 0; $i < $numOfGroupIDs; $i++) {
				$countedGroupIDs = $countedGroupIDs + 1;
				// echo($groupIDs[$i]);
				// UPDATE person_group HERE for kf_PersonID and kf_GroupID
			}
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
		'sql' => $sql,
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
    $sql = "SELECT * FROM `".$table."` WHERE ".$idField." = ".$id;
    $result = mysql_query($sql) or die(mysql_error());
    while($rec = mysql_fetch_array($result, MYSQL_ASSOC)){
        $arr[] = $rec;
    };
    return $arr;
}
?>
