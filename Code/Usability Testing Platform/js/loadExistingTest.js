var App = App || {};
App.loadExistingTest = function () {



  "use strict";
  var that = {},
  allTests = [];



  function init(){
    loadExistingTestsFromDatabase();
    handleExistingTestUserInteractions();
  }




  function handleExistingTestUserInteractions(){
    $('.table > tbody > tr').click(function() {
    var selectedTest = $(this).find('td')[0].innerHTML;
    displayTest(selectedTest);
    });
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
          //handleExistingTestUserInteractions();
        }
      });
    }

    function fillTable(data){
      var i;
      for(i = 0; i < data.length; i ++){
        var tests = $.parseJSON(data[i]);
        allTests.push(data[i]);
        var tableRef = document.getElementById('tableTests').getElementsByTagName('tbody')[0];
        var newRow   = tableRef.insertRow(tableRef.rows.length);
        newRow.addEventListener("click", displayTest);
        var newCellNumber = newRow.insertCell(0)
        var newCellTitle  = newRow.insertCell(1);
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
      var id=parseInt(this.querySelector("td").innerHTML)
      processTasks(JSON.parse(allTests[id-1]));
    }



    function processTasks(selectedTest){
      var existingTestDialogue = document.getElementById("existingTestDialogue");
      var showTasks = document.getElementById("taskContainer");
      existingTestDialogue.style.display = "none";
      showTasks.style.display="block";
      var currentTaskOnDisplay=document.getElementById("singleTaskTestMaster");
      var headlineTest = document.getElementById("testTitleTestMaster");
      headlineTest.innerHTML=selectedTest.title;
      var btnNextTask = document.getElementById("nextTask");
      btnNextTask.innerHTML="Weiter";
      var counter = 0;
      btnNextTask.addEventListener("click", function(){
        counter += 1;
        if(counter <= Object.keys(selectedTest.test).length){
          var myTask = "task"+(counter);
          currentTaskOnDisplay.innerHTML = "";
          currentTaskOnDisplay.innerHTML = selectedTest.test[myTask];
        }
        else{
          btnNextTask.innerHTML="Test beenden";
          currentTaskOnDisplay.innerHTML = "";
        }
      });

    }


  that.init = init;
  return that;


};
