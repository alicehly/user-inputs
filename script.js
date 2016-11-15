$( document ).ready(function() {
    console.log( "ready!" );
});



$(function() {
  //All JS goes within these brackets  
  
  $("#intoxicated-level").click(function(){
    var drunkString = $("#age").val();
    var drunk = drunkInt(drunkString);

    //check if person is too drunk
    if ( scale >= 7 ) {
      //if person is drunk, next question
      $("#drunk-result").text("No!");
    } else {
      $("#drunk-result").text("Yes!");
    }
    
  });

  $("#user-submit").click(function(){
    var accountBalance = $("#bankMoney").val();
    var bankBalance = parseInt(neilAlbumsString);

    if ( bankBalance <= 50 ) {
      $("#wallet-result").text("Don't do it!");
    } else {
      $("#answer").text("You're good!");

    }
  });

});

