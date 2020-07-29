//Control add button and information wrap

const addInformation = document.querySelector(".js-addInformation");
const addBtn = document.querySelector(".js-addBtn");
const information = document.querySelector(".js-information");
const nameInput = document.querySelector(".js-nameInput");
const movieRate = document.querySelector(".js-movieRate");
const rate1 = document.querySelector(".js-rate1");
const rate2 = document.querySelector(".js-rate2");
const rate3 = document.querySelector(".js-rate3");
const rate4 = document.querySelector(".js-rate4");
const rate5 = document.querySelector(".js-rate5");
const reviewInput = document.querySelector(".js-reviewInput");
const linkInput = document.querySelector(".js-linkInput");
const saveBtn = document.querySelector(".js-saveBtn");
const cancelBtn = document.querySelector(".js-cancelBtn");

const SHOWING_CLASS = "showing";

function handleCancelBtn(event) {
    nameInput.value = "";
    reviewInput.value = "";
    rateFinal1.innerText = "😐";
    rateFinal2.innerText = "😐";
    rateFinal3.innerText = "😐";
    rateFinal4.innerText = "😐";
    rateFinal5.innerText = "😐";
    linkInput.value = "";
    addInformation.classList.add(SHOWING_CLASS);
    information.classList.remove(SHOWING_CLASS);
    movieRate.classList.add(SHOWING_CLASS);
    rateFinal.classList.remove(SHOWING_CLASS);
    rateResetBtn.classList.remove(SHOWING_CLASS);
}

function handleSaveBtn(event) {}

function handleAddBtnClick(event) {
    addInformation.classList.remove(SHOWING_CLASS);
    information.classList.add(SHOWING_CLASS);
}

function init() {
    addInformation.classList.add(SHOWING_CLASS);
    addBtn.addEventListener("click", handleAddBtnClick);
    saveBtn.addEventListener("click", handleSaveBtn);
    cancelBtn.addEventListener("click", handleCancelBtn);
}
init();