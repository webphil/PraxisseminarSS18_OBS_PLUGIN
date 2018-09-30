<?php

	$completionTime = $_POST['completionTime'];
	$id = $_POST['id'];
	$task = $_POST['task'];

	createCSV($id, $task, $completionTime);

	function createCSV($idFile, $taskFile, $timeFile){
		$header = ["UserID","task","completionTime"];
		$data = [$idFile, $taskFile, $timeFile];
		$csvName = "completionTime.csv";
		$fileHandle = fopen($csvName, 'a') or die('Can not open file.');

		if(filesize($csvName) == 0){
			fputcsv($fileHandle, $header);
		}

		fputcsv($fileHandle, $data);
		
	}

?>
