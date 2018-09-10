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
    freeTestDialogue;


    function init(){
    console.log("testmanager is auch");
    testmanagerStartDialogue = document.getElementById("testmanagerStart");


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



    }

    function showCreateNewTestDialogue(){


    }



    function showUploadTestDialogue(){



    }


    function showFreeTestDialogue(){



    }



    function showTestmanagerStart(){




    }












    that.init = init;
    return that;
};
