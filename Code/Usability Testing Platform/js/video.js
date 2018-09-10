var App = App || {};
App.video = function () {

    "use strict";
    var that = {},
    playerContainer,
    player;


    function init(){
      player = document.getElementById("player1");
      $f(player, "http://releases.flowplayer.org/swf/flowplayer-3.2.18.swf",
        {clip: { url: 'rtmp://104.248.33.174/live/test', autoPlay: true, provider: 'rtmp' },
          plugins: { rtmp: { url: 'http://releases.flowplayer.org/flowplayer.rtmp/flowplayer.rtmp-3.2.13.swf',
          netConnectionUrl: 'rtmp://104.248.33.174/live/test' } } });
    }



    that.init = init;
    return that;
};
