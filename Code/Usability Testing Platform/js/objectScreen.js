var App = App || {};
App.objectScreen = function () {

  "use strict";
  var that = {},
  taskContainer,
  singleTask,
  btnStartTask,
  btnStopTask,
  completition;


  function init(nameObject){
      completition = new App.completition();
      completition.init();
      var chat = document.getElementById("chatContainer");
      chat.style.display="block";
      taskContainer = document.getElementById("taskContainer");
      taskContainer.style.display="block";
      var uiTaskCompletion = document.getElementById("content_objectMain");
      uiTaskCompletion.style.display="block";
      singleTask = document.getElementById("singleTask");
      btnStartTask = document.getElementById("startTask");
      btnStopTask = document.getElementById("stopTask");
  }






    that.init = init;
    return that;
  };
