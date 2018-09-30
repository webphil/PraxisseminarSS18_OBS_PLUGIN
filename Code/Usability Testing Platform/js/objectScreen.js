var App = App || {};
App.objectScreen = function () {

  "use strict";
  var that = {},
  taskContainer,
  singleTask,
  btnStartTask,
  btnDownload,
  btnStopTask;


  function init(nameObject){

      var chat = document.getElementById("chatContainer");
      chat.style.display="block";
      taskContainer = document.getElementById("taskContainer");
      taskContainer.style.display="block";
      btnDownload = document.getElementById("buttonNextTaskTestmaster");
      btnDownload.style.display = "none";
      var uiTaskCompletion = document.getElementById("content_objectMain");
      uiTaskCompletion.style.display="block";
      singleTask = document.getElementById("singleTask");
      btnStartTask = document.getElementById("startTask");
      btnStopTask = document.getElementById("stopTask");

      window.setInterval(updateTasks, 1000);

  }


  function updateTasks(){

      var task = "";

      $.ajax({
          type: "POST",
          url: '../php/loadTask.php',
          dataType: "json",
          success: function(data) {
              fillTask(data);
          }
      });


      function fillTask(data){

          taskContainer = document.getElementById("task");
          taskContainer.style.display="block";
          taskContainer.innerHTML = data;

      }

  }


    that.init = init;
    return that;

  };
