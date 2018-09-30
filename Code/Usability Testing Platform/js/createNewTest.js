var App = App || {};
App.createNewTest = function () {

  "use strict";
  var that = {},
  newTestDialogueStart,
  btnSaveTest,
  inputTitleNewTest,
  tasks = "",
  taskCounter,
  btnBackToTestManager,
  titleNewTest,
  resultJson,
  btnAddTask,
  inputNewTest,
  alertTestSaved,
  labelBtnBackToTestmanager,
  startNewTest;


  function init(){
    inputNewTest = document.getElementById("inputNewTest");
    inputNewTest.style.display="block";
    alertTestSaved = document.getElementById("alertTestSaved");
    alertTestSaved.style.display="none";
    newTestDialogueStart = document.getElementById("newTestDialogue");
    newTestDialogueStart.style.display="block";
    btnSaveTest = document.getElementById("saveNewTest");
    btnSaveTest.style.display="block";
    btnSaveTest.addEventListener("click", saveTest);
    labelBtnBackToTestmanager = document.getElementById("labelBtnBackToTestmanager");
    labelBtnBackToTestmanager.innerHTML="";
    inputTitleNewTest = document.getElementById("titleNewTest");
    btnBackToTestManager = document.getElementById("btnBackToTestManager");
    btnBackToTestManager.addEventListener("click", goBackToTestManager);
    btnAddTask = document.getElementById("btnAddSingleTask");
    btnAddTask.addEventListener("click", function(){
      var taskInput = document.getElementById("taskInput");
      var tasklist=document.getElementById("addedTasks");
      var task = document.createElement('li');
      var deleteBtn = document.createElement('a');
      if(taskInput.value != ""){
        task.appendChild(document.createTextNode(taskInput.value));
        deleteBtn.innerHTML = "x";
        deleteBtn.classList.add("button3");
        deleteBtn.addEventListener("click", removeItemFromList);
        task.appendChild(deleteBtn);
        tasklist.appendChild(task);
        taskInput.value="";
      }
    });
  }

  function goBackToTestManager(){
    newTestDialogueStart.style.display= "none";
    document.getElementById("testmanagerStart").style.display="block";
    document.getElementById("titleNewTest").value = "";
    $(addedTasks).empty();
  }

  function saveTest(){
      if(inputTitleNewTest.value != ""){
        var tasklist=document.getElementById("addedTasks");
        var task = tasklist.getElementsByTagName("li");
        for (var i = 0; i < task.length; i++) {
          var text = task[i].innerText;
          text = text.slice(0, text.length-1);
            if(i<task.length-1){
              tasks += '"task' + (i+1) + '":"'+ text + '",'
            }
            else{
              tasks += '"task' + (i+1) + '":"' + text + '"'
            }
        }
        var dateTime = new Date();
        var date = ""+ dateTime.getDate() + "."
                     + dateTime.getMonth() + "."
                     + dateTime.getFullYear();
        resultJson='{"title":"' + inputTitleNewTest.value + '","date":"'+date+'","test":{' + tasks + '}}';
        processResultJson(resultJson);
        btnSaveTest.style.display="none";
        inputNewTest.style.display="none";
        alertTestSaved.style.display="block";
        labelBtnBackToTestmanager.innerHTML="zurück zum Testmanager";
      }
      else{
        var notificationEnterTitle = document.getElementById("notificationEnterTitle");
        notificationEnterTitle.style.display = "block";
      }
  }




  function removeItemFromList(){
    var removable = this.parentElement;
    var tasklist=document.getElementById("addedTasks");
    tasklist.removeChild(removable);
  }


  function processResultJson(resultJson){
    $.ajax({
        type: "POST",
        url: '/php/mySQL_connect.php',
        data: {json: resultJson},
        dataType: "json",
        success: function(data) {
          console.log("Done");
        }
      });
  }


  that.init = init;
  return that;
};
