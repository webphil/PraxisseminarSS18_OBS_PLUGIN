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
          processTests(data);
        }
      });
    }

    function processTests(data){
      console.log("Done");
      console.log(""+data[1]);
    }














  that.init = init;
  return that;


};
