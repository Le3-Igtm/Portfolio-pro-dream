const WHATSAPP_NUMBER = "22657649938";

function openWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
}


document.addEventListener("DOMContentLoaded", () => {

    const whatsappButtons = document.querySelectorAll("[data-whatsapp]");

    whatsappButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const message = button.dataset.whatsapp;

            if (!message) {
                return;
            }

            openWhatsApp(message);
        });

    });

});