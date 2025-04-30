function printTime() {
    let now = new Date();
    let currentTime = now.toLocaleTimeString();
    console.log(currentTime);
}

setInterval(printTime, 1000);