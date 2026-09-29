var form = document.getElementById("enrollmentForm");

var course = document.getElementById("course");
var majorDiv = document.getElementById("majorDiv");


// Show Major if BSIT is selected
course.addEventListener("change", function() {

    if (course.value == "BSIT") {

        majorDiv.style.display = "block";

    } else {

        majorDiv.style.display = "none";
        document.getElementById("major").value = "";

    }

    document.getElementById("courseError").textContent = "";
});


// Clear error messages when typing
var inputs = document.querySelectorAll("input, select");

inputs.forEach(function(input) {

    input.addEventListener("input", function() {

        var error = document.getElementById(input.id + "Error");

        if (error) {
            error.textContent = "";
        }

    });


    input.addEventListener("change", function() {

        var error = document.getElementById(input.id + "Error");

        if (error) {
            error.textContent = "";
        }

    });

});


// Submit form
form.addEventListener("submit", function(event) {

    event.preventDefault();


    // Get values
    var studentId = document.getElementById("studentId").value.trim();
    var prefix = document.getElementById("prefix").value.trim();
    var firstName = document.getElementById("firstName").value.trim();
    var middleName = document.getElementById("middleName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var suffix = document.getElementById("suffix").value.trim();
    var email = document.getElementById("email").value.trim();
    var courseValue = document.getElementById("course").value;
    var major = document.getElementById("major").value;
    var year = document.getElementById("year").value;

    var valid = true;


    // Student ID
    if (studentId == "") {

        document.getElementById("studentIdError").textContent =
            "Student ID is required.";

        valid = false;

    } else if (studentId.length < 5) {

        document.getElementById("studentIdError").textContent =
            "Student ID must be at least 5 characters.";

        valid = false;
    }


    // Prefix
    if (prefix != "" && prefix.length < 2) {

        document.getElementById("prefixError").textContent =
            "Prefix must be at least 2 characters.";

        valid = false;
    }


    // First Name
    if (firstName == "") {

        document.getElementById("firstNameError").textContent =
            "First Name is required.";

        valid = false;

    } else if (firstName.length < 3) {

        document.getElementById("firstNameError").textContent =
            "First Name must be at least 3 characters.";

        valid = false;
    }


    // Middle Name
    if (middleName != "" && middleName.length < 2) {

        document.getElementById("middleNameError").textContent =
            "Middle Name must be at least 2 characters.";

        valid = false;
    }


    // Last Name
    if (lastName == "") {

        document.getElementById("lastNameError").textContent =
            "Last Name is required.";

        valid = false;

    } else if (lastName.length < 2) {

        document.getElementById("lastNameError").textContent =
            "Last Name must be at least 2 characters.";

        valid = false;
    }


    // Suffix
    if (suffix != "" && suffix.length < 2) {

        document.getElementById("suffixError").textContent =
            "Suffix must be at least 2 characters.";

        valid = false;
    }


    // Email
    if (email == "") {

        document.getElementById("emailError").textContent =
            "Email is required.";

        valid = false;

    } else if (!email.includes("@")) {

        document.getElementById("emailError").textContent =
            "Please enter a valid email.";

        valid = false;
    }


    // Course
    if (courseValue == "") {

        document.getElementById("courseError").textContent =
            "Please select a course.";

        valid = false;
    }


    // Major
    if (courseValue == "BSIT" && major == "") {

        document.getElementById("majorError").textContent =
            "Please select a major.";

        valid = false;
    }


    // Year Level
    if (year == "") {

        document.getElementById("yearError").textContent =
            "Please select a year level.";

        valid = false;
    }


    // Stop if there are errors
    if (valid == false) {
        return;
    }


    // Show success message
    document.getElementById("successMessage").textContent =
        "Student enrolled successfully!";


    // Add data to table
    var table = document.getElementById("studentData");

    var row = table.insertRow();

    row.insertCell(0).textContent = studentId;
    row.insertCell(1).textContent = prefix;
    row.insertCell(2).textContent = firstName;
    row.insertCell(3).textContent = middleName;
    row.insertCell(4).textContent = lastName;
    row.insertCell(5).textContent = suffix;
    row.insertCell(6).textContent = email;
    row.insertCell(7).textContent = courseValue;
    row.insertCell(8).textContent = major;
    row.insertCell(9).textContent = year;


    // Clear form
    form.reset();

    // Hide Major
    majorDiv.style.display = "none";

});