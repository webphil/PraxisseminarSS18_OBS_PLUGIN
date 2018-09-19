<?php
	
	$json = $_POST['json'];
	writeToMySQL($json);

	function writeToMySQL($jsonSQL){
		$servername = "localhost";
		$username = "root";
		$password = "3.0Obs#2013";
		$database = "ObsPlugin";

		$conn = new mysqli($servername, $username, $password, $database);

		if ($conn->connect_error) {
    		die("Connection failed: " . $conn->connect_error);
		}

		$sql = "INSERT INTO Tests (Json) VALUES ('".$jsonSQL."');";

		if($conn->query($sql) === TRUE){
			echo "New record created successfully";
		} else{
			echo "Error: " . $sql . "<br>" . $conn->error;
		}

		$conn -> close;
	}

?>