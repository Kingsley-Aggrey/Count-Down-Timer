let mainTime = "";

// All Times
const valsDate = "14 Feb 2024";
const easterDate = "17 April 2024";
const newYearDate = "1 January 2024";

let eventDone = false;

function datesProps(date, title, imageLink){ 
    this.date = date;
    this.title = title;
    this.imageLink = imageLink;
}

// Objects
const valsProps = new datesProps(valsDate, "Vals Day Count Down", "./images/val.jpg");
const easterProp = new datesProps(easterDate, "Easter Count Down", "./images/Easter.jpg")
const newYearProp = new datesProps(newYearDate, "New Year Count Down", "./images/Happy_new_year.jpg")

//Document Elements
const titleEl = document.getElementById("title");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const counterContainerEl =document.getElementById("c-container")
const messageEl = document.getElementById("msg");

//Buttons elements
const valBtnEl = document.getElementById("valsBtn")
const easterBtnEl = document.getElementById("easterBtn")
const newYearBtnEl = document.getElementById("newYearBtn")

//Set the mainTime to the Valentine Date
// mainTime = valsProps.date;

function countDown(){
    const currentDate = new Date()
    const countDownDate = new Date(mainTime);

    const totalSeconds = (countDownDate - currentDate)/1000;

    const days = Math.floor(totalSeconds /3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);


    setGraphic(days, hours, mins, seconds);
}

function setGraphic(d,h,m,s){
    daysEl.textContent = formatTxt(d);
    hoursEl.textContent =formatTxt(h);
    minsEl.textContent = formatTxt(m);
    secondsEl.textContent = formatTxt(s);
}

function checkIfEventDone(){
    counterContainerEl.classList.remove("deactivate");
    messageEl.classList.add("deactivate");

    const currentDate = new Date()
    const countDownDate = new Date(mainTime);
    const totalSeconds = (countDownDate - currentDate)/1000;
    eventDone = totalSeconds < 0? true : false;

    if(eventDone){
        counterContainerEl.classList.add("deactivate");
        messageEl.classList.remove("deactivate");
    }
}

function formatTxt(t){
    return t = t > 9? t: "0" + t
}

function changeProps(d,t,i){
    mainTime = d;
    titleEl.textContent = t;
    document.body.style.backgroundImage = `url(${i})`
}

//Adding Event Listener to the Buttons
valBtnEl.addEventListener("click", function(){
    changeProps(valsProps.date, valsProps.title, valsProps.imageLink)

    checkIfEventDone();
    countDown();
});

easterBtnEl.addEventListener("click", function(){
    changeProps(easterProp.date, easterProp.title, easterProp.imageLink);

    checkIfEventDone();
    countDown();
})

newYearBtnEl.addEventListener("click", function(){
    changeProps(newYearProp.date, newYearProp.title, newYearProp.imageLink);

    checkIfEventDone();
    countDown();
})

changeProps(valsProps.date,valsProps.title,valsProps.imageLink)
checkIfEventDone();

countDown();

setInterval(countDown, 1000)