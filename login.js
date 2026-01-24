document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form");
    const message = document.getElementById("reg-message");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            message.style.display = "block";
            message.innerText = "Successfully Signed In!";

            loginForm.reset();

            const btn = loginForm.querySelector("button");
            btn.innerText = "Sign In";
        });
    }
});