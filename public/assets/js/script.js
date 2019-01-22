//this is where the script for the click handlers is going to go. Not sure if we're gonna do a different one for each page, or just put them all in here and link from main.handlebars


// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

$("#barber-add-btn").on("click", function(event) {
    event.preventDefault();
  
    var newBarber = {
      firstName: $("#barber_first_name").val().trim(),
      lastName: $("#barber_last_name").val().trim(),
      location: $("#barber_location").val().trim(),
    };
  
    $.post("/barber/new", newBarber)
      .then(function(data) {
        console.log(data);
        alert("Adding new barber");
      });
  
    // empty each input box by replacing the value with an empty string
    $("#name").val("");
    $("#role").val("");
    $("#age").val("");
    $("#force-points").val("");
  
  });







