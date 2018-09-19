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
  btnAddTask
  ;


  function init(){
    newTestDialogueStart = document.getElementById("newTestDialogueStart");
    newTestDialogueStart.style.display="block";
    btnSaveTest = document.getElementById("saveNewTest");
    btnSaveTest.addEventListener("click", saveTest);
    inputTitleNewTest = document.getElementById("titleNewTest");
    btnBackToTestManager = document.getElementById("btnBackToTestManager");
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
       ///////// TODO:  //add taskInput to task-taskjson
      }
    });
  }


  function saveTest(){
    if(inputTitleNewTest.value != ""){
      var tasklist=document.getElementById("addedTasks");
      var task = tasklist.getElementsByTagName("li");
      for (var i = 0; i < task.length; ++i) {
        var text = task[i].innerText;
        text = text.slice(0, text.length-1);
          if(i<task.length-1){
            tasks += '"task ' + (i+1) + '":"'+ text + '",'
          }
          else{
            tasks += '"task ' + (i+1) + '":"' + text + '"'
          }
      }
      resultJson='{"title":"' + inputTitleNewTest.value + '","description":"text","test":{' + tasks + '}}';
      processResultJson(resultJson);
      newTestDialogueStart.style.display = "none";
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
    //TODO

  }






  that.init = init;
  return that;
};
