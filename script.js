const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

setInterval(() => { 
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hour.innerHTML = `${formaTime(hours)}`;
    min.innerHTML = `${formaTime(minutes)}`;
    sec.innerHTML = `${formaTime(seconds)}`;

}, 1000,);

function formaTime (time) {
    return time < 10 ? "0" +  time : time;
}