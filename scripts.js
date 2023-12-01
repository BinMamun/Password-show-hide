const password = document.querySelector(".js-password");
const showHideIcon = document.querySelector(".js-eye-icon");

const eyeIcon = document.querySelector(".js-eye-icon");

showHideIcon.addEventListener("mousedown",
  () => {
    password.setAttribute("type", "text");
    eyeIcon.src = "./images/eye.png"
  })

showHideIcon.addEventListener("mouseup",
  () => {
    password.setAttribute("type", "password");
    eyeIcon.src = "./images/hidden.png"
  })
