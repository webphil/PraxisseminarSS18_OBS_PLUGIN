var App = App || {};
App.completion = function () {

	"use strict";
    var that = {},
    startTime,
    stopTime,
    nickname,
    task,
    btnStartTask,
    btnStopTask;

    function init(){
    	btnStartTask = document.getElementById("startTask");
    	btnStopTask	= document.getElementById("stopTask");
    	btnStartTask.addEventListener("click", handleUserInputStart);
    	btnStopTask.addEventListener("click", handleUserInputStop);
    }

    function handleUserInputStart(){
    	startTime = new Date();
    }

    function handleUserInputStop(){
        nickname = document.getElementById("nicknameLogin").value;
        task = document.getElementById("task").innerText;
    	stopTime = new Date();
    	calculateTime(nickname, task);
    }

    function calculateTime(nickID, taskID){
    	var difference = (stopTime.getTime() - startTime.getTime()) / 1000;
    	difference = "" + difference + "s";
		var currentTask = document.getElementById("task").innerText;
		if(currentTask != ""){
    	$.ajax({
        type: "POST",
        url: '../php/completion.php',
        data: {completionTime: difference, id: nickID, task: taskID},
        dataType: "json",
        success: function(data) {
          console.log("Done");
        }
      });
    }
	}

    that.init = init;
    return that;
};
