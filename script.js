const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.innerHTML = isOpen
            ? '<i class="fa fa-times"></i>'
            : '<i class="fa fa-bars"></i>';
    });

    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.innerHTML = '<i class="fa fa-bars"></i>';
        });
    });
}


document.querySelectorAll(".year").forEach(element => {
    element.textContent = new Date().getFullYear();
});


const form = document.querySelector("#contact-form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        document.querySelector("#form-status").textContent =
            "Thank you! Your form has been validated. Connect an email service to receive messages.";

        form.reset();
    });
}
