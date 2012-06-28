<?php
/**
 * DatabaseConnectionType::Final::Class
 *
 * 
 */
 final class DatabaseConnectionType
 {
	const MYSQL = 0x00000001;
	const MYSQLI = 0x00000010;
	const ODBC = 0x00000100;
	// ensures that this class acts like an enum
    // and that it cannot be instantiated
	private function __construct()
	{
	}
 }