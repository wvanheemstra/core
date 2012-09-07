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
$table='group';
   
//make database connection
$connection = mysql_connect($host, $user, $pw) or
   die("Could not connect: " . mysql_error());
mysql_set_charset("UTF8", $connection);     
mysql_select_db($db) or die("Could not select database");

saveGroup();
    
function saveGroup() 
{
    $jsonData = getInputParms();

//print_r($jsonData);

    if (is_array($jsonData)) {

        if ($jsonData['kp_GroupID'] > 0) {
            $id = $jsonData['kp_GroupID'];

            $sql  = 'UPDATE group SET GroupName = "'.$jsonData['GroupName'].'",kf_KindOfGroupID = '.$jsonData['kf_KindOfGroupID'].'];
            $sql .= ' WHERE kp_GroupID = '.$jsonData['kp_GroupID'];
            $result = mysql_query($sql); // result set
        } else {
            $sql  = 'INSERT INTO group (GroupName,kf_KindOfGroupID) VALUES ("'.$jsonData['GroupName'].'",'.$jsonData['kf_KindOfGroupID'].')';
            $result = mysql_query($sql); // result set
            $id = mysql_insert_id();
        }
    }    

    $data = getGroup($id); // already encoded

    $return = array(
        'success' => TRUE,
        'data' => $data // this should be the data returned from new/updated record in table
    );
      
    $return = json_encode($return);
    echo $return;  
}


function getGroup($kp_GroupID)
{
    $sql = 'SELECT * FROM group WHERE kp_GroupID = '.$kp_GroupID;
    
    $result = mysql_query($sql); // result set
    
    while($rec = mysql_fetch_array($result, MYSQL_ASSOC)){
        $arr[] = $rec;
    };

    return $arr;  //encode the data in json format
}

?>
