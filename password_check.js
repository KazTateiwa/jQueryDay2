$(document).ready(function(){
var userName;
var password;
  $("#button").on("click", function(){
    userName = $("#userText").val();
    password = $("#passText").val();
    console.log(userName + ";" + password);
    if (userName === "" || password === "") {
      $("#response").text("An empty username or password was submitted.");
    }
  });
  $("#button").on("click", function(){

    function userPassLength(userName,password){
    if(userName.length >= 6 && password.length >= 6){
      return true;
    }
    else{
      return false;
    }
    }
    function passCheck(password) {
    if(password === "password"){
      return false;
    }
    return true;
    }

    function userPassCheck(userName, password) {
    if(userName === password)
      return false;
    return true;
    }

    function userPassChar(userName, password){
    var userChar = userName.search(/[!#\$]/);
    var passChar = password.search(/[!#\$]/);

    if(userChar === -1 && passChar > -1 ){
      return true;
    }
    else{
      return false;
    }
    }

    function oneDigit(password) {
      var digArray = ["0","1","2","3","4","5","6","7","8","9"];
      var isDigit = 0;
      digArray.forEach(function(elementValue){
        if(password.includes(elementValue)){
          isDigit++;
        }
      });
      if(isDigit > 0)
        return true;
      else {
        return false;
      }
    }
    //Password has to contain a lower and an uppercase letter

    function passUpperLower(password){
      var passUpper = password.toUpperCase();
      var passLower = password.toLowerCase();
      if(password < passLower && password > passUpper){
        return true;
      }
      return false;
    }
    function userCheck(){
      var functionCalls = [userPassLength(userName,password),passCheck(password),userPassCheck(userName,password),userPassChar(userName,password),oneDigit(password),passUpperLower(password)];
      console.log(functionCalls);
      var functionResp = ['User ID and password have to be at least six characters long','Password cannot be "password"','User ID and password cannot be the same', 'The username cannot contain special characters or the password did not contain special characters', 'The password did not contain a digit', 'The password did not contain an upper and lower case letter'];
      //Loop through arrays and output message if necessary
      var trueCounter = 0;
      functionCalls.forEach(function(elementValue, index){
        if(elementValue === false){
          trueCounter += elementValue;
          console.log(functionResp[index]);
          $("#responseList").append("<li>"+functionResp[index]+"</li>");
        }
        trueCounter++;
        console.log(trueCounter);
        if(trueCounter == 6){
           $("#response").text("Credentials Valid.");
        }
      });

    }
    userCheck(userName, password);
  });
});
