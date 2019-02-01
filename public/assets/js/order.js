
let servArray = [];
let globalCostArray = [];
let globalDurationArray = [];
let globalNameArray = [];
let totalDuration = 0;
let totalCost = 0;


//function that affects the add buttons to add them to the array.
$(".addServ").on("click", function (event) {
    event.preventDefault()
    if (servArray.length < 3) {
        var servID = $(this).data("id")
        servArray.push(servID)

        var servCost = $(this).data("cost");
        globalCostArray.push(servCost);
        var servDuration = $(this).data("duration");
        globalDurationArray.push(servDuration);
        var servName = $(this).data("name");
        globalNameArray.push(servName);

        var snkBar = document.getElementById("snackbar");
        // Add the "show" class to DIV
        snkBar.className = "show";
        //Display selected service
        document.getElementById("snackbar").innerHTML = "$" + servCost + " " + servName + " has been added!";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { snkBar.className = snkBar.className.replace("show", ""); }, 3000);


        console.log(servArray)
        console.log(globalCostArray)
        console.log(globalDurationArray)
        console.log(globalNameArray)

    } else {
        // alert("You may only add up to 3 services!");

        var snkBar = document.getElementById("snackbar");
        // Add the "show" class to DIV
        snkBar.className = "show";
        //Display selected service
        document.getElementById("snackbar").innerHTML = "Cart is full with " + globalNameArray;
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { snkBar.className = snkBar.className.replace("show", ""); }, 3000);


    };
})

//function which acts when you click the submit button at the bottom of the page.

$("#goToBarber").on("click", function (event) {
    event.preventDefault();

    let makeAppointment = function (appObj) {
        $.post("/appointment/new", appObj)
            .then(function (data) {
                console.log(data);
            });
    }


    //* Comments from the comment blank will be put into the “comments” section
    //* Cost gets calculated on this page—just add up the total cost of the services selected.
    //* Duration, like price, just adds up all the durations and puts it as an integer into the appointments table. 

    let calculateCost = function () {
        //take the cost and just add it up depending on how many items are in the servArray
        for (i = 0; i < globalCostArray.length; i++) {
            //to calculate the cost, I need to take it from the page.
            totalCost += globalCostArray[i];
        };
    };

    let calculateDuration = function () {
        //take the cost and just add it up depending on how many items are in the servArray
        for (i = 0; i < globalDurationArray.length; i++) {
            totalDuration += globalDurationArray[i];
        };
    };



    let pushServicesToDb = function (cb) {

        if (servArray.length === 0) {
            var snkBar = document.getElementById("snackbar");
            // Add the "show" class to DIV
            snkBar.className = "show";
            //Display selected service
            document.getElementById("snackbar").innerHTML = `You must select at least one service!`;
            // After 3 seconds, remove the show class from DIV
            setTimeout(function () { snkBar.className = snkBar.className.replace("show", ""); }, 3000);
        } else {
            //make a new appointment, starting with the services selected from the servArray

            if (servArray.length === 1) {
                calculateCost();
                calculateDuration();
                addServicesObject = {
                    accepted: false,
                    comments: "leaving comments like this for now",
                    session: localStorage.getItem("tempSessionId"),
                    customer_id: 1,
                    barber_id: 1,
                    time: totalDuration,
                    location: "blank for now, later customer location",
                    cost: totalCost,
                    service_1: servArray[0],
                    paid: false,
                    completed: false
                }
                makeAppointment(addServicesObject)
            } else if (servArray.length === 2) {
                calculateCost();
                calculateDuration();
                addServicesObject = {
                    accepted: false,
                    comments: "leaving comments like this for now",
                    session: localStorage.getItem("tempSessionId"),
                    customer_id: 1,
                    barber_id: 1,
                    time: totalDuration,
                    location: "blank for now, later customer location",
                    cost: totalCost,
                    service_1: servArray[0],
                    service_2: servArray[1],
                    paid: false,
                    completed: false
                }
                makeAppointment(addServicesObject)
            } else if (servArray.length === 3) {
                calculateCost();
                calculateDuration();
                addServicesObject = {
                    accepted: false,
                    comments: "leaving comments like this for now",
                    session: localStorage.getItem("tempSessionId"),
                    customer_id: 1,
                    barber_id: 1,
                    time: totalDuration,
                    location: "blank for now, later customer location",
                    cost: totalCost,
                    service_1: servArray[0],
                    service_2: servArray[1],
                    service_3: servArray[2],
                    paid: false,
                    completed: false
                }
                makeAppointment(addServicesObject)
            }

        };
        cb()
    }
    //then go to the next page when that is done

    pushServicesToDb(function () {
        //put a callback function here which fires after the appointment is created, and then just loads the next page.
        if (servArray.length >= 1) {

            location.href = "/barber"
        } else {

            var snkBar = document.getElementById("snackbar");
            // Add the "show" class to DIV
            snkBar.className = "show";
            //Display selected service
            document.getElementById("snackbar").innerHTML = `You must select at least one service!`;
            // After 3 seconds, remove the show class from DIV
            setTimeout(function () { snkBar.className = snkBar.className.replace("show", ""); }, 3000);
    
        }
    })

    //* The Id for the appointment row will be stored in local storage.

})