function validateUsername() {
  const username = document.getElementById("username");
  if (username.value.length < 6 || username.value.length > 10) {
    //error
    console.log("Username must be between 6 and 10 in length");
    return false;
  }
  return true;
}

function validateEmail() {
  const regexString = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!document.getElementById("email").value.match(regexString)) {
    //error
    console.log("invalid email");
    return false;
  }
  return true;
}

function validatePosition() {
  const position = document.getElementById("position");
  if (position.value == "Default") {
    //error
    console.log("invalid position");
    return false;
  }
  return true;
}

function validateType() {
  const type = document.querySelectorAll('input[name = "type"]:checked');
  console.log(type);
  if (type.length === 0) {
    //error

    console.log("type must be selected");
    return false;
  }
  return true;
}

function validateSubmit() {
  if (
    !validateUsername() ||
    !validateEmail() ||
    !validatePosition() ||
    !validateType()
  ) {
    //prevent submit
    console.log("prevent submit");
    return false;
  }
  return true;
}

window.addEventListener("load", function (event) {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username")
    const usernameValidation = document.getElementById("username-validation");
    if (validateUsername()) {
      console.log("valid");
      usernameValidation.innerHTML = "";
      username.classList.remove("warning-input")
      usernameValidation.appendChild(document.createTextNode("✅"));
    } else {
      console.log("invalid");
      usernameValidation.innerHTML = "";
      username.classList.add("warning-input")
      usernameValidation.appendChild(document.createTextNode("Username should be >=6 and <= 10"));
    }

    const emailValidation = document.getElementById("email-validation");
    const email = document.getElementById("email")
    if (validateEmail()) {
      console.log("valid");
      email.classList.remove("warning-input")
      emailValidation.innerHTML = "";
      emailValidation.appendChild(document.createTextNode("✅"));
    } else {
      console.log("invalid");
      email.classList.add("warning-input")
      emailValidation.style = ""
      emailValidation.innerHTML = "";
      emailValidation.appendChild(document.createTextNode("Not a vaild e-mail address"));
    }

    const positionValidation = document.getElementById("position-validation");
    const position = document.getElementById("position")

    if (validatePosition()) {
      console.log("valid");
      position.classList.remove("warning-input")
      positionValidation.innerHTML = "";
      positionValidation.appendChild(document.createTextNode("✅"));
    } else {
      console.log("invalid");
      position.classList.add("warning-input")
      positionValidation.innerHTML = "";
      positionValidation.appendChild(document.createTextNode("You must select a position"));
    }

    const typeValidation = document.getElementById("type-validation");
    if (validateType()) {
      console.log("valid");
      typeValidation.innerHTML = "";
      typeValidation.appendChild(document.createTextNode("✅"));
    } else {
      console.log("invalid");
      typeValidation.innerHTML = "";
      typeValidation.appendChild(document.createTextNode("You must select a type"));
    }
  });
});
