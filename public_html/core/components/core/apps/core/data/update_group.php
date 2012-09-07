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
		$sql  = "UPDATE `".$table."` SET GroupName = '".$jsonData['GroupName']."',kf_KindOfGroupID = ".$jsonData['kf_KindOfGroupID'];
		$sql .= " WHERE ".$idField." = ".$id;
		$result = mysql_query($sql);
    }    
    $data = readRecords($id);
    $return = array(
		'total' => $num_rows,
        'success' => TRUE,
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
    $result = mysql_query($sql);
    while($rec = mysql_fetch_array($result, MYSQL_ASSOC)){
        $arr[] = $rec;
    };
    return $arr;
}
?>
