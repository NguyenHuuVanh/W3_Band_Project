const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modal = $(".ticketmodal");
const btnBuys = $$(".js-buy-tickets");
const iconClose = $(".js-modal-close");

function toggleModal() {
    modal.classList.toggle("hide");
}

for (const btnbuy of btnBuys) {
    btnbuy.addEventListener("click", toggleModal);
    iconClose.addEventListener("click", toggleModal);
}

modal.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) {
        toggleModal();
    }
});

history.scrollRestoration = "manual";

$(document).ready(function() {
    $(this).scrollTop(0);
});