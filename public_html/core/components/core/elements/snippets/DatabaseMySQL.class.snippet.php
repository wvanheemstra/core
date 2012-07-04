<?php
/**
 * DatabaseMySQL::Class
 *
 * Database strategy for MySQL connection
 */
 class DatabaseMySQL implements IDatabase
 {
	private $_host;
	private $_port;
	private $_user;
	private $_pwd;
	private $_db;
	
	private static $_instance;
	
	private $_connection;
	private $_results;
	private $_numRows;
 
	private function __construct()
	{
	}
	
	static function getInstance()
	{
		if(!self::$_instance)
		{
			self::$_instance = new self();
		}
		return self::$_instance;
	}
	
	public function doConnect(array $credentials)
	{
		$this->_host = $credentials['host'];
		$this->_port = $credentials['port'];		
		$this->_user = $credentials['user'];
		$this->_pwd = $credentials['pwd'];
		$this->_db = $credentials['db'];
		
		$this->_connection = mysql_connect($this->_host,$this->_user,$this->_pwd);
		mysql_select_db($this->_db);
	}
	
	public function doQuery($sql)
	{
		$this->_results = mysql_query($sql);
		$this->_numRows = $this->_results->num_rows;
	}
	
	public function loadObjectList()
	{
		$obj = "No Results";
		if($this->_results)
		{
			$obj = mysql_fetch_assoc($this->_results);
		}
		return $obj;
	}
	
	public function loadAllObjectList()
	{
		$objs = array();
		if($this->_results)
		{	
			while($row = mysql_fetch_assoc($this->_results)){
				$objs[] = $row;
			}
		}
		return $objs;
	}
	
	public function doDisconnect()
	{
		$this->_connection->close();
		self::$_instance = NULL;
	}
 }