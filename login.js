document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form");
    const message = document.getElementById("reg-message");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            // 1. Prevent the page from refreshing or redirecting
            e.preventDefault();

            // 2. Show the success message
            message.style.display = "block";
            message.innerText = "Successfully Registered!"; // Removed "Redirecting..."

            // 3. Optional: Clear the input fields so the user can see they are done
            loginForm.reset();

            // 4. Optional: Re-enable the button after a few seconds if they want to sign in again
            const btn = loginForm.querySelector("button");
            btn.innerText = "Sign In";
        });
    }
});