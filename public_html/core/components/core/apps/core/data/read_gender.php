<?php   

//database parameters
$host='localhost';
$port='3306';
$user='root'; 
$pw='';
$db='core';
$table='gender';
   
//make database connection
$connection = mysql_connect("localhost", $user, $pw ) or
   die("Could not connect: " . mysql_error());
mysql_set_charset("UTF8", $connection);   
mysql_select_db($db) or die("Could not select database");

listGenders();
    
function listGenders() 
{
    $sql = 'SELECT * FROM gender';
    
    $result = mysql_query($sql); // result set
    
    while($rec = mysql_fetch_array($result, MYSQL_ASSOC)){
        $arr[] = $rec;
    };

    $rows = 10; // dummy value; used for paging; not needed here
    $data = json_encode($arr);  //encode the data in json format
      
    echo '({"total":"' . $rows . '","data":' . $data . '})';
}

?>
