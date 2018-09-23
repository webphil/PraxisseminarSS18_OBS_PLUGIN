var App = App || {};
App.completion = function () {

	"use strict";
    var that = {},
    startTime,
    stopTime,
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
    	stopTime = new Date();
    	calculateTime();
    }

    function calculateTime(){
    	var difference = (stopTime.getTime() - startTime.getTime()) / 1000;
    	difference = "" + difference + "s";
    	console.log(difference);

    	$.ajax({
        type: "POST",
        url: '../php/completion.php',
        data: {completionTime: difference},
        dataType: "json",
        success: function(data) {
          console.log("Done");
        }
      });
    }

    that.init = init;
    return that;
};

