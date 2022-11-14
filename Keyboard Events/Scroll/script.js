window.addEventListener("scroll", () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  const scrolled = window.scrollY;

  if (Math.round(scrolled) === maxScroll) {
    alert("You've reached the end of the page");
  }
  console.log(scrolled);
});

function scrollWin1() {
  scrollTo({ top: 0, behavior: "smooth" });
}

function scrollWin2() {
  scrollTo({ top: 1000, behavior: "smooth" });
}

document.getElementById("btn1").addEventListener("click", scrollWin2);
document.getElementById("btn2").addEventListener("click", scrollWin1);
