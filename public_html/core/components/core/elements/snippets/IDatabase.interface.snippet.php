<?php
/**
 * IDatabase::Interface
 *
 * 
 */
 interface IDatabase
 {
	public function doConnect(array $credentials);
 
	public function doQuery($sql); 
	
	public function loadObjectList();
	
	public function doDisconnect();

 }