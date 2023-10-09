document.addEventListener("DOMContentLoaded", function() {
    const email = document.getElementById("email");
    const confirmEmail = document.getElementById("confirmEmail");
    const contactForm = document.getElementById("contactForm");

    function validateEmails() {
        if (email.value !== confirmEmail.value) {
            confirmEmail.setCustomValidity("The Email Addresses do not match! Please make sure both email addresses match!")
        } else {
            confirmEmail.setCustomValidity("Thank you for your email. We will respond within 1-3 business days😁");
        }
    }

    email.addEventListener("input", function () {
        validateEmails();
    });

    confirmEmail.addEventListener("input", function () {
        validateEmails();
    });

    contactForm.addEventListener("submit", function(e) {
        if (email.value !== confirmEmail.value) {
            e.preventDefault();
            alert("The Email Addresses do not match! Please make sure both email addresses match!")
        }
    })
});