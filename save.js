//Control save button

const movieList = document.querySelector(".js-movieList");
const nothingInList = document.querySelector(".js-nothingInList");

const SAVES_LS = "saves";

let saves = [];

function isNothingInList() {
    const loadSaves = localStorage.getItem(SAVES_LS);
    if (loadSaves === "[]") {
        nothingInList.classList.add(SHOWING_CLASS);
    } else if (loadSaves !== null) {
        nothingInList.classList.remove(SHOWING_CLASS);
    } else {
        nothingInList.classList.add(SHOWING_CLASS);
    }
}

function deleteSaves(event) {
    const li = event.target.parentNode;
    movieList.removeChild(li);
    const cleanSaves = saves.filter(
        function(save) {
            return save.id !== parseInt(li.id);
        }
    );
    saves = cleanSaves;
    saveSaves(saves);
    isNothingInList();
}

function handleLinkClick(event) {
    const url = event.target.innerText;
    if (url !== "No link") {
        window.open(url);
    } else {
        alert("No link!");
    }
}

function saveSaves() {
    localStorage.setItem(SAVES_LS, JSON.stringify(saves));
}

function handleSaveBtn(event) {
    const name = nameInput.value;
    const rate = rateFinal1.innerText + rateFinal2.innerText + rateFinal3.innerText + rateFinal4.innerText + rateFinal5.innerText;
    const review = reviewInput.value;
    const link = linkInput.value;
    const id = saves.length + 1;
    const saveObj = {
        name,
        rate,
        review,
        link,
        id
    };
    if (name === "") {
        alert("Type a movie's name!");
    } else {
        paintSaves(saveObj);
        resetInformation();
    }
}

function paintSaves(obj) {
    const li = document.createElement("li");
    const nameH2 = document.createElement("h2");
    const rateSpan = document.createElement("span");
    const reviewH4 = document.createElement("h4");
    const linkP = document.createElement("p");
    const delBtn = document.createElement("button");
    const id = saves.length + 1;
    obj.id = id;
    nameH2.innerText = obj.name;
    rateSpan.innerText = obj.rate;
    if (obj.review !== "") {
        reviewH4.innerText = obj.review;
    } else {
        reviewH4.innerText = "No review";
    }
    if (obj.link !== "") {
        linkP.innerText = obj.link;
    } else {
        linkP.innerText = "No link";
    }
    linkP.classList.add(`js-url${id}`);
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteSaves);
    li.appendChild(nameH2);
    li.appendChild(rateSpan);
    li.appendChild(reviewH4);
    li.appendChild(linkP);
    li.appendChild(delBtn);
    li.id = id;
    movieList.appendChild(li);
    saves.push(obj);
    saveSaves();
    const numOfLink = movieList.getElementsByTagName("p").length;
    for (let i = 0; i < numOfLink; i++) {
        const id = i + 1;
        const linkClass = movieList.querySelector(`.js-url${id}`);
        linkClass.addEventListener("click", handleLinkClick);
    }
    isNothingInList();
}


function loadSaves() {
    const loadSaves = localStorage.getItem(SAVES_LS);
    if (loadSaves === "[]") {
        nothingInList.classList.add(SHOWING_CLASS);
    } else if (loadSaves !== null) {
        const parsedSaves = JSON.parse(loadSaves);
        parsedSaves.forEach(
            function(save) {
                paintSaves(save);
            }
        );
        nothingInList.classList.remove(SHOWING_CLASS);
    } else {
        nothingInList.classList.add(SHOWING_CLASS);
    }
}

function init() {
    loadSaves();
    saveBtn.addEventListener("click", handleSaveBtn);
}
init();