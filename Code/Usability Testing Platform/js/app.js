var App = App || {};
App.OBSTest = (function () {

    "use strict";
    var that = {},
    controller;


    function init() {
      controller = new App.controller();
      controller.init();
    }




      that.init = init;
      return that;
}());
