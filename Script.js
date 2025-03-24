// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    
    // Display a dynamic greeting based on time of day
    function displayGreeting() {
        let greeting = document.createElement("h2");
        let hour = new Date().getHours();

        if (hour < 12) {
            greeting.textContent = "Good Morning! ☀️";
        } else if (hour < 18) {
            greeting.textContent = "Good Afternoon! 🌤️";
        } else {
            greeting.textContent = "Good Evening! 🌙";
        }

        document.body.prepend(greeting);
    }

    displayGreeting();

    // Create a button to toggle dark/light mode
    let themeButton = document.createElement("button");
    themeButton.textContent = "Toggle Dark Mode";
    themeButton.style.margin = "20px";
    document.body.appendChild(themeButton);

    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Create a real-time clock
    let clock = document.createElement("h3");
    clock.id = "clock";
    document.body.appendChild(clock);

    function updateClock() {
        let now = new Date();
        clock.textContent = now.toLocaleTimeString();
    }

    setInterval(updateClock, 1000);
    updateClock(); // Initial call to display clock immediately

});

// CSS Styles for Dark Mode
let style = document.createElement("style");
style.textContent = `
    .dark-mode {
        background-color: #
