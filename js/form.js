document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#contact-form");

    if (!form) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nom = document.querySelector("#nom").value.trim();
        const entreprise = document.querySelector("#entreprise").value.trim();
        const telephone = document.querySelector("#telephone").value.trim();
        const projet = document.querySelector("#type-projet").value;
        const besoin = document.querySelector("#besoin").value.trim();

        if (!nom || !telephone || !projet || !besoin) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        const message = `Bonjour, je souhaite vous contacter concernant un projet de site web.

Nom : ${nom}
Entreprise : ${entreprise || "Non renseignée"}
Téléphone / WhatsApp : ${telephone}
Type de projet : ${projet}

Mon besoin :
${besoin}`;

        const whatsappNumber = "22657649938";

        const whatsappUrl =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");
    });

});