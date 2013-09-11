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
    $requestBody = file_get_contents('php://input');
    $json = json_decode($requestBody, true);

    foreach ($json as $key => $value) {
      if($key == 'referenceValue'){$referenceValue = $value;}
      if($key == 'kindOfIdentity[0]'){$kindOfIdentity0 = $value;}
      if($key == 'identityValue[0]'){$identityValue0 = $value;}
      if($key == 'kindOfIdentity[1]'){$kindOfIdentity1 = $value;}
      if($key == 'identityValue[1]'){$identityValue1 = $value;}
    }
    
    if($kindOfIdentity0 == 'UserName') {$userName = $identityValue0;}
    if($kindOfIdentity0 == 'Password') {$password = $identityValue0;}
    
    if($kindOfIdentity1 == 'UserName') {$userName = $identityValue1;}
    if($kindOfIdentity1 == 'Password') {$password = $identityValue1;}
    
    $i = 0;
    if(isset($_POST['kindOfIdentity[0]'])) {
      $kindOfIdentity0 = $_POST['kindOfIdentity[0]'];
      if($kindOfIdentity0 = 'UserName'){
        $identityValue0 = $_POST['identityValue[0]'];
        $userName = $identityValue0;
      }
      if($kindOfIdentity0 = 'Password'){
        $identityValue0 = $_POST['identityValue[0]'];
        $password = $identityValue0;
      }          
    }
    
    // lookup the id of the kind of identity for 'UserName'
    $whereField = 'KindOfIdentityName';
    $table = 'kind_of_identity';
    $whereValue = 'UserName'; // make this dynamic
    $idField = 'kp_KindOfIdentityID';
    $sql = "SELECT `".$idField."` FROM `".$table."` WHERE `".$whereField."` = '".$whereValue."'";
    $result = mysql_query($sql) or die(mysql_error());
    while($rec = mysql_fetch_array($result, MYSQL_ASSOC)){
      $kf_KindOfIdentityID_UserName = $rec['kp_KindOfIdentityID'];
    };
    
    // lookup the id of the kind of identity for 'Password'
    $whereField = 'KindOfIdentityName';
    $table = 'kind_of_identity';
    $whereValue = 'Password'; // make this dynamic
    $idField = 'kp_KindOfIdentityID';
    $sql = "SELECT `".$idField."` FROM `".$table."` WHERE `".$whereField."` = '".$whereValue."'";
    $result = mysql_query($sql) or die(mysql_error());
    while($rec = mysql_fetch_array($result, MYSQL_ASSOC)){
      $kf_KindOfIdentityID_Password = $rec['kp_KindOfIdentityID'];
    };
    
    // look for the referenceValue
    $idField = 'kp_ReferenceID';
    $whereField = 'ReferenceValue';
    $whereValue = $referenceValue;
    $table = 'reference';
    $sql = "SELECT `".$idField."` FROM `".$table."` WHERE `".$whereField."` = '".$whereValue."'";
    $result = mysql_query($sql) or die(mysql_error());
    while($rec = mysql_fetch_array($result, MYSQL_ASSOC)){
      $kf_ReferenceID = $rec['kp_ReferenceID'];
    };
    
    // look for the linked identities to the found reference
    $foundUserName = FALSE;
    $foundPassword = FALSE;
    $idField = 'kf_IdentityID';
    $idKindOfField = 'kf_KindOfIdentityID';
    $whereField = 'kf_ReferenceID';
    $table = 'reference_identity';
    $joinTable = 'identity';
    $idJoinField = 'kp_IdentityID';
    $joinField1 = 'IdentityValue';
    $joinField2 = 'kf_KindOfIdentityID';
    $sql = "SELECT `".$table."`.`".$idField."`, `".$joinTable."`.`".$joinField1."`, `".$joinTable."`.`".$joinField2."` FROM `".$table."` JOIN `".$joinTable."` ON `".$table."`.`".$idField."` = `".$joinTable."`.`".$idJoinField."` WHERE `".$whereField."` = '".$kf_ReferenceID."'";
    $result = mysql_query($sql) or die(mysql_error());
    while($rec = mysql_fetch_array($result, MYSQL_ASSOC)){
      $kp_IdentityID = $rec['kf_IdentityID'];      
      // look for identities that are of kind 'UserName'
      if ($rec['kf_KindOfIdentityID'] == $kf_KindOfIdentityID_UserName ) {
        // verify UserName here
        if($rec['IdentityValue'] == $userName) { $foundUserName = TRUE; };
      };
      // look for identities that are of kind 'Password'
      if ($rec['kf_KindOfIdentityID'] == $kf_KindOfIdentityID_Password ) {
        // verify Password here
        if($rec['IdentityValue'] == $password) { $foundPassword = TRUE; };
      };
    };    
    // generate random session token
    $sessionToken = md5(uniqid(rand(), TRUE));
    
    $return = array(
      'success' => TRUE,
      'userNameFound' => $foundUserName,
      'passwordFound' => $foundPassword,
      'sessionToken' => $sessionToken
    );
  
    header('Content-type: application/json');   
    $return = json_encode($return);
    echo $return;
  }
?>