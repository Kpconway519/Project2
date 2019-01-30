
// Global Bariables
let selectedBarber = null;
let globalBarberArray = [];


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



//backend stuff below


//on click for selecting barber
$(".selectBarber").on("click", function (event) {
  event.preventDefault()


  //this function will select the current barber and set the id for that barber as a variable. nice and simple.
  // selectedBarber = $(this).data("barber");
  // alert(selectedBarber);
  // alert('works');

  //FRONTEND need to add visual feedback for this selection.
  var barberName = $(this).data("name");
  globalBarberArray.push(barberName);

  var barberLocation = $(this).data("location");
  globalBarberArray.push(barberLocation)

  //Overlays the Barber Name Chosen and location
  function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayBarberName").innerHTML = "Chosen Barber:" + "<br>" + barberName + "<br>" + barberLocation;
  }

  //console logs the chosen barber
  console.log(globalBarberArray);
  on();

});
//Closes overlay
function off() {
  document.getElementById("overlay").style.display = "none";
}


//on click for submitting thing at the bottom.
$("#confirmBarber").on("click", function (event) {
  event.preventDefault()
  //take the selectedBarber variable and gently place it into the appointments row with the appropriate appointment.


  //This is the main function which does the heavy lifting for the click handler.
  //get the appoitnment with "session" value of localStorage.getItem("tempSessionId") and set the barber selected to that.
  if (selectedBarber !== null) {
    let barbUpdate = {
      session: `${localStorage.getItem("tempSessionId")}`,
      barber: selectedBarber
    };

    //$.put("appointment/barber", barbUpdate)
    $.ajax({
      method: "PUT",
      url: "/appointment/barber",
      data: barbUpdate
    }).then(function (data) {
      console.log('works')
      location.href = "/appointment"
    })

  } else {
    alert('You must Select a Barber')
  }


});