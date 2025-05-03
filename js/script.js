const menu = document.getElementById("menu");
const ulMobile = document.getElementById("ulMobile");

menu.onclick = () => {
  if (ulMobile.style.height === "0px" || ulMobile.style.height === "") {
    ulMobile.style.height = "500px";
  } else {
    ulMobile.style.height = "0px";
  }
};
let scrollToTop = document.getElementById("scrollToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 500) {
    scrollToTop.style.display = "block";
  }
  if (window.scrollY < 500) {
    scrollToTop.style.display = "none";
  }
});
function scrollTooToop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
