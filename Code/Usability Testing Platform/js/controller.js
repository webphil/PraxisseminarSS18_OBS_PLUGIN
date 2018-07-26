var App = App || {};
App.controller = function () {

    "use strict";
    var that = {},
    startContent,
    loginAdminContent,
    loginObjectContent,
    adminMain,
    objectMain,
    tutorial;

    function init() {
      initSpaces();


    }


    function initSpaces(){
      startContent = document.getElementById('content_main');
      loginAdminContent = document.getElementById('content_testMasterLogin');
      loginObjectContent = document.getElementById('content_objectLogin');
      adminMain = document.getElementById('content_testMasterMain');
      objectMain = document.getElementById('content_objectMain');
      tutorial = document.getElementById('content_tutorial');
    }

    that.initSpaces = initSpaces;
    that.init = init;
    return that;
};
