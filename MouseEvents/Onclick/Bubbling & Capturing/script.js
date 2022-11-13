let form = document.getElementById("form");
form.onclick = function (e) {
  e.target.style.backgroundColor = "yellow";

  setTimeout(() => {
    alert("Target =" + e.target.tagName + " and this = " + this.tagName);
    e.target.style.backgroundColor = "";
  }, 0);
};
