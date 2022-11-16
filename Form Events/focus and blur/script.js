let valid = document.getElementById("valid");
valid.onblur = function () {
  if (!valid.value.includes("@")) {
    valid.classList.add("invalid");
    document.getElementById("error").innerHTML = "Please enter correct Email";
  }
};

valid.onfocus = function () {
  valid.classList.remove("invalid");
  document.getElementById("error").innerHTML = "";
};
