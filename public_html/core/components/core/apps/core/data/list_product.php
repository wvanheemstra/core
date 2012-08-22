<?php   

//database parameters
$user='sencha'; 
$pw='sencha';
$db='sencha';
$table='products';
   
//make database connection
$connection = mysql_connect("localhost", $user, $pw) or
   die("Could not connect: " . mysql_error());
mysql_select_db($db) or die("Could not select database");

listProducts();
    
function listProducts() 
{
    $sql = 'SELECT * FROM products';
    
    $result = mysql_query($sql); // result set
    
    while($rec = mysql_fetch_array($result, MYSQL_ASSOC)){
        $arr[] = $rec;
    };

    $rows = 10; // dummy value; used for paging; not needed here
    $data = json_encode($arr);  //encode the data in json format
      
    echo '({"total":"' . $rows . '","data":' . $data . '})';
}

?>
