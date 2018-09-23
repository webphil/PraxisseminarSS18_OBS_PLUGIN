<?php

	$completitionTime = $_POST['completitionTime'];

	if($completitionTime != ""){
		writeToFile($completitionTime);
	}
	
	function writeToFile($time){
		fwrite(fopen('completitionTime.txt', 'a'), "".$time."\r\n");
	}

?>