var App = App || {};
App.OBSTest = (function () {

    "use strict";
    var that = {},
    login,
    video,
    testmanager,
    annotations;


    function init() {
      login = new App.login();
      login.init();
      testmanager = new App.testmanager();
      testmanager.init();
      video = new App.video();
      video.init(),
      annotations = new App.annotations();
      annotations.init();
    }

      that.init = init;
      return that;
}());
