const password = document.querySelector(".js-password");
const showHideIcon = document.querySelector(".js-eye-icon");

const eyeIcon = document.querySelector(".js-eye-icon");

showHideIcon.addEventListener("mousedown",
  () => {
    password.setAttribute("type", "text");
    eyeIcon.src = "./images/eye.png";
  }) //this will work onmousedown

showHideIcon.addEventListener("mouseup",
  () => {
    password.setAttribute("type", "password");
    eyeIcon.src = "./images/hidden.png"
  }) //this will work onmouseup

// showHideIcon.onclick = () => {
//   if (password.type === "password") {
//     password.setAttribute("type", "text");
//     eyeIcon.src = "./images/eye.png";
//   } else {
//     password.setAttribute("type", "password");
//     eyeIcon.src = "./images/hidden.png";
//   }
// } //this will work onclick