
$(document).ready(function(){
var userGuess;
var randNum = Math.floor(Math.random()*100+1);
var guessCounter = 0;
  $("#submitGuess").on("click", function(){
    userGuess = parseInt($("#userGuess").val());
    console.log(userGuess + "," + typeof(userGuess));
    //Clears the userGuess text field after submitted.
    $("#userGuess").val("");

  });
  $("#submitGuess").on("click", function(){
    guessCounter++;
    if(guessCounter === 8){
      $("#response").text("You're out of guesses, the game is over.");
      $("#submitGuess").hide();
      $("#userGuess").hide();
    }
    else{
      console.log("The guess counter is: " + guessCounter);
      $("#guessCounter").text("The guess counter is: " + guessCounter);
      //Backdoor for guessCounter Logic
      if (userGuess == -1) {
          guessCounter = 6;
      }
      //notifies "two gesses left"
      if (guessCounter >= 5) {
        $("#response").addClass("warning")
      }
      //Logic for Hi/Lo Game
      console.log(randNum);
      if (randNum > userGuess){
        $("#response").text("You're too low");
      }
      else if (randNum< userGuess) {
        $("#response").text("You're too high");
      }
      else if(randNum === userGuess){
        $("#response").text("You're correct! Game over!");
        $("#submitGuess").hide();
        $("#userGuess").hide();
      }
      //Appends the user guesses to id="history"
      $("#history").append(userGuess + ", ")
  }

});




});
