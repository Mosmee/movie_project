// URL for user registration
const userUrl = "http://localhost:3000/user";

// Function to add user details to the server
function addUserDetails() {
  // Retrieving input values from the signup form
  const name = $("#nameSignup").val();
  const email = $("#emailSignup").val();
  const phone = $("#phoneSignup").val();
  const password = $("#passwordSignup").val();

  // Making a POST request using Axios to register a new user
  axios
    .post(userUrl, { name, email, phone, password, ratings: [] })
    .then((response) => {
      // Alert upon successful user registration
      alert("User registered successfully");
    })
    .catch((error) => {
      // Log error and alert if user registration is unsuccessful
      console.error("Error adding user", error);
      alert("Registration unsuccessful");
    });
}

// Adding a custom validation method for strong password criteria
$.validator.addMethod(
  "strongPassword",
  function (value, element) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
  }
);
$.validator.addMethod(
  "lettersonly",
  function (value, element) {
    return  /^[a-z ]+$/i.test(value);
  }
);

$(document).ready(function () {
  // Setting up form validation using jQuery Validation Plugin
  $("#signupForm").validate({
    rules: {
      name: {
        required: true,
        lettersonly: true,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        minlength: 10,
        maxlength: 10,
        digits: true,
      },
      // birth:{
      //   max: 2005,
      // },
      password: {
        required: true,
        minlength: 8,
        strongPassword: true, // Using the custom strong password validation method
      },
      cpassword: {
        required: false,
        equalTo: "#passwordSignup",
      },
    },
    messages: {
      name: "Please enter a valid name",
      lettersonly: "Please enter letters only",
      email: {
        required: "Please enter your email",
        email: "Please enter a valid email address",
      },
      phone: {
        required: "Please enter your phone number",
        minlength: "Phone number should be at least 10 digits",
        maxlength: "Phone number should not exceed 10 digits",
        digits: "Please enter only digits",
      },
      // birth:{
      //   max: "Your age is not valid",
      // },
      password: {
        required: "Please enter a password",
        minlength: "Password must be at least 8 characters long",
        strongPassword: "Password must contain at least 8 characters, 1 lowercase letter, 1 uppercase letter, 1 digit, and 1 special character.",
      },
      cpassword: {
        required: "Please confirm your password",
        equalTo: "Passwords do not match",
      },
    },
    submitHandler: function (form) {
      addUserDetails(); // Handling form submission via the addUserDetails function
    },
  });
});
