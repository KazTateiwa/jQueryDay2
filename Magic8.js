


$(document).ready(function(){
  //When the button is clicked, grab the question and display question
  $("#submit").on("click", function(){
    //Storing question in a variable
    var question = $("#question").val();
    alert(question);
    //Populating question into <p>
    $("#questionText").text(question);
    //Clearing the textfield after question is stored
    $("#question").text("");
  });
  //Generating the response for the question and outputting it to the view
  $("#submit").on("click", function(){
      //Makes ther response array
      var ansArray = ["Yup!","Fuhgeddaboudit", "Maybe", "What would your mother do?", "What would an Australian do, then do the opposite", "No", "That is a terrible idea."];
      //Generates a random index to ouput to the answerText tag
      var randIndex = Math.floor(Math.random()*((ansArray.length-1)+1))
      console.log("The random index is: " + randIndex);
      console.log(ansArray[randIndex]);
      $("#answerText").text(ansArray[randIndex]);
    });
});
