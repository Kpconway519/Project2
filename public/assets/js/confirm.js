
//Set's count down date
var countDownDate = new Date("Jan 27, 2019 12:00:00").getTime();

//Updates the countdown every 1 sec 
var x = setInterval(function () {
    //Current time
    var now = new Date().getTime();
    //Difference between the countdown date and current time
    var distance = countDownDate - now;
    //Days, Hours, Minutes and Seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //Displaying in h3 id "countDown"
    document.getElementById("countDown").innerHTML = days + " Day(s) " +
        hours + " Hour(s) " +
        minutes + " Minute(s) " +
        seconds + " Second(s) ";
    //Countdown has finished "Your Barber has Arrived"
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countDown").innerHTML = "Your Barber Has Arrived";
    }
}, 1000);

