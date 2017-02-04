$(document).ready(function(){
var carInfo = [];
$(".displayInfo").hide();
  $("#button").on("click",function(){
    //Collect the car info into an array
    carInfo = $("#info").val().split("/")
    console.log(carInfo);
    //Hides the car info textfield and the submit button
    $(".getInfo").hide();
    //Shows the displayInfo with the car information
    $(".displayInfo").show();
    carInfo.forEach(function(elementValue, index){
      $("#car"+index).text(carInfo[index]);
    });
  });
});
