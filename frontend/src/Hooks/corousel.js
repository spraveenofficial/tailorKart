const name = [
  {
    id: 1,
    title: "Home",
    link: "/",
    image: "./images/home.png",
  },
  {
    id: 2,
    title: "Men",
    link: "/",
    image: "./images/men.png",
  },
  {
    id: 3,
    title: "Women",
    link: "/",
    image: "./images/women.png",
  },
  {
    id: 4,
    title: "Kids",
    link: "/",
    image: "./images/kids.png",
  },
  {
    id: 5,
    title: "Beauty",
    link: "/",
    image: "./images/beauty.png",
  },
  {
    id: 6,
    title: "Footware",
    link: "/",
    image: "./images/footwear.png",
  },
  {
    id: 7,
    title: "Gadgets",
    link: "/",
    image: "./images/gadgets.png",
  },
];

// Hook for items for the Home Corousel
const useCorousel = () => {
  return {
    items: name,
  };
};

// Hook for setting aka Next & Previous for Home Corousel
const setCorousel = () => {
  let gap = 16;
  const nextFunction = () => {
    const carousel = document.querySelector(".carousel-main"),
      content = document.querySelector(".carousel-content"),
      next = document.querySelector(".carousel-next"),
      prev = document.querySelector(".carousel-prev");

    let width = carousel.offsetWidth;
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
      prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.style.display = "none";
    }
    window.addEventListener("resize", (e) => (width = carousel.offsetWidth));
  };
  const prevFunction = () => {
    const carousel = document.querySelector(".carousel-main"),
      content = document.querySelector(".carousel-content"),
      next = document.querySelector(".carousel-next"),
      prev = document.querySelector(".carousel-prev");
    let width = carousel.offsetWidth;
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
      prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.style.display = "flex";
    }
    window.addEventListener("resize", (e) => (width = carousel.offsetWidth));
  };
  return { next: nextFunction, prev: prevFunction };
};
export { useCorousel, setCorousel };
