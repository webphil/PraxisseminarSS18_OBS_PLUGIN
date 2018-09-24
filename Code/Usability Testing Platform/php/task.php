<?php
$task = $_POST['taskToDisplay'];

if($task != ""){
  writeToFile($task);
}

function writeToFile($taskTo){
  fwrite(fopen('taskToDisplay.txt', 'a'), "".$taskTo."\r\n");
}

?>
