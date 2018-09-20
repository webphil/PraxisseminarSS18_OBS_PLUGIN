var App = App || {};
App.objectScreen = function () {

  "use strict";
  var that = {},
  chatUI;


  function init(){
      var mainContent = document.getElementById("content_testMasterMain");
      mainContent.style.display="block";
      var testMasterLeftContent = document.getElementById("testMasterLeftContent");
      testMasterLeftContent.display.style="none";
      var testManager = document.getElementById("testmanagerStart");
      testManager.display.style="none";
  }






    that.init = init;
    return that;
  };
