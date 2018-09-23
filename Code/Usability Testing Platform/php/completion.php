<?php

	$completionTime = $_POST['completionTime'];

	if($completionTime != ""){
		writeToFile($completionTime);
	}

	function writeToFile($time){
		fwrite(fopen('completionTime.txt', 'a'), "".$time."\r\n");
	}

?>
