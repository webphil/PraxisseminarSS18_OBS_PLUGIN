var App = App || {};
App.loadExistingTest = function () {



  "use strict";
  var that = {};



  function init(){
    handleExistingTestUserInteractions();
    loadExistingTestsFromDatabase();
  }




  function handleExistingTestUserInteractions(){
    $('.table > tbody > tr').click(function() {
    selectedTest = $(this).find('th').text();
    displaySelectedTest(selectedTest);
    });
  }



    function displaySelectedTest(tests){
    }






    function loadExistingTestsFromDatabase(){

      $.ajax({
        type: "POST",
        url: '../php/loadTests.php',
        dataType: "json",
        success: function(data) {
          asd(data);
        }
      });
    }

    function asd(data){

      var i;
      for(i = 0; i < data.length; i ++){

        var tests = $.parseJSON(data[i]);
        var tableRef = document.getElementById('tableTests').getElementsByTagName('tbody')[0];
        var newRow   = tableRef.insertRow(tableRef.rows.length);

        var newCellNumber = newRow.insertCell(0)
        var newCellTitle  = newRow.insertCell(1);
        var newCellDate = newRow.insertCell(2);

        newCellNumber.innerHTML = ""+ (i+1);
        newCellTitle.innerHTML = tests.title;
        newCellDate.innerHTML = tests.date;

        
        console.log(data[i]);
        console.log(Object.keys(tests).length);
      }
      
    }














  that.init = init;
  return that;


};
