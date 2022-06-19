<?php
namespace Imsamaritan\Server\Config;
use PDO;
use PDOException;

class Database {
	private string $hostname = 'localhost';
	private string $username = 'root';
	private string $password = '617808';
	private string $database = 'workers_attendance';
	private string $charset		= 'UTF8';

	private PDO|null $pdo;

	final protected function connect(): PDO {
		$this->pdo = null;

		try {
			$dsn = 'mysql:host='.$this->hostname.';dbname='.$this->database.';';
			$dsn .='charset='.$this->charset.';';
			$this->pdo = new PDO($dsn, $this->username, $this->password);
			$this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$this->pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

			return $this->pdo;
		}
		catch(PDOException $e) { print 'Error occured: '.$e->getMessage(); }
	}

	public function __destruct() { /*Close connection*/ $this->pdo = null; }
}