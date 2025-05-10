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

header = document.getElementById("header");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.style.backgroundColor = "var(--primary-color)";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// ////////////////////////////////////
// services
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#SERVICES",
    start: "top 40%",
    end: "top 30%",
    scrub: 1,
    markers: false,
  },
});
tl.from(".main-card", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: {
    // amount: .5,
    each: .5,
  },
});
// ////////////////////////////////////
// about
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ABOUT",
    start: "top 60%",
    end: "top 30%",
    scrub: 1,
    markers: false,
    toggleActions: "play none none none",
  },
});
tl2.from(".ces2-leftside", {
  x: -200,
  opacity: 0,
  duration: 1,
  stagger: {
    amount: 1,
  },
});
tl2.from(
  ".ces2-rightside",
  {
    // x: 200,
    scale: 0.7,
    opacity: 0,
    duration: 1,
    stagger: {
      amount: 1,
    },
  },
  "<20%"
);
// ////////////////////////////////////
//blog
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#BLOG",
    start: "top 50%",
    end: "top 30%",
    scrub: 1,
    markers: false,
  },
});
tl3.from(".blog-card", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: {
    amount: 0.2,
  },
});

// Portfolio animation
let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#Portfolio",
    start: "top 60%", // When top of portfolio hits 75% of viewport
    end: "top 10%", // When top of portfolio hits 25% of viewport
    scrub: 1, // Smooth 1-second scrub effect
    toggleActions: "play none none none", // Optional: Ensures animation plays on enter
  },
});

// Card animation with improved stagger
tl4.from(".pro-card", {
  scale: 0.8, // Slightly more visible scale
  opacity: 0,
  duration: 1, // Slightly longer duration
  stagger: {
    amount: .2, // Total time for staggered animation
  },
});
