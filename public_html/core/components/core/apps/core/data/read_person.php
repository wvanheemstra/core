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
	
	if (isset($_GET['sort'])) {
		$sortArray = $_GET['sort'];
		$sortArray = json_decode($sortArray);
		$sortArray = $sortArray[0];
		for($i = 0; $i <= sizeof($sortArray); $i++)
		  {
		  	$sort_key = key($sortArray);        //get the key value (e.g. 'property')
		  	$sort_value = current($sortArray);    //get the element value (e.g. 'PersonLastName’)
			switch ($sort_key)
			{
				case 'property':
					$sort_property = $sort_value;
			  		break;
				case 'direction':
			  		$sort_direction = $sort_value;
			  		break;
				default:
			  		// ignore
			}
		  	next($sortArray); //move to the next array element.
		  }
		//Remove the array from memory
		unset($sortArray);
	}
	
	// Get the count of the total records in the table
	$sql = "SELECT `".$idField."` FROM `".$table."`"; 
	$result = mysql_query($sql) or die(mysql_error()); 
	$num_rows = mysql_num_rows($result);
	
	// Get the requested number of records
	$offset=($page - 1) * $limit;
	
	if($sort_property!="") {
		$sql = "SELECT * FROM `".$table."` ORDER BY `".$sort_property."` ".$sort_direction." LIMIT ".$offset.", ".$limit;
	}
	else {
		$sql = "SELECT * FROM `".$table."` LIMIT ".$offset.", ".$limit;
	}

    $result = mysql_query($sql) or die(mysql_error());
	$i = 0;
    while($rec = mysql_fetch_array($result, MYSQL_ASSOC)){
        $arr[] = $rec;
		// DATE - hasOne
		$dateStart = null;
		$arrDate = null;		
		foreach($rec as $key => $value) {
			if($key == 'kf_DateID') {
				$idDate = $value;
			}
		}
		$sqlDate = "SELECT `kp_DateID`, `DateStart`, `DateFinish` FROM `date` WHERE `kp_DateID` = " .$idDate;
		$resultDate = mysql_query($sqlDate) or die(mysql_error());
		while($recDate = mysql_fetch_array($resultDate, MYSQL_ASSOC)){
	        $arrDate[] = $recDate;
	    };
		$dateRecord = array_values($arrDate[0]);
		$dateID = $dateRecord[0];	
		$dateStart = $dateRecord[1];
		$dateStart = date("Y-m-d",strtotime($dateStart));
		$dateFinish = $dateRecord[2];
		$dateFinish = date("Y-m-d",strtotime($dateFinish));
		$date = array("kp_DateID"=>$dateID, "DateStart"=>$dateStart, "DateFinish"=>$dateFinish);
		$dates = array("date" => $date);
		if($dates) {
			$arr[$i] = array_replace($arr[$i], $dates); // Add dates to arr
		}
		// GROUPS - hasMany
		$group = null; // Fill with group id's
		$groups = array("groups" => $group);
		if($groups) {
			$arr[$i] = array_replace($arr[$i], $groups); // Add groups to arr
		}
		$i = $i + 1;
    };
	$data = $arr;
	
	$return = array(
	'total' => $num_rows,
	'success' => TRUE,
	'sort_property' => $sort_property,
	'sort_direction' => $sort_direction,
	'sqlDate' => $sqlDate, // for testing only
	'sql' => $sql,
	'data' => $data
	);
	
	header('Content-type: application/json'); 	
    $return = json_encode($return);
    echo $return;
}

?>
