var App = App || {};
App.testMasterScreen = function () {



    "use strict";
    var that = {},
    rightContent,
    leftContent,
    testManager,
    taskContainer,
    btnNextTask;


    function init(){
      var chat = document.getElementById("chatContainer");
      chat.style.display="block";
      rightContent = document.getElementById("container-right");
      rightContent.style.display="block";
      leftContent = document.getElementById("content_testMasterMain");
      leftContent.style.display="block";
      testManager = document.getElementById("testmanagerStart");
      testManager.style.display="block";
      taskContainer=document.getElementById("taskContainer");
      taskContainer.style.display="block";
      btnNextTask=document.getElementById("buttonNextTaskTestmaster");
      btnNextTask.style.display="block";



    }











that.init = init;
return that;
};
