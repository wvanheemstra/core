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
$table='person';

//make database connection
$connection = mysql_connect($host, $user, $pw) or
   die("Could not connect: " . mysql_error());
mysql_set_charset("UTF8", $connection);     
mysql_select_db($db) or die("Could not select database");

destroyPerson();
    
function destroyPerson() 
{
    $jsonData = getInputParms();

//print_r($jsonData);

    if (is_array($jsonData)) {

        if ($jsonData['kp_PersonID'] > 0) {
            $id = $jsonData['kp_PersonID'];

            $sql  = 'DELETE FROM person';
            $sql .= ' WHERE `kp_PersonID` = '.$jsonData['kp_PersonID'];
            $result = mysql_query($sql) or die(mysql_error()); // result set
        }
    }    

    $data = getPerson($id); // already encoded

    $return = array(
        'success' => TRUE,
        'data' => $data // this should be the data returned from deleted record in table, hence no rows at all
    );
      
    $return = json_encode($return);
    echo $return;  
}

function getPerson($kp_PersonID)
{
    $sql = 'SELECT * FROM person WHERE kp_PersonID = '.$kp_PersonID;
    
    $result = mysql_query($sql) or die(mysql_error()); // result set
    
    while($rec = mysql_fetch_array($result, MYSQL_ASSOC)){
        $arr[] = $rec;
    };

    return $arr;  //encode the data in json format
}

?>