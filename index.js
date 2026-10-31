const stage = document.querySelector(".stage");
const performanceSign = document.querySelector("#performanceSign");
const birthdaySong = document.querySelector("#birthdaySong");
const birthdayCard = document.querySelector("#birthdayCard");
const showCardButton = document.querySelector("#showCard");
const hideCardButton = document.querySelector("#hideCard");

function startParty() {
    if (stage.classList.contains("party-started")) {
        return;
    }

    stage.classList.add("party-started");
    birthdayCard.classList.add("card-visible");
    birthdayCard.setAttribute("aria-hidden", "false");
    birthdaySong.play().catch((error) => {
        console.error("The birthday song could not be played.", error);
    });
}

function hideCard() {
    birthdayCard.classList.remove("card-visible");
    birthdayCard.setAttribute("aria-hidden", "true");
}

function showCard() {
    birthdayCard.classList.add("card-visible");
    birthdayCard.setAttribute("aria-hidden", "false");
}

performanceSign.addEventListener("click", startParty);
performanceSign.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        startParty();
    }
});
hideCardButton.addEventListener("click", hideCard);
showCardButton.addEventListener("click", showCard);
