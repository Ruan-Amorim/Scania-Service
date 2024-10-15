
window.flip = function flip(card, front1, back2) {
    let item = window.document.getElementById(card);
    let front = window.document.getElementById(front1);
    let back = window.document.getElementById(back2);
    if (item.classList.contains("flip")) {
        item.classList.remove("flip");
        front.style.zIndex = 0;
        back.style.zIndex = 10;
    } else {
        item.classList.add("flip");
        front.style.zIndex = 10;
        back.style.zIndex = 0;
    }
}