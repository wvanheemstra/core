<?php
/**
 * Table::Abstract::Class
 *
 * 
 */
 abstract class Table
 {
	protected $id = NULL;
	protected $idField = NULL; // the name of the field that represents the id (e.g. kp_ID)
	protected $table = NULL;
	protected $db = NULL;
	protected $dbConnType = DatabaseConnectionType::MYSQLI;
	protected $credentials = array (
		"host"  => "localhost",
		"port"  => "3306",
		"user" => "root",
		"pwd"  => "",
		"db"  => "core"
	);
	
	function __construct()
	{
	}
	
	function bind($data)
	{
		foreach($data as $key=>$value)
		{
			$this->$key = $value;
		}
	}
	
	function load($id,$idField)
	{
		$this->id = $id;
		$this->idField = $idField;
		if(!$this->db)
		{
			$this->db = new DatabaseContext($this->dbConnType);
			$this->db->doConnect($this->credentials);
		}
		$sql = $this->buildQuery('load');
		$this->db->doQuery($sql);
		$row = $this->db->loadObjectList();
		if (is_array($row)) {
			foreach($row as $key=>$value)
			{
				if($key == "id")
				{
					continue;
				}
				$this->$key = $value;
			}
		}
	}
	
	function store($idField)
	{
		$this->idField = $idField;
		if(!$this->db)
		{
			$this->db = new DatabaseContext($this->dbConnType);
			$this->db->doConnect($this->credentials);
		}
		$sql = $this->buildQuery('store');
		$this->db->doQuery($sql);
	}
	
	protected function buildQuery($task)
	{
		$sql = "";
		if($task == 'store')
		{
			if($this->id == "")
			{
				$keys = "";
				$values = "";
				$classVars = get_class_vars(get_class($this));
				$sql .= "Insert into {$this->table} ";
				foreach($classVars as $key=>$value)
				{
					if($key == "id" || $key == "idField" || $key == "table")
					{
						continue;
					}
					$keys .= "{$key},";
					$values .= "'{$this->$key}',";
				}
				$sql .= "(".substr($keys,0,-1).") Values(".substr($values,0,-1).")";
				//print_r("SQL: ".$sql); // for debugging only
			}
			else
			{
				$classVars = get_class_vars(get_class($this));
				$sql .= "Update {$this->table} set ";
				foreach($classVars as $key=>$value)
				{
					if($key == "id" || $key == "table")
					{
						continue;
					}
					$sql .= "{$key} = {$this->$key}, ";
				}
				$sql = substr($sql,0,-2)." where {$this->idField} = {$this->id}";
			}
		}
		elseif($task == 'load')
		{
			$sql = "Select * from {$this->table} where {$this->idField} = {$this->id}";
		}
		return $sql;
	}
 }