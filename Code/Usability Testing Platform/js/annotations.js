var App = App || {};
App.annotations = function () {

    "use strict";
    var that = {},
    singleAnnotation,
    timestamp,
    btnAddAnnotation;


    function init(){
    singleAnnotation = document.getElementById("annotation");
    btnAddAnnotation = document.getElementById("btnSubmitAnnotation");
    btnAddAnnotation.addEventListener("click", handleUserInput);
    }


    function handleUserInput(){
      if(singleAnnotation.value != ""){
      var time =  new Date();
      timestamp= ""+ time.getHours() + ":"
                  + time.getMinutes() + ":"
                  + time.getSeconds();
      var annotation = timestamp + " - " + singleAnnotation.value;
      writeAnnotationToFile(annotation);
      }
    singleAnnotation.value="";
    }



//todo

    function writeAnnotationToFile(annotation){


    }





    that.init = init;
    return that;
};
