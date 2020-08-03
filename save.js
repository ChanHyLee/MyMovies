//Control save button

const movieList = document.querySelector(".js-movieList");
const nothingInList = document.querySelector(".js-nothingInList");
const buttons = movieList.getElementsByTagName("button");

const SAVES_LS = "saves";

let saves = [];
let rememberId;

function handleEditSave(event) {
    const name = nameInput.value;
    const rate = `${
        rateFinal1.innerText
    } ${
        rateFinal2.innerText
    } ${
        rateFinal3.innerText
    } ${
        rateFinal4.innerText
    } ${
        rateFinal5.innerText
    }`;
    const review = reviewInput.value;
    const link = linkInput.value;
    const li = document.getElementById(`${rememberId}`);
    if (name === "") {
        alert("Type a movie's name!");
    } else {
        li.getElementsByTagName("h2")[0].innerText = name;
        li.getElementsByTagName("span")[0].innerText = rate;
        if (review !== "") {
            li.getElementsByTagName("h4")[0].innerText = review;
        } else {
            li.getElementsByTagName("h4")[0].innerText = "No review";
        }
        if (link !== "") {
            li.getElementsByTagName("p")[0].innerText = link;
        } else {
            li.getElementsByTagName("p")[0].innerText = "No link";
        }
        const loadSaves = JSON.parse(localStorage.getItem(SAVES_LS));
        for (let i = 0; i < loadSaves.length; i++) {
            if (Number(loadSaves[i].id) === rememberId) {
                loadSaves[i].name = name;
                loadSaves[i].rate = rate;
                loadSaves[i].review = review;
                loadSaves[i].link = link;
            }
        }
        saves = loadSaves;
        saveSaves();
        resetInformation();
    }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add(SHOWING_CLASS);
    }
}

function handleEditBtn(event) {
    const li = event.target.parentNode;
    rememberId = Number(li.id);
    const name = li.getElementsByTagName("h2")[0].innerText;
    const rate = li.getElementsByTagName("span")[0].innerText;
    const rateArray = rate.split(" ");
    const review = li.getElementsByTagName("h4")[0].innerText;
    const link = li.getElementsByTagName("p")[0].innerText;
    nameInput.value = name;
    rateFinal1.innerText = rateArray[0];
    rateFinal2.innerText = rateArray[1];
    rateFinal3.innerText = rateArray[2];
    rateFinal4.innerText = rateArray[3];
    rateFinal5.innerText = rateArray[4];
    if (review !== "No review") {
        reviewInput.value = review;
    } else {
        reviewInput.value = "";
    }
    if (link !== "No link") {
        linkInput.value = link;
    } else {
        linkInput.value = "";
    }
    saveBtn.classList.remove(SHOWING_CLASS);
    editBtn.classList.add(SHOWING_CLASS);
    editBtn.addEventListener("click", handleEditSave);
    movieRate.classList.remove(SHOWING_CLASS);
    rateFinal.classList.add(SHOWING_CLASS);
    rateResetBtn.classList.add(SHOWING_CLASS);
    addInformation.classList.remove(SHOWING_CLASS);
    information.classList.add(SHOWING_CLASS);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove(SHOWING_CLASS);
    }
}

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
    saveSaves();
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
    const rate = `${
        rateFinal1.innerText
    } ${
        rateFinal2.innerText
    } ${
        rateFinal3.innerText
    } ${
        rateFinal4.innerText
    } ${
        rateFinal5.innerText
    }`;
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
    const editBtn = document.createElement("button");
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
    linkP.addEventListener("click", handleLinkClick);
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteSaves);
    delBtn.classList.add(SHOWING_CLASS);
    editBtn.innerText = "✏";
    editBtn.addEventListener("click", handleEditBtn);
    editBtn.classList.add("editBtn");
    editBtn.classList.add(SHOWING_CLASS);
    li.appendChild(nameH2);
    li.appendChild(rateSpan);
    li.appendChild(reviewH4);
    li.appendChild(linkP);
    li.appendChild(delBtn);
    li.appendChild(editBtn);
    li.id = id;
    movieList.appendChild(li);
    saves.push(obj);
    saveSaves();
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
