window.addEventListener("scroll", () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  const scrolled = window.scrollY;

  if (Math.round(scrolled) === maxScroll) {
    alert("You've reached the end of the page");
  }
  console.log(scrolled);
});
