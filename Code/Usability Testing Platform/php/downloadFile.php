<?php
	
	download();
	clearFiles();
	
	function download(){
		$zip = new ZipArchive;
		$files = array("Annotations.txt","chat.txt","completionTime.csv");
	
		$zipname="DownloadTest.zip";

		$zip->open($zipname, ZipArchive::CREATE);

		foreach($files as $key => $file){
			$zip->addFile($file);
		}
		$zip->close();

		header('Content-Type: application/zip');
		header('Content-disposition: attachment; filename='.$zipname);
		header('Content-Length: ' . filesize($zipname));
		readfile($zipname);
		echo file_get_contents($zipname);
	}

	function clearFiles(){
		file_put_contents("Annotations.txt", "");
		file_put_contents("chat.txt", "");
		file_put_contents("completionTime.csv", "");
		file_put_contents("taskToDisplay.txt", "");		
	}
?>