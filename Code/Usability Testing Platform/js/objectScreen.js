var App = App || {};
App.objectScreen = function () {

  "use strict";
  var that = {},
  taskContainer,
  singleTask,
  btnStartTask,
  btnStopTask;


  function init(nameObject){
      var chatUI = new App.chatUI();
      chatUI.init(nameObject);
      taskContainer = document.getElementById("taskContainer");
      singleTask = document.getElementById("singleTask");
      btnStartTask = document.getElementById("startTask");
      btnStopTask = document.getElementById("stopTask");
  }

  




    that.init = init;
    return that;
  };
