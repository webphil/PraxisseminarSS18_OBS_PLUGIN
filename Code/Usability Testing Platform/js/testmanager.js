var App = App || {};
App.testmanager = function () {

    "use strict";
    var that = {},
    btnChoseExistingTest,
    btnCreateNewTest,
    btnUploadTest,
    btnStartFreeTest,
    testmanagerStartDialogue,
    existingTestDialogue,
    createNewTestDialogue,
    uploadTestDialogue,
    freeTestDialogue,
    btnBack,
    selectedTest,
    i;


    function init(){
    testmanagerStartDialogue = document.getElementById("testmanagerStart");
    btnBack = document.getElementsByClassName("btnBackTestmanager");
    for (i in btnBack) {
      if (btnBack.hasOwnProperty(i)) {
        btnBack[i].addEventListener("click", showTestmanagerStart);
        }
    }
    existingTestDialogue = document.getElementById("existingTestDialogue");
    createNewTestDialogue = document.getElementById("newTestDialogue");
    uploadTestDialogue = document.getElementById("uploadTestDialogue");
    freeTestDialogue = document.getElementById("freeTestDialogue");
    btnChoseExistingTest = document.getElementById("choseExistingTestBtn");
    btnChoseExistingTest.addEventListener("click", showExistingTestDialogue);
    btnCreateNewTest = document.getElementById("createNewTestBtn");
    btnCreateNewTest.addEventListener("click", showCreateNewTestDialogue);
    btnUploadTest = document.getElementById("uploadNewTestBtn");
    btnUploadTest.addEventListener("click", showUploadTestDialogue);
    btnStartFreeTest = document.getElementById("startFreeTestBtn");
    btnStartFreeTest.addEventListener("click", showFreeTestDialogue);
    }


    function showExistingTestDialogue(){
      testmanagerStartDialogue.style.display = "none";
      existingTestDialogue.style.display = "block";
      createNewTestDialogue.style.display = "none";
      uploadTestDialogue.style.display = "none";
      freeTestDialogue.style.display = "none";
      handleExistingTestUserInteractions();
    }

    function showCreateNewTestDialogue(){
      testmanagerStartDialogue.style.display = "none";
      existingTestDialogue.style.display = "none";
      createNewTestDialogue.style.display = "block";
      uploadTestDialogue.style.display = "none";
      freeTestDialogue.style.display = "none";

    }

    function showUploadTestDialogue(){
      testmanagerStartDialogue.style.display = "none";
      existingTestDialogue.style.display = "none";
      createNewTestDialogue.style.display = "none";
      uploadTestDialogue.style.display = "block";
      freeTestDialogue.style.display = "none";
    }


    function showFreeTestDialogue(){
      testmanagerStartDialogue.style.display = "none";
      existingTestDialogue.style.display = "none";
      createNewTestDialogue.style.display = "none";
      uploadTestDialogue.style.display = "none";
      freeTestDialogue.style.display = "block";
    }



    function showTestmanagerStart(){
      testmanagerStartDialogue.style.display = "block";
      existingTestDialogue.style.display = "none";
      createNewTestDialogue.style.display = "none";
      uploadTestDialogue.style.display = "none";
      freeTestDialogue.style.display = "none";
    }




    function loadExistingTestsFromDatabase(){
    /*  <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td scope="col"><span class="glyphicon glyphicon-menu-right" style="padding: 4px;"></td>
      </tr>*/


    }

    function handleExistingTestUserInteractions(){
      $('.table > tbody > tr').click(function() {
      selectedTest = $(this).find('th').text();
      displaySelectedTest(selectedTest);
      });
    }



    function displaySelectedTest(tests){
    }












    that.init = init;
    return that;
};
