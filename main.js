function validateRollNumber() {
    var rollnoInput = document.getElementById("rollno");
    var rollNumber = rollnoInput.value;

    if (rollNumber.length !== 7) {
        rollnoInput.classList.add("error-outline");
        alert("Please enter a valid Roll Number.");
    } else {
        rollnoInput.classList.remove("error-outline");
        redirectToVideo();
    }
}

function redirectToVideo() {
    window.location.href = "https://indiagov.github.io/Mahagov_12th_Result/";
}
