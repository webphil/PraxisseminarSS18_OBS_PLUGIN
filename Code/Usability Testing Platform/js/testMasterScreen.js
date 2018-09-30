var App = App || {};
App.testMasterScreen = function () {



    "use strict";
    var that = {},
    rightContent,
    leftContent,
    testManager,
    taskContainer,
    testmanager,
    btnNextTask;


    function init(){
      testmanager = new App.testmanager();
      testmanager.init();
      var chat = document.getElementById("chatContainer");
      chat.style.display="block";
      rightContent = document.getElementById("container-right");
      rightContent.style.display="block";
      leftContent = document.getElementById("content_testMasterMain");
      leftContent.style.display="block";
      testManager = document.getElementById("testmanagerStart");
      testManager.style.display="block";
      taskContainer=document.getElementById("taskContainer");
      taskContainer.style.display="none";
    }





that.init = init;
return that;
};
