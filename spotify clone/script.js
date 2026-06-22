// header color change

const rightPanel = document.querySelector(".right");
const header = document.querySelector(".header");


rightPanel.addEventListener("scroll",() => {
    if(rightPanel.scrollTop > 10) {
    header.classList.add('header-scrolled');
} else {
    header.classList.remove('header-scrolled')
}
})



// turn btn
document.querySelectorAll('.songs-carousel').forEach(carousel => {

    const row = carousel.querySelector('.songs-cards');
    const TurnBtnLeft = carousel.querySelector('.turn-btn-left');
    const TurnBtnRight = carousel.querySelector('.turn-btn-right');

    function getMaxScroll() {
        return row.scrollWidth - row.clientWidth;
    }

    function updateBtn() {
        if (row.scrollLeft <= 0) {
            TurnBtnLeft.style.opacity = "0";
            TurnBtnLeft.style.pointerEvents = "none";
        } else {
            TurnBtnLeft.style.opacity = "";
            TurnBtnLeft.style.pointerEvents = "auto";
        }

        if (row.scrollLeft >= getMaxScroll()) {
            TurnBtnRight.style.opacity = "0";
            TurnBtnRight.style.pointerEvents = "none";
        } else {
            TurnBtnRight.style.opacity = "";
            TurnBtnRight.style.pointerEvents = "auto";
        }
    }

    TurnBtnLeft.addEventListener("click", () => {
        row.scrollLeft -= 400;
        setTimeout(updateBtn, 300);
    });

    TurnBtnRight.addEventListener("click", () => {
        row.scrollLeft += 400;
        setTimeout(updateBtn, 300);
    });

    row.addEventListener("scroll", updateBtn);
    updateBtn();
});