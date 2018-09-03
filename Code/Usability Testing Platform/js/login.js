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
    filepath = 'src/passwords.json',
    btnTestMasterLogin,
    entryTestMasterLogin,
    btnTestMasterLogin,
    btnObjectLogin,
    btnTutorial;

    function init() {
      initSpaces();
      handleLoginRequests();
    }


    function initSpaces(){
      startContent = document.getElementById('content_main');
      loginAdminContent = document.getElementById('content_testMasterLogin');
      loginObjectContent = document.getElementById('content_objectLogin');
      adminMain = document.getElementById('content_testMasterMain');
      objectMain = document.getElementById('content_objectMain');
      tutorial = document.getElementById('content_tutorial');
      contentExport = document.getElementById('content_export');
      icnLogout = document.getElementById('logout-sign');
      btnTestMasterLogin = document.getElementById('btn_testMasterLogin');
      btnTestMasterLogin.addEventListener("click", showTestmasterLoginDialogue);
      btnObjectLogin = document.getElementById('btn_objectLogin');
      btnObjectLogin.addEventListener("click", showObjectLoginDialogue);
      btnTutorial = document.getElementById('btn_tutorial');
      btnTutorial.addEventListener("click", showTutorial);
    }


    function showTestmasterLoginDialogue(){
      startContent.style.display = "block";
      loginObjectContent.style.display = "none";
      loginAdminContent.style.display = "block";
      adminMain.style.display = "none";
      objectMain.style.display = "none";
      tutorial.style.display = "none";
      icnLogout.style.display = "none";
      contentExport.style.display = "none";
    }

    function showObjectLoginDialogue(){
      startContent.style.display = "none";
      loginObjectContent.style.display = "block";
      loginAdminContent.style.display = "none";
      adminMain.style.display = "none";
      objectMain.style.display = "none";
      tutorial.style.display = "none";
      icnLogout.style.display = "none";
      contentExport.style.display = "none";


    }

    function showTutorial(){
      startContent.style.display = "none";
      loginObjectContent.style.display = "none";
      loginAdminContent.style.display = "none";
      adminMain.style.display = "none";
      objectMain.style.display = "none";
      tutorial.style.display = "block";
      contentExport.style.display = "none";

    }



    function handleLoginRequests(){
      btnTestMasterLogin = document.getElementById('btn_loginTestmaster');
      entryTestMasterLogin = document.getElementById("password_textmaster");
      var hint1 = document.getElementById("passwordIncorrectDialogue");
      hint1.style.display = "none";
      var hint2 = document.getElementById("noNickNameEntered");
      hint2.style.display = "none";
      btnTestMasterLogin.addEventListener("click", function(){
          processTestmasterLogin();
      });
      window.onkeyup = function(e) {
         var key = e.keyCode;
         if(key == "13"){
           processTestmasterLogin();
         }
      }

    }






    function processTestmasterLogin(){
      var nickname = "";
      var hint1 = document.getElementById("passwordIncorrectDialogue");
      var hint2 = document.getElementById("noNickNameEntered");
      var nicknameForm = document.getElementById("nickname_textmaster");
      var loginPassword;
      var userEntry = "";
      loadJSON(function(response) {
        var pwJSON = JSON.parse(response);
        loginPassword = pwJSON.testmaster;
        if(entryTestMasterLogin != ''){
          userEntry = entryTestMasterLogin.value;
        }
        if(loginPassword == userEntry){
          nickname = nicknameForm.value;
          if(nickname != ""){
            console.log(nickname);
            adminMain.style.display = "block";
            startContent.style.display = "none";
            loginAdminContent.style.display = "none";
            loginObjectContent.style.display = "none";
            objectMain.style.display = "none";
            tutorial.style.display = "none";
          }
          else{
            hint2.style.display = "block";
          }

        }
        else{
          hint1.style.display = "block";

       }
      });
    }




    function loadJSON(callback) {
        var req = new XMLHttpRequest();
        //req.overrideMimeType("application/json");
        req.open('GET', filepath, true); // Replace 'my_data' with the path to your file
        req.onreadystatechange = function () {
          if (req.readyState == 4 && req.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(req.responseText);
          }
        };
        req.send(null);
      }





    that.handleLoginRequests = handleLoginRequests;
    that.initSpaces = initSpaces;
    that.init = init;
    return that;
};
