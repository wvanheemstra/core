<?php
/**
 * SSLEncryption Plugin
 * uses Template Variable: SSLEncryptionTV
 */
if($modx->event->name == 'OnLoadWebDocument') {
    
    $encryption_value = $modx->resource->getTVValue('SSLEncryptionTV');
     
    //finally the value
    $encryption = false;
    if($encryption_value == 'yes'){
      $encryption = true;
    }
     
    $ssl = false;
    if($_SERVER['HTTPS'] == 1)  {
      $ssl = true;
    }
    elseif($_SERVER['HTTPS'] == 'on'){
      $ssl = true;
    }
    elseif($_SERVER['SERVER_PORT'] == 443) {
      $ssl = true;
    }
    
    // switch between http / https if necessary
    // if $secureserver === $insecureserver (eg you are testing locally)
    // then comment out this code block to avoid infinite recursion
   
    // if SSL is on and we are about to acccess an unsecure page then redirect
    if($ssl && !$encryption) {
      
      $url = $modx->makeUrl($modx->resource->get('id'), '', '', 'http');
      $modx->sendRedirect($url);
    }
    // if SSL off and we are about to access a secure page then redirect
    else if(!$ssl && $encryption) {
      
      $url = $modx->makeUrl($modx->resource->get('id'), '', '', 'https');
      $modx->sendRedirect($url);
    }
  }