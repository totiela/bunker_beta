document.addEventListener("DOMContentLoaded", function() {
    var rulesContainer = document.getElementById("rules");
    var questionButton = document.querySelector(".question-button");

    questionButton.addEventListener("click", function() {
        if (rulesContainer.style.display === "none") {
            rulesContainer.style.display = "block";
        } else {
            rulesContainer.style.display = "none";
        }
    });
});