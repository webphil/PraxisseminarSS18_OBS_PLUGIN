var App = App || {};
App.loadExistingTest = function () {



  "use strict";
  var that = {},
  btnDownload,
  btnNextTask,
  taskContainer,
  allTests = [];



  function init(){
    loadExistingTestsFromDatabase();
  }



    function loadExistingTestsFromDatabase(){
      var table = document.getElementById("tableTests");
      table.innerHTML = "";
      var tableBody = document.createElement('tbody');
      table.append(tableBody);
      $.ajax({
        type: "POST",
        url: '../php/loadTests.php',
        dataType: "json",
        success: function(data) {
          fillTable(data);
        }
      });
    }

    function fillTable(data){
      var i;
      for(i = 0; i < data.length; i++){
        var tests = $.parseJSON(data[i]);
        allTests.push(data[i]);
        var tableRef = document.getElementById('tableTests').getElementsByTagName('tbody')[0];
        var newRow   = tableRef.insertRow(tableRef.rows.length);
        var newCellNumber = newRow.insertCell(0);
        var newCellTitle  = newRow.insertCell(1);
        newCellTitle.addEventListener("click", displayTest);
        var newCellDate = newRow.insertCell(2);
        var newCellDeleteTest = newRow.insertCell(3);
        var deleteBtn = document.createElement('a');
        deleteBtn.innerHTML = "x";
        deleteBtn.classList.add("button3");
        deleteBtn.addEventListener("click", removeItemFromList);
        newCellNumber.innerHTML = ""+ (i+1);
        newCellTitle.innerHTML = tests.title;
        newCellDate.innerHTML = tests.date;
        newCellDeleteTest.appendChild(deleteBtn);
      }
    }


    function removeItemFromList(){
      var testID = this.parentElement.parentElement.children[0].innerHTML;
      deleteRow(testID);
      loadExistingTestsFromDatabase();
    }

    function deleteRow(ID){
      $.ajax({
        type: "POST",
        url: '../php/deleteTest.php',
        data: {deleteTestID: ID},
        dataType: "json",
        success: function(data) {
          console.log("Done");
        }
      });
    }

    function displayTest(){
      taskContainer = document.getElementById("taskContainer");
      taskContainer.style.display = "block";
      btnNextTask = document.getElementById("nextTask");
      btnNextTask.style.display="block";
      btnNextTask.innerHTML="Weiter";
      var id=parseInt(this.parentElement.querySelector("td").innerHTML);
      processTasks(JSON.parse(allTests[id-1]));
    }



    function processTasks(selectedTest){
      var existingTestDialogue = document.getElementById("existingTestDialogue");
      var showTasks = document.getElementById("taskContainer");
      existingTestDialogue.style.display = "none";
      showTasks.style.display="block";
      var currentTaskOnDisplay=document.getElementById("task");
      var headlineTest = document.getElementById("testTitleTestMaster");
      headlineTest.innerHTML=selectedTest.title;
      var counter = 0;
      btnNextTask.addEventListener("click", function(){
        if(counter == 0){
          btnNextTask.innerHTML="Test starten"
        }
        counter += 1;
        if(counter < Object.keys(selectedTest.test).length){
          var myTask = "task"+(counter);
          var task = selectedTest.test[myTask];
          currentTaskOnDisplay.innerHTML = "";
          currentTaskOnDisplay.innerHTML = task;
          $.ajax({
            type: "POST",
            url: '../php/task.php',
            data: {taskToDisplay: task, readTask: "false"},
            dataType: "json",
            success: function(data) {
              console.log("Done");
            }
          });
        }
        else{
          btnDownload = document.getElementById("downloadResults");
          btnDownload.style.display="block";
          btnDownload.addEventListener("click", downloadResults);
          btnNextTask.style.display="none";
          currentTaskOnDisplay.innerHTML = "";
          taskContainer.style.display = "none";
          headlineTest.innerHTML = "Alle Tasks wurden erledigt"
        }
      });

    }


    function downloadResults(){
      var testmanager = document.getElementById("testmanagerStart");
      testmanager.style.display="block";
      btnNextTask.style.display="block";
      btnDownload.style.display="none";
      location.href = "http://167.99.248.108/php/downloadFile.php";
    }




  that.init = init;
  return that;


};
