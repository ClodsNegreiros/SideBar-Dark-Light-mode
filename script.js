const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");

const darkMode = () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode"
    } else {
        modeText.innerText = "Dark Mode"

    }
}

const closeSideBar = () => {
    sidebar.classList.toggle("close");
}

const search = () => {
    sidebar.classList.remove("close");
}
