<?php
/**
 * DatabaseContext::Class
 *
 * 
 */
 class DatabaseContext
 {
	private $_database = NULL;
	
	public function __construct($dbConnType)
	{
		switch($dbConnType)
		{
			case DatabaseConnectionType::MYSQL:
				$this->_database = DatabaseMySQL::getInstance();
				//print_r("Using: MySQL"); // for debugging only
			break;
			case DatabaseConnectionType::MYSQLI:
				$this->_database = DatabaseMySQLI::getInstance();
				//print_r("Using: MySQLI"); // for debugging only
			break;
			case DatabaseConnectionType::ODBC:
				$this->_database = DatabaseODBC::getInstance();
				//print_r("Using: ODBC"); // for debugging only
			break;
		}
	}
	
	public function doConnect(array $credentials)
	{
		return $this->_database->doConnect($credentials);
	}
	
	public function doQuery($sql)
	{
		return $this->_database->doQuery($sql);
	} 
	
	public function loadObjectList()
	{
		return $this->_database->loadObjectList();
	}

	public function loadAllObjectList()
	{
		return $this->_database->loadAllObjectList();
	}	
	
	public function doDisconnect()
	{
		return $this->_database->doDisconnect();
	}
	
 }