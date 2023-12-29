let is_login;
let user_name;
const userData = JSON.parse(sessionStorage.getItem('userData'));
document.addEventListener('DOMContentLoaded', function () {

    updateSigninButton();
})

function updateSigninButton() {
    const signInButton = document.getElementById('sign_in_button');
    const updateProfile = document.getElementById('user_update');
    const willHide = document.getElementById('single_modle');
    const userNameDisplay = document.getElementById('user_');
    const logtowatch = document.getElementById('single_modle');
    const downloadfun = document.getElementById('download_btn');
    if (userData) {
        console.log(userData);
        signInButton.innerText = "Logout";
        signInButton.onclick = signOut;
        updateProfile.onclick = UpdatedPr;
        // console.log(userData[0].name);
        // const userName = userData[0].name;
        // user_name = userData[0].name;
        willHide.style.display = "none";
        // is_login = true;
    } else {
        signInButton.innerText = 'sign_in';
        signInButton.onclick = goTosign_in;
        updateProfile.onclick = goTosign_in;
        logtowatch.onclick = goTosign_in;
        downloadfun.style.display = "none";
        // is_login = false;
    }

}
function goTosign_in() {
    window.location.href = "login_signup.html";
}
function signOut() {
    window.sessionStorage.clear();
    window.location.reload(true);
    window.location.replace('index.html');
    windows.history.pushState(null, null, window.location.href);
    windows.addEventListners('popstate', function () {
        window.history.pushState(null, null, window.location.href);
    })
}
function UpdatedPr() {
    window.location.href = "new_updates.html";
}

// if(userData){
//     userr = userData[0].name;
//     userNameDisplay.innerText = userr;
// }

// if (userData) {
//     (function () {
//         var timeoutSession;
//         document.addEventListener('mousemove', function (e) {
//             clearTimeout(timeoutSession);
//             timeoutSession = setTimeout(function () {
//                 alert('Session Expired Please login again');
//                 // window.location.href="index.html";
//                 window.sessionStorage.clear();
//                 window.location.reload(true);
//                 window.location.replace('index.html');
//                 windows.history.pushState(null, null, window.location.href);
//                 windows.addEventListners('popstate', function () {
//                     window.history.pushState(null, null, window.location.href);
//                 })
//             }, 20000);
//         }, true);
//     })();
// }