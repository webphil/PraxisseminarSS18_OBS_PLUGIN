var App = App || {};
App.annotations = function () {

    "use strict";
    var that = {},
    singleAnnotation,
    timestamp,
    btnAddAnnotation,
    annotation;


    function init(){
    console.log("annotations is auch");
    singleAnnotation = document.getElementById("annotation");
    btnAddAnnotation = document.getElementById("btnSubmitAnnotation");
    btnAddAnnotation.addEventListener("click", handleUserInput);
    }


    function handleUserInput(){
      var time =  new Date();
      timestamp= ""+ time.getHours() + ":"
                  + time.getMinutes() + ":"
                  + time.getSeconds();
      annotation = timestamp + " - " + singleAnnotation.value;
      singleAnnotation.value="";
      writeAnnotationToFile();
    }



//todo

    function writeAnnotationToFile(){


    }





    that.init = init;
    return that;
};
