//Control rating system

const rateFinal = document.querySelector(".js-rateFinal");
const rateFinal1 = document.querySelector(".js-rateFinal1");
const rateFinal2 = document.querySelector(".js-rateFinal2");
const rateFinal3 = document.querySelector(".js-rateFinal3");
const rateFinal4 = document.querySelector(".js-rateFinal4");
const rateFinal5 = document.querySelector(".js-rateFinal5");
const rateResetBtn = document.querySelector(".js-rateResetBtn");
const resetBtn = document.querySelector(".js-resetBtn");

function handleResetBtnClick(event) {
    rateFinal1.innerText = "😐";
    rateFinal2.innerText = "😐";
    rateFinal3.innerText = "😐";
    rateFinal4.innerText = "😐";
    rateFinal5.innerText = "😐";
    movieRate.classList.add(SHOWING_CLASS);
    rateFinal.classList.remove(SHOWING_CLASS);
    rateResetBtn.classList.remove(SHOWING_CLASS);
}

function handleRateClick(event) {
    const rate = event.target;
    if (rate === rate1) {
        rateFinal1.innerText = "😃";
    } else if (rate === rate2) {
        rateFinal1.innerText = "😃";
        rateFinal2.innerText = "😃";
    } else if (rate === rate3) {
        rateFinal1.innerText = "😃";
        rateFinal2.innerText = "😃";
        rateFinal3.innerText = "😃";
    } else if (rate === rate4) {
        rateFinal1.innerText = "😃";
        rateFinal2.innerText = "😃";
        rateFinal3.innerText = "😃";
        rateFinal4.innerText = "😃";
    } else {
        rateFinal1.innerText = "😃";
        rateFinal2.innerText = "😃";
        rateFinal3.innerText = "😃";
        rateFinal4.innerText = "😃";
        rateFinal5.innerText = "😃";
    }
    movieRate.classList.remove(SHOWING_CLASS);
    rateFinal.classList.add(SHOWING_CLASS);
    rateResetBtn.classList.add(SHOWING_CLASS);
}

function handleRateMouseOut(event) {
    const rate = event.target;
    if (rate === rate1) {
        rate1.innerText = "😐";
    } else if (rate === rate2) {
        rate1.innerText = "😐";
        rate2.innerText = "😐";
    } else if (rate === rate3) {
        rate1.innerText = "😐";
        rate2.innerText = "😐";
        rate3.innerText = "😐";
    } else if (rate === rate4) {
        rate1.innerText = "😐";
        rate2.innerText = "😐";
        rate3.innerText = "😐";
        rate4.innerText = "😐";
    } else {
        rate1.innerText = "😐";
        rate2.innerText = "😐";
        rate3.innerText = "😐";
        rate4.innerText = "😐";
        rate5.innerText = "😐";
    }
}

function handleRateMouseOver(event) {
    const rate = event.target;
    if (rate === rate1) {
        rate1.innerText = "😃";
    } else if (rate === rate2) {
        rate1.innerText = "😃";
        rate2.innerText = "😃";
    } else if (rate === rate3) {
        rate1.innerText = "😃";
        rate2.innerText = "😃";
        rate3.innerText = "😃";
    } else if (rate === rate4) {
        rate1.innerText = "😃";
        rate2.innerText = "😃";
        rate3.innerText = "😃";
        rate4.innerText = "😃";
    } else {
        rate1.innerText = "😃";
        rate2.innerText = "😃";
        rate3.innerText = "😃";
        rate4.innerText = "😃";
        rate5.innerText = "😃";
    }
}

function init() {
    movieRate.classList.add(SHOWING_CLASS);
    // Mouse Over
    rate1.addEventListener("mouseover", handleRateMouseOver);
    rate2.addEventListener("mouseover", handleRateMouseOver);
    rate3.addEventListener("mouseover", handleRateMouseOver);
    rate4.addEventListener("mouseover", handleRateMouseOver);
    rate5.addEventListener("mouseover", handleRateMouseOver);
    // Mouse Out
    rate1.addEventListener("mouseout", handleRateMouseOut);
    rate2.addEventListener("mouseout", handleRateMouseOut);
    rate3.addEventListener("mouseout", handleRateMouseOut);
    rate4.addEventListener("mouseout", handleRateMouseOut);
    rate5.addEventListener("mouseout", handleRateMouseOut);
    // Click
    rate1.addEventListener("click", handleRateClick);
    rate2.addEventListener("click", handleRateClick);
    rate3.addEventListener("click", handleRateClick);
    rate4.addEventListener("click", handleRateClick);
    rate5.addEventListener("click", handleRateClick);
    resetBtn.addEventListener("click", handleResetBtnClick);
}
init();