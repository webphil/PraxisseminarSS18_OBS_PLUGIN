var App = App || {};
App.testmanager = function () {

    "use strict";
    var that = {},
    btnChoseExistingTest,
    btnCreateNewTest,
    btnStartFreeTest,
    testmanagerStartDialogue,
    existingTestDialogue,
    createNewTestDialogue,
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
        freeTestDialogue = document.getElementById("freeTestDialogue");
        btnChoseExistingTest = document.getElementById("choseExistingTestBtn");
        btnChoseExistingTest.addEventListener("click", showExistingTestDialogue);
        btnCreateNewTest = document.getElementById("createNewTestBtn");
        btnCreateNewTest.addEventListener("click", showCreateNewTestDialogue);
        btnStartFreeTest = document.getElementById("startFreeTestBtn");
        btnStartFreeTest.addEventListener("click", showFreeTestDialogue);

    }


    function showExistingTestDialogue(){

        testmanagerStartDialogue.style.display = "none";
        existingTestDialogue.style.display = "block";
        createNewTestDialogue.style.display = "none";
        freeTestDialogue.style.display = "none";
        var existingTest = new App.loadExistingTest();
        existingTest.init();

    }

    function showCreateNewTestDialogue(){

        testmanagerStartDialogue.style.display = "none";
        existingTestDialogue.style.display = "none";
        createNewTestDialogue.style.display = "block";
        freeTestDialogue.style.display = "none";
        var createNewTest = new App.createNewTest();
        createNewTest.init();

    }


    function showFreeTestDialogue(){

        testmanagerStartDialogue.style.display = "none";
        existingTestDialogue.style.display = "none";
        createNewTestDialogue.style.display = "none";
        freeTestDialogue.style.display = "block";

    }



    function showTestmanagerStart(){

        testmanagerStartDialogue.style.display = "block";
        existingTestDialogue.style.display = "none";
        createNewTestDialogue.style.display = "none";
        freeTestDialogue.style.display = "none";

    }






    that.init = init;
    return that;
};
