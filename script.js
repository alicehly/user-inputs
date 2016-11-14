$( document ).ready(function() {
    console.log( "ready!" );
});



$(function() {
  //All JS goes within these brackets  
  
  $("#drunk-scale").click(function(){
    
    //select the box with id of age
    //get the value from that box
    var drunkString = $("#age").val();

    //convert string to number
    var drunk = drunkInt(drunkString);

    //check if person is too drunk
    if ( scale >= 7 ) {
      //if person is drunk, next question
      $("#neil-form").show();
      $("#age-form").hide();
    } else {
      $("#answer").text("No!");
      $("#club-img").attr("src", "");
    }
    
  });

  $("#neil-submit").click(function(){
    var neilAlbumsString = $("#neil-albums").val();
    var neilAlbums = parseInt(neilAlbumsString);

    if ( neilAlbums < 50 ) {
      $("#neil-form").hide();
      $("#answer").text("No!");
      $("#club-img").attr("src", "https://media.giphy.com/media/zyxiqEQb6wTSg/giphy.gif");
      
    } else {
      $("#answer").text("You're good!");
      $("#club-img").attr("src", "");
    }
  });

});
