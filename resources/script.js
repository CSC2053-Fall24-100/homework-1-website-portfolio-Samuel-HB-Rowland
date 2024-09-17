let scheduleShown = 0;
var x = document.getElementById('class-schedule');
x.style.display = "none";

const button = document.getElementById('toggle-schedule');
button.addEventListener('click', function() {
    if (scheduleShown === 0){
        x.style.display = "block";
        scheduleShown = 1;
    } else {
        x.style.display = "none";
        scheduleShown = 0;
    }
})


function welcomeGreeting(){
    const usrName = prompt("Please enter your name: ");
    var greetingsHeader = document.getElementById('greetingsHeader');
    greetingsHeader.textContent= 'Welcome: ' + usrName + '!';
}