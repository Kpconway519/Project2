

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
      location.href = `/confirm/${localStorage.getItem("tempSessionId")}`
    })

  } else {
    alert('You must Select a Time')
  }


})


