<?php
	
	$date = $_POST['date'];
	$annotation = $_POST['annotation'];

	if($annotation != ""){
		writeToFile($annotation);
	}

	function writeToFile($anno){
		fwrite(fopen('Annotations.txt', 'a'), "".$anno."\r\n");
	}
?>