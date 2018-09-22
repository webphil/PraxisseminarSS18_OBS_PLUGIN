<?php
	
	$zip = new ZipArchive;
	$files = array("Annotations.txt","chat.txt");
	
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
?>