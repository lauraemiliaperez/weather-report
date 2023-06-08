const state = {
    temp: 90,
};

const setUpTemperature = () => {
    let classType;
    let gardenType;

    if (state.temp >= 80) {
    classType = 'red'
    gardenType = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
    }
    else if ((state.temp >= 70) & (state.temp <= 79)) {
    classType = "orange";
    gardenType = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if ((state.temp >= 60) & (state.temp <= 69)) {
    classType = "yellow";
    gardenType = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if ((state.temp >= 50) & (state.temp <= 59)) {
    classType = "green";
    gardenType = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else {
    classType = "teal";
    gardenType = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }

    let temp = document.querySelector("#temp");
    temp.setAttribute("class", classType);
    temp.textContent = state.temp;

    let garden = document.querySelector("#garden");
    garden.textContent = gardenType
}

function Up() {
    let temp = document.querySelector("#temp");
    state.temp = state.temp + 1;
    temp.textContent = state.temp;
    setUpTemperature()
}

function Down() {
    const temp = document.getElementById("temp");
    state.temp = state.temp - 1;
    temp.textContent = state.temp;
    setUpTemperature()
}

function City() {
    const cityName = document.getElementById("cityname").value;
    const cityHeader = document.querySelector("h2");
    cityHeader.textContent = cityName;
}

const registerEventHandlers = () => {
    const buttonDown = document.getElementById("downbtn");
    buttonDown.addEventListener("click", Down);

    const buttonUp = document.getElementById("upbtn");
    buttonUp.addEventListener("click", Up);

    const searchButtonTemp = document.querySelector("#tempbtn");
    searchButtonTemp.addEventListener("click", setUpTemperature);

    const searchButtonCity = document.getElementById("searchbtn");
    searchButtonCity.addEventListener("click", City);

    // To do: work on reset button
    // const buttonReset = document.getElementById("resetbtn");
    // buttonReset.addEventListener("click", )

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

