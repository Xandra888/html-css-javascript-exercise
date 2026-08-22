document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you for contacting me!");
});

let projectTitles = document.querySelectorAll(".project-title");

let portfolioSection = document.getElementById("portfolio");

projectTitles.forEach(function(title) {
    title.addEventListener("click", function() {
        portfolioSection.style.backgroundColor = "lightblue";
    });
});

