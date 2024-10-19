const afficherPopup = () => {
    let popupBackground = document.querySelector(".popupBackground");
    popupBackground.classList.add('active');
}

const cacherPopup = () => {
    let popupBackground = document.querySelector(".popupBackground");
    popupBackground.classList.remove("active");
}

const initAddEventListenerPopup = () => {
    btnPartage = document.querySelector(".zonePartage button");
    let popupBackground = document.querySelector(".popupBackground");
    btnPartage.addEventListener("click", () => {
        afficherPopup();
    })
    popupBackground.addEventListener('click', (event) => {
        if (event.target.classList.contains('popupBackground')) {
            cacherPopup();
        }
    })
}