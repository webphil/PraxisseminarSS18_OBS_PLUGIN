<?php
	
	$testID = $_POST['deleteTestID'];

	deleteTest($testID);

	function deleteTest($remove){

		$servername = "localhost";
		$username = "root";
		$password = "3.0Obs#2013";
		$database = "ObsPlugin";

		$conn = new mysqli($servername, $username, $password, $database);

		if ($conn->connect_error) {
    		die("Connection failed: " . $conn->connect_error);
		}

		$sql = "DELETE FROM Tests WHERE TestID = '". $remove ."';";
		$sql1 = "SET @num := 0;";
		$sql2 = "UPDATE Tests SET TestID = @num := (@num+1);";
		$sql3 = "ALTER TABLE Tests AUTO_INCREMENT = 1;";

		$conn->query($sql);
		$conn->query($sql1);
		$conn->query($sql2);
		$conn->query($sql3);

		/*if($conn->query($sql) === TRUE){
			if($conn->query($sql1) === TRUE){
				echo "New record created successfully";
			}
		} else{
			echo "Error: " . $sql . "<br>" . $conn->error;
		}*/

		$conn -> close;
	}

?>