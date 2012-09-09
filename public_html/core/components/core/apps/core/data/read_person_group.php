<?php   

include 'dbparams.php';

//make database connection
$connection = mysql_connect($host, $user, $pw ) or
   die("Could not connect: " . mysql_error());
mysql_set_charset("UTF8", $connection);   
mysql_select_db($db) or die("Could not select database");

listRecords();

function listRecords()
{	
	$start=0;
	$limit=100;
	$page=1;
	
	if (isset($_GET['table'])) {
		$table = $_GET['table'];
	};
	
	if (isset($_GET['idField'])) {
		$idField = $_GET['idField'];
	};
	
	if (isset($_GET['start'])) {
		$start = $_GET['start'];
	};

	if (isset($_GET['limit'])) {
		$limit = $_GET['limit'];
	};
	
	if (isset($_GET['page'])) {
		$page = $_GET['page'];
	};

	// Get the count of the total records in the table
	$sql = "SELECT `".$idField."` FROM `".$table."`"; 
	$result = mysql_query($sql) or die(mysql_error()); 
	$num_rows = mysql_num_rows($result);
	
	// Get the requested number of records
	$offset=($page - 1) * $limit;
	
    $sql = "SELECT * FROM `".$table."` LIMIT ".$offset.", ".$limit;
    $result = mysql_query($sql) or die(mysql_error());
    while($rec = mysql_fetch_array($result, MYSQL_ASSOC)){
        $arr[] = $rec;
    };
	$data = $arr;
	
	$return = array(
	'total' => $num_rows,
	'success' => TRUE,
	'sql' => $sql,
	'data' => $data
	);
	
	header('Content-type: application/json'); 	
    $return = json_encode($return);
    echo $return;
}

?>