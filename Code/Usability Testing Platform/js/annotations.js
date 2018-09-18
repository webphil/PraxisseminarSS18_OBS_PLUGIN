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
      writeAnnotationToFile();
    }



//todo

    function writeAnnotationToFile(){

      var dateTime = new Date();
      var timestamp = ""+ dateTime.getHours() + ":"
                        + dateTime.getMinutes() + ":"
                        + dateTime.getSeconds();
      var date = ""+ dateTime.getDate() + "."
                   + dateTime.getMonth() + "."
                   + dateTime.getFullYear();

      var annotation = document.getElementById("annotation").value;
      var addAnnotation = timestamp + "-" + document.getElementById("annotation").value;
      document.getElementById("annotation").value = '';

      $.ajax({
        type: "POST",
        url: '../php/SaveAnnotations.php',
        data: {date: date, annotation: addAnnotation},
        dataType: "json",
        success: function(data) {
          console.log(""+addAnnotation+";"+date);
        }
      });
    }





    that.init = init;
    return that;
};
