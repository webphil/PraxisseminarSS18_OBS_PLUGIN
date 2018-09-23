var App = App || {};
App.login = function () {

    "use strict";
    var that = {},
    startContent,
    loginAdminContent,
    loginObjectContent,
    adminMain,
    objectMain,
    tutorial,
    btnTestMasterLogin,
    entryTestMasterLogin,
    btnTestMasterLogin,
    btnObjectLogin,
    btnTutorial,
    nickNameObject,
    chat,
    rightContent,
    nickname,
    hint2;

    function init() {
      initSpaces();
      handleLoginRequests();
      console.log(nickname);

    }


    function initSpaces(){
      startContent = document.getElementById('content_main');
      loginAdminContent = document.getElementById('content_testMasterLogin');
      loginObjectContent = document.getElementById('content_objectLogin');
      adminMain = document.getElementById('content_testMasterMain');
      objectMain = document.getElementById('content_objectMain');
      tutorial = document.getElementById('content_tutorial');
      btnTestMasterLogin = document.getElementById('btn_testMasterLogin');
      btnTestMasterLogin.addEventListener("click", showTestmasterLoginDialogue);
      btnObjectLogin = document.getElementById('btn_objectLogin');
      btnObjectLogin.addEventListener("click", showObjectLoginDialogue);
      btnTutorial = document.getElementById('btn_tutorial');
      btnTutorial.addEventListener("click", showTutorial);
      chat = document.getElementById("chatContainer");
      chat.style.display="none";
      rightContent = document.getElementById("container-right");
      rightContent.style.display="none";

    }


    function showTestmasterLoginDialogue(){
      startContent.style.display = "block";
      loginObjectContent.style.display = "none";
      loginAdminContent.style.display = "block";
      adminMain.style.display = "none";
      objectMain.style.display = "none";
      tutorial.style.display = "none";
    }

    function showObjectLoginDialogue(){
      startContent.style.display = "block";
      loginObjectContent.style.display = "block";
      loginAdminContent.style.display = "none";
      adminMain.style.display = "none";
      objectMain.style.display = "none";
      tutorial.style.display = "none";
    }

    function showTutorial(){
      startContent.style.display = "none";
      loginObjectContent.style.display = "none";
      loginAdminContent.style.display = "none";
      adminMain.style.display = "none";
      objectMain.style.display = "none";
      tutorial.style.display = "block";
    }



    function handleLoginRequests(){
      btnTestMasterLogin = document.getElementById('btn_loginTestmaster');
      btnTestMasterLogin.addEventListener("click", processTestmasterLogin);
      hint2 = document.getElementById("noNickNameEntered");
      hint2.style.display = "none";
      window.onkeyup = function(e) {
         var key = e.keyCode;
         if(key == "13"){
           processTestmasterLogin();
         }
      }
      var btnObjectStart = document.getElementById("btnObjectStart");
      btnObjectStart.addEventListener("click", function (){
        showObjectMain();
        });
      }



    function showObjectMain(){
      nickname = document.getElementById("objectNickname").value;
      var hint = document.getElementById("hint3");
        if(nickname.value != ""){
          var chatUI = new App.chatUI();
          chatUI.init(nickname);
          hint.style.display="none";
          objectMain.style.display="block";
          startContent.style.display="none";
          rightContent.style.display="block";
          var objectContent = new App.objectScreen();
          objectContent.init(nickname.value);
        }
        else{
          hint.style.display="block";
        }
    }

    function processTestmasterLogin(){
      var nickname = document.getElementById("nickname_textmaster").value;
      if(nickname != ""){
            var testMasterScreen = new App.testMasterScreen();
            testMasterScreen.init();
            startContent.style.display = "none";
            loginAdminContent.style.display = "none";
            loginObjectContent.style.display = "none";
            tutorial.style.display = "none";
            var chatUI = new App.chatUI();
            chatUI.init(nickname);
          }
          else{
            hint2.style.display = "block";
          }

    }












    that.handleLoginRequests = handleLoginRequests;
    that.initSpaces = initSpaces;
    that.init = init;
    return that;
};
