<?php
/**
 * DatabaseODBC::Class
 *
 * Database strategy for ODBC connection
 */
 class DatabaseODBC implements IDatabase
 {
	private $_user;
	private $_pwd;
	private $_dsn;
	
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
		$this->_dsn = $credentials['dsn'];
		$this->_user = $credentials['user'];
		$this->_pwd = $credentials['pwd'];
		
		// $con = odbc_connect("fmp_odbc_32bit", "Admin", "");
		$this->_connection = odbc_connect($this->_dsn,$this->_user,$this->_pwd);
	}
	
	public function doQuery($sql)
	{
		// $rs2 = odbc_exec($con, "select * from Table1");
		$this->_results = odbc_exec($this->_connection,$sql);
	}
	
	public function loadObjectList()
	{
		$obj = "No Results";
		if($this->_results)
		{
			// odbc_result_all($rs2);
			$obj = odbc_result_all($this->_results);
		}
		return $obj;
	}
	
	public function doDisconnect()
	{
		// odbc_close($con);
		odbc_close($this->_connection);
		self::$_instance = NULL;
	}
	
 }