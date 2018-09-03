var App = App || {};
App.OBSTest = (function () {

    "use strict";
    var that = {},
    login,
    video;


    function init() {
      login = new App.login();
      login.init();
      video = new App.video();
      video.init();

    }

      that.init = init;
      return that;
}());
