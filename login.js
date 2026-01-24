document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form");
    const message = document.getElementById("reg-message");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            // 1. Prevent the page from refreshing immediately
            e.preventDefault();

            // 2. Show the success message
            message.style.display = "block";
            message.innerText = "Successfully Registered! Redirecting...";

            // 3. Update the button to show it's working
            const btn = loginForm.querySelector("button");
            btn.innerText = "Please wait...";
            btn.disabled = true;
            btn.style.opacity = "0.7";

            // 4. Redirect to the homepage after 2 seconds
            setTimeout(() => {
                window.location.href = "index.html"; 
            }, 2000);
        });
    }
});