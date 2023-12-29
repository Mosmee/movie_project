// Retrieving elements by their IDs
const oldPass = document.getElementById('opass');
const newPass = document.getElementById('npassword');

// Retrieving user data from sessionStorage and extracting the password
const data1 = JSON.parse(sessionStorage.getItem('userData'));
const pass = data1[0].password;
console.log(data1);
console.log(pass);

// Function to update the password
function updatePassword() {
  
  if (oldPass.value === pass) { // Checking if the entered old password matches the stored password
    
    axios.patch(`http://localhost:3000/user/${data1[0].id}`, { password: newPass.value })
      .then(response => {
        console.log("Password updated successfully: ", response.data);
      })
      .catch(error => {
        console.error('Error updating Password: ', error);
      });
  } else {
    console.log("wrong password");
    alert("Please enter correct old Password");
  }
}

// Retrieving profile picture data and elements
const pic = data1[0].pic;
const newpic = document.getElementById('modifiedProfilePic');
console.log();

// Function to update the profile picture
function updateProfilePic() {
  console.log("working");
  // Making a PATCH request to update the profile picture using Axios
  axios.patch(`http://localhost:3000/user/${data1[0].id}`, { pic: newpic.src })
    .then(response => {
      alert("Profile pic updated!!");
      console.log("Profile Pic updated successfully: ", response.data);
    })
    .catch(error => {
      console.error('Error updating Profile pic: ', error);
    });
}

// Adding a custom validation method for a strong password
$.validator.addMethod(
  "strongPassword",
  function(value, element){
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
  }
);

$(document).ready(function () {
  // Setting up form validation using the jQuery Validation Plugin for changing passwords
  $("#changePassForm").validate({
    rules: {
      opass: {
        required: true,
      },
      npass: {
        required: true,
        minlength: 8,
        strongPassword: true, // Using the custom strong password validation method
      },
      cpass: {
        required: true,
        equalTo: "#npassword",
      },
    },
    messages: {
      opass: {
        required: "Please enter your old password",
      },
      npass: {
        required: "Please enter a new password",
        minlength: "Password must be at least 8 characters long",
        strongPassword: "Password must contain at least 8 characters, 1 lowercase letter, 1 uppercase letter, 1 digit, and 1 special character.",
      },
      cpass: {
        required: "Please confirm your password",
        equalTo: "Passwords do not match",
      },
    },
    submitHandler: function (form) {
      updatePassword(); // Handling form submission to update the password
    },
  });
});
