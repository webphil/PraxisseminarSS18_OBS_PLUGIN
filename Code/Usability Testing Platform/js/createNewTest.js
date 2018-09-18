var App = App || {};
App.createNewTest = function () {



  "use strict";
  var that = {},
  newTestDialogueStart,
  btnAddTasksToTest,
  inputTitleNewTest,
  btnBackToTestManager,
  titleNewTest,
  resultJson
  ;


  function init(){
    newTestDialogueStart = document.getElementById("newTestDialogueStart");
    newTestDialogueStart.style.display="block";
    btnAddTasksToTest = document.getElementById("btnAddTasksToTest");
    btnAddTasksToTest.addEventListener("click", goToAddTasksDialogue);
    inputTitleNewTest = document.getElementById("titleNewTest");
    btnBackToTestManager = document.getElementById("btnBackToTestManager");
  }



  function goToAddTasksDialogue(){
    if(inputTitleNewTest.value != ""){
///////// TODO: titel New test to json
      titleNewTest = inputTitleNewTest.value;
      newTestDialogueStart.style.display = "none";
      var addTasksDialogue = document.getElementById("addTasksDialogue");
      addTasksDialogue.style.display="block";
      processUserInputInAddTasks();

    }
    else{
      var notificationEnterTitle = document.getElementById("notificationEnterTitle");
      notificationEnterTitle.style.display = "block";
    }

  }



  function processUserInputInAddTasks(){
    var tasklist=document.getElementById("addedTasks");
    var taskInput = document.getElementById("taskInput");
    var btnAddTask = document.getElementById("btnAddSingleTask");
    btnAddTask.addEventListener("click", function(){
     if(taskInput.value != ""){
       var entry = document.createElement('li');
       entry.appendChild(document.createTextNode(taskInput.value));
       tasklist.appendChild(entry);
       taskInput.value="";



       ///////// TODO:  //add taskInput to task-taskjson

      }
    });

    ///////// TODO:  //processResultJson
  }















  function processResultJson(){






  }



  that.init = init;
  return that;


};
