<?php

readFromFile();

function readFromFile(){
  $lines = file("taskToDisplay.txt");
  $lastLine = $lines[count($lines)-1];
  echo json_encode($lastLine);
}

?>
