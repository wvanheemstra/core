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

//database parameters
$user='sencha'; 
$pw='sencha';
$db='sencha';
$table='products';
   
//make database connection
$connection = mysql_connect("localhost", $user, $pw) or
   die("Could not connect: " . mysql_error());
mysql_select_db($db) or die("Could not select database");

saveProduct();
    
function saveProduct() 
{
    $jsonData = getInputParms();

//print_r($jsonData);

    if (is_array($jsonData)) {

        if ($jsonData['idProduct'] > 0) {
            $id = $jsonData['idProduct'];

            $sql  = 'UPDATE products SET productName = "'.$jsonData['productName'].'",qty = '.$jsonData['qty'].',rate = '.$jsonData['rate'].',total = '.$jsonData['total'];
            $sql .= ' WHERE idProduct = '.$jsonData['idProduct'];
            $result = mysql_query($sql); // result set
        } else {
            $sql  = 'INSERT INTO products (productName,qty,rate,total) VALUES ("'.$jsonData['productName'].'",'.$jsonData['qty'].','.$jsonData['rate'].','.$jsonData['total'].')';
            $result = mysql_query($sql); // result set
            $id = mysql_insert_id();
        }
    }    

    $data = getProduct($id); // already encoded

    $return = array(
        'success' => TRUE,
        'data' => $data // this should be be data returned from new/updated record in table
    );
      
    $return = json_encode($return);
    echo $return;  
}


function getProduct($idProduct)
{
    $sql = 'SELECT * FROM products WHERE idProduct = '.$idProduct;
    
    $result = mysql_query($sql); // result set
    
    while($rec = mysql_fetch_array($result, MYSQL_ASSOC)){
        $arr[] = $rec;
    };

    return $arr;  //encode the data in json format
}

?>
