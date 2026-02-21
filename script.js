let currentPage = 1;
const totalPages = 3;

/* Navegação */

function vibrateLight() {
    if (navigator.vibrate) {
        navigator.vibrate(20);
    }
}

function showPage(pageNumber) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("p" + pageNumber).classList.add("active");
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
        vibrateLight();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
        vibrateLight();
    }
}

/* Loader */

window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

/* Contagem regressiva */

const countdownElement = document.getElementById("countdown");
const eventDate = new Date("2026-03-01T09:00:00");

function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
        countdownElement.innerHTML = "O grande dia chegou.";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownElement.innerHTML =
        days + " dias " +
        hours + "h " +
        minutes + "m " +
        seconds + "s";
}

setInterval(updateCountdown, 1000);
updateCountdown();