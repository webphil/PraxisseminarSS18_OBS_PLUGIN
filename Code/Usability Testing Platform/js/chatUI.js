var App = App || {};
App.chatUI = function () {

  "use strict";
  var that = {},
  getStateOfChat,
  instanse = false,
  state,
  name;


  function setNickname(nickname){
    console.log(nickname);
    name=nickname;
    if (!name || name === ' ') {
      name = "Guest  ";
    }
      // strip tags
      name = name.replace(/(<([^>]+)>)/ig,"");
      // display name on page
      $(".name-area").html("You are: <span>" + name + "</span>");

  }


  function init(){
    var chat =  new Chat();
    window.setInterval(chat.update, 1000);
      $(function() {
         chat.getState();
         // watch textarea for key presses
         $(".sendie").keydown(function(e) {
           var key = e.keyCode;
             //all keys including return.
             if (key >= 33) {
                 var maxLength = $(this).attr("maxlength");
                 var length = this.value.length;
                 // don't allow new content if length is maxed out
                 if (length >= maxLength) {
                     event.preventDefault();
                 }
             }
          });


         // watch textarea for release of key press
         $('.sendie').keyup(function(e) {
            if (e.keyCode == 13) {
                  var text = $(this).val();
                  var maxLength = $(this).attr("maxlength");
                  var length = text.length;
                  // send
                  if (length <= maxLength + 1) {
                    chat.send(text, name);
                    $(this).val("");
                  } else {
                    $(this).val(text.substring(0, maxLength));
                  }
            }
         });
      });

  }





  function Chat () {
      this.update = updateChat;
      this.send = sendChat;
      this.getState = getStateOfChat;
  }



//gets the state of the chat
  function getStateOfChat() {
  	if(!instanse){
  		instanse = true;
  		$.ajax({
  			type: "POST",
  			url: "php/process.php",
  			data: {'function': 'getState', 'file': "php/chat.txt"},
  			dataType: "json",
  			success: function(data) {
          state = data.state;
          instanse = false;
        }
  		});
  	}
  }

  //Updates the chat
  function updateChat() {
  	if(!instanse){
  		instanse = true;
  		$.ajax({
  			type: "POST",
  			url: "php/process.php",
  			data: {'function': 'update','state': state,'file': "php/chat.txt"},
  			dataType: "json",
  			success: function(data) {
  				if(data.text){
  					for (var i = 0; i < data.text.length; i++) {
  						$('.chat-area').append($("<div>" + "    " + data.text[i] + "   " + "</div>"));
  					}
  				}
  				document.getElementsByClassName('chat-area').scrollTop = document.getElementsByClassName('chat-area').scrollHeight;
  				instanse = false;
  				state = data.state;
  			}
  		});
  	}
  	else {
  		setTimeout(updateChat, 1500);
  	}
  }

  //send the message
  function sendChat(message, nickname) {
  	updateChat();
  	$.ajax({
  		type: "POST",
  		url: "php/process.php",
  		data: {'function': 'send','message': message,'nickname': nickname,'file': "php/chat.txt"},
  		dataType: "json",
  		success: function(data){
  			updateChat();
  		}
  	});
  }

      that.setNickname = setNickname;
      that.init = init;
      return that;
  };
