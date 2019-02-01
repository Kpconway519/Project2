

$("#setTimeConfirm").on("click", function () {
  event.preventDefault()
  let selectedTime = $("#apptTime").val().trim();;



  if (selectedTime) {
    let timeUpdate = {
      session: `${localStorage.getItem("tempSessionId")}`,
      time: selectedTime
    };

    //$.put("appointment/barber", barbUpdate)
    $.ajax({
      method: "PUT",
      url: "/appointment/time",
      data: timeUpdate
    }).then(function (data) {
      console.log('works')
      location.href = `/confirm`
    })

  } else {
    var snkBar = document.getElementById("snackbar");
    // Add the "show" class to DIV
    snkBar.className = "show";
    //Display selected service
    document.getElementById("snackbar").innerHTML = `You must select a time!`;
    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { snkBar.className = snkBar.className.replace("show", ""); }, 3000);

  }


})


