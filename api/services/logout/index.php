<?php 
  $output = [
    "success" => "true"
  ];
  header('Content-Type: application/json');
  $return = json_encode($output);
  echo $return;
?>