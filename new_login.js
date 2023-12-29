// URL for user data
const uUrl = "http://localhost:3000/user";

$(document).ready(function () {
  // Form validation using jQuery Validation Plugin
  $('#loginForm').validate({
    rules: {
      emailLogin: {
        required: true,
        email: true
      },
      passwordLogin: {
        required: true
      }
    },
    messages: {
      emailLogin: {
        required: 'Please enter your email',
        email: 'Please enter a valid email address'
      },
      passwordLogin: {
        required: 'Please enter your password'
      }
    },
    // Handling form submission
    submitHandler: function (form) {
      // Retrieve values from the form
      const username = $('#emailLogin').val();
      const password = $('#passwordLogin').val();

      // Using Axios to make a GET request with user credentials
      axios.get(`${uUrl}?email=${username}&password=${password}`)
        .then(res => {
          if (res.data.length > 0) {
            // If user data is retrieved, store it in sessionStorage
            const userData = res.data;
            sessionStorage.setItem("userData", JSON.stringify(userData));
            console.log(userData);
            // Redirect to index.html upon successful login
            window.location.href = "index.html";
          } else {
            // If no user data is found, display an alert for invalid credentials
            alert("Invalid username or password");
          }
        })
        .catch(e => {
          // Log any errors that occur during the GET request
          console.log("error", e);
        });
    }
  });
});
