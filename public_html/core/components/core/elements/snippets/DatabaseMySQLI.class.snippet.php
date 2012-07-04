<?php
/**
 * DatabaseMySQLI::Class
 *
 * Database strategy for MySQLI connection
 */
 class DatabaseMySQLI implements IDatabase
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

		$this->_connection = mysqli_connect($this->_host,$this->_user,$this->_pwd,$this->_db);
		
		if (!$this->_connection) {
			die('Connect Error (' . mysqli_connect_errno() . ') '
            . mysqli_connect_error());
		}

		//print_r('Success... ' . mysqli_get_host_info($this->_connection) . "\n");// for debugging only
		
	}
	
	public function doQuery($sql)
	{
	    $this->_results = mysqli_query($this->_connection,$sql);
		$this->_numRows = $this->_results->num_rows;
	}
	
	public function loadObjectList()
	{
		$obj = "No Results";
		if($this->_results)
		{	
			$obj = mysqli_fetch_assoc($this->_results);
		}
		return $obj;
	}

	public function loadAllObjectList()
	{
		$objs = array();
		if($this->_results)
		{	
			$i=1;
			while($row = mysqli_fetch_assoc($this->_results)){
				$objs[$i] = $row;
				$i=$i+1;
			}
		}
		return $objs;
	}
	
	public function doDisconnect()
	{
		//$this->_connection->close();
		mysqli_close($this->_connection);
		self::$_instance = NULL;
	}
 }