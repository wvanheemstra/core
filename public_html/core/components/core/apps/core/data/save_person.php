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

savePerson();
    
function savePerson() 
{
    $jsonData = getInputParms();

//print_r($jsonData);

    if (is_array($jsonData)) {

        if ($jsonData['kp_PersonID'] > 0) {
            $id = $jsonData['kp_PersonID'];

            $sql  = 'UPDATE person SET kf_SalutationID = '.$jsonData['kf_SalutationID'].',PersonFirstName = "'.$jsonData['PersonFirstName'].'",PersonLastName = "'.$jsonData['PersonLastName'].'",kf_GenderID = '.$jsonData['kf_GenderID'].',kf_NationalityID = '.$jsonData['kf_NationalityID'];
            $sql .= ' WHERE kp_PersonID = '.$jsonData['kp_PersonID'];
            $result = mysql_query($sql); // result set
        } else {
            $sql  = 'INSERT INTO person (kf_SalutationID,PersonFirstName,PersonLastName,kf_GenderID,kf_NationalityID) VALUES ('.$jsonData['kf_SalutationID'].',"'.$jsonData['PersonFirstName'].'","'.$jsonData['PersonLastName'].'",'.$jsonData['kf_GenderID'].','.$jsonData['kf_NationalityID'].')';
            $result = mysql_query($sql); // result set
            $id = mysql_insert_id();
        }
    }    

    $data = getPerson($id); // already encoded

    $return = array(
        'success' => TRUE,
        'data' => $data // this should be the data returned from new/updated record in table
    );
      
    $return = json_encode($return);
    echo $return;  
}


function getPerson($kp_PersonID)
{
    $sql = 'SELECT * FROM person WHERE kp_PersonID = '.$kp_PersonID;
    
    $result = mysql_query($sql); // result set
    
    while($rec = mysql_fetch_array($result, MYSQL_ASSOC)){
        $arr[] = $rec;
    };

    return $arr;  //encode the data in json format
}

?>
