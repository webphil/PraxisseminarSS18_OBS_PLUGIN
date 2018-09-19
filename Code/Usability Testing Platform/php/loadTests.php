<?php
	
	loadTests();

	function loadTests(){

		$servername = "localhost";
		$username = "root";
		$password = "3.0Obs#2013";
		$database = "ObsPlugin";

		$tests = array();

		$conn = new mysqli($servername, $username, $password, $database);

		if ($conn->connect_error) {
    		die("Connection failed: " . $conn->connect_error);
		}

		$sql = "SELECT json FROM Tests";
		$result = $conn->query($sql);

		if ($result->num_rows > 0) {
    		while($row = $result->fetch_assoc()) {
        		array_push($tests, $row["json"]);
    		}
		} 

		$conn->close();

		echo json_encode($tests);

	}

?>