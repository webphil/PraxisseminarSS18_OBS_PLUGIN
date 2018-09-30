var App = App || {};
App.OBSTest = (function () {

    "use strict";
    var that = {},
    login,
    video,
    annotations,
    completion,
    chatUI,
    nickname;


    function init() {

        login = new App.login();
        login.init();
        video = new App.video();
        video.init();
        annotations = new App.annotations();
        annotations.init();
        completion = new App.completion();
        completion.init();

    }

      that.init = init;
      return that;

}());
