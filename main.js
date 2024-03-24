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
  const regexString = "/^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+.[a-zA-Z0-9_]+$/";
  if (!regexString.test(document.getElementById("email").value)) {
    //error
    console.log("invalid email");
    return false;
  }
  return true;
}

function validatePosition() {
  const position = document.getElementById("positions");
  if (position.value == "not-selected") {
    //error
    console.log("invalid position");
    return false;
  }
  return true;
}

function validateType() {
  const type = document.querySelectorAll('input[name = "type"]:checked');
  if (type == null) {
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

    const usernameValidation = document.getElementById("username-validation");
    if (validateUsername()) {
      console.log("valid");
      usernameValidation.innerHTML = "";
      usernameValidation.appendChild(document.createTextNode("✅"));
    } else {
      console.log("invalid");
      usernameValidation.innerHTML = "";
      usernameValidation.appendChild(document.createTextNode("Invalid"));
    }

    const emailValidation = document.getElementById("email-validation");
    if (validateEmail()) {
      console.log("valid");
      emailValidation.innerHTML = "";
      emailValidation.appendChild(document.createTextNode("✅"));
    } else {
      console.log("invalid");
      emailValidation.innerHTML = "";
      emailValidation.appendChild(document.createTextNode("Invalid"));
    }

    const positionValidation = document.getElementById("position-validation");
    if (validatePosition()) {
      console.log("valid");
      positionValidation.innerHTML = "";
      positionValidation.appendChild(document.createTextNode("✅"));
    } else {
      console.log("invalid");
      positionValidation.innerHTML = "";
      positionValidation.appendChild(document.createTextNode("Invalid"));
    }

    const typeValidation = document.getElementById("type-validation");
    if (validateType()) {
      console.log("valid");
      typeValidation.innerHTML = "";
      typeValidation.appendChild(document.createTextNode("✅"));
    } else {
      console.log("invalid");
      typeValidation.innerHTML = "";
      typeValidation.appendChild(document.createTextNode("Invalid"));
    }
  });
});
