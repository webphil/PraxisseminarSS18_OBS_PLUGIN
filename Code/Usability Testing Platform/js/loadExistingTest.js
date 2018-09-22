var App = App || {};
App.loadExistingTest = function () {



  "use strict";
  var that = {};



  function init(){
    loadExistingTestsFromDatabase();
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
        var tableRef = document.getElementById('tableTests').getElementsByTagName('tbody')[0];
        var newRow   = tableRef.insertRow(tableRef.rows.length);
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

      console.log(ID);

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

    function displayTest(selectedTest){
      //console.log(selectedTest);
    }



  that.init = init;
  return that;


};
