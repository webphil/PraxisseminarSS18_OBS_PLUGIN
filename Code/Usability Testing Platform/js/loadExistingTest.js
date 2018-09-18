var App = App || {};
App.loadExistingTest = function () {



  "use strict";
  var that = {};



  function init(){
    handleExistingTestUserInteractions();
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
      /*  <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td scope="col"><span class="glyphicon glyphicon-menu-right" style="padding: 4px;"></td>
        </tr>*/
      }














  that.init = init;
  return that;


};
