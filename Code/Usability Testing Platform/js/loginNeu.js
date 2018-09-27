var App = App || {};
App.loginNeu = function () {


  "use strict";
  var that = {},
  nickNameSpace,
  checkBoxTestmaster,
  checkBoxObject,
  tutorial,
  startContent,
  adminMain,
  objectMain,
  btnBackToStart,
  btnTutorial,
  btnLogin,
  chat,
  chatUI,
  rightContent,
  hint2;

  function init(){
    initSpaces();
    chat = new App.chatUI();
    chat.init();
  }

  function initSpaces(){
    startContent = document.getElementById('content_main');
    hint2=document.getElementById("noNickNameEntered");
    adminMain = document.getElementById('content_testMasterMain');
    objectMain = document.getElementById('content_objectMain');
    tutorial = document.getElementById('content_tutorial');
    btnLogin = document.getElementById('btn_testMasterLogin');
    btnLogin.addEventListener("click", handleLoginRequests);
    btnTutorial = document.getElementById('btn_tutorial');
    btnTutorial.addEventListener("click", showTutorial);
    btnBackToStart=document.getElementById("btnBackToStart");
    btnBackToStart.addEventListener("click", goBackToStart);
    chatUI = document.getElementById("chatContainer");
    chatUI.style.display="none";
    rightContent = document.getElementById("container-right");
    rightContent.style.display="none";
  }




  function handleLoginRequests(){
    checkBoxTestmaster = document.getElementById("checkBoxTestmaster");
    checkBoxObject = document.getElementById("checkBoxObject");
    nickNameSpace = document.getElementById("nicknameLogin").value;
    if(nickNameSpace!=""){
      if(checkBoxTestmaster.checked){
        continueAsTestmaster(nickNameSpace);

      }
      else if(checkBoxObject.checked){
        continueAsObject(nickNameSpace);
      }
    }
    else{
      hint2.style.display="block";
    }
  }


  function continueAsTestmaster(name){
    console.log("continueAsTestmaster   " +  name);
    startContent.style.display="none";
    var testMasterScreen = new App.testMasterScreen();
    testMasterScreen.init();
    startContent.style.display = "none";
    tutorial.style.display = "none";
    chat.setNickname(name + "  ");
    console.log(name);
  }


  function continueAsObject(name){
    console.log("continueAsTestperson  " +  nickNameSpace);
    objectMain.style.display="block";
    startContent.style.display="none";
    rightContent.style.display="block";
    var objectContent = new App.objectScreen();
    objectContent.init(name + "  ");
    console.log(name);
    chat.setNickname(name + "  ");
  }





  function showTutorial(){
    startContent.style.display = "none";
    adminMain.style.display = "none";
    objectMain.style.display = "none";
    tutorial.style.display = "block";
  }


  function goBackToStart(){
      startContent.style.display = "block";
      tutorial.style.display = "none";
  }



that.init = init;
return that;

};
