var slideIndex = 1;
slideImg(slideIndex);

function changeImage(n) {
  slideImg((slideIndex = slideIndex + n));
}

function slideImg(n) {
  var i;
  var imgs = document.querySelectorAll(".mySlides");
  if (n > imgs.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = imgs.length;
  }
  for (i = 0; i < imgs.length; i++) {
    imgs[i].style.transition = "opacity 1s ease-in-out";
    imgs[i].style.opacity = 0;
  }
  imgs[slideIndex - 1].style.opacity = 1;
}
setInterval(function () {
  changeImage(1);
}, 5000);

const buttons = document.querySelectorAll(".accordeon-dropdown");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const contentParagraph = button.querySelector(
      ".accordeon-content-paragraph"
    );
    const contentArrow = button.querySelector(".accordeon-content-arrow");

    buttons.forEach((otherButton) => {
      if (otherButton !== button) {
        const otherContentParagraph = otherButton.querySelector(
          ".accordeon-content-paragraph"
        );
        const otherContentArrow = otherButton.querySelector(
          ".accordeon-content-arrow"
        );

        otherContentParagraph.classList.remove("open");
        otherContentArrow.classList.remove("rotate");
      }
    });

    contentParagraph.classList.toggle("open");
    contentArrow.classList.toggle("rotate");
  });
});

const dropButton = document.querySelector(".header-sidebar");
dropButton.addEventListener("click", () => {
  const openDrop = document.querySelector(".header-siderbar-dropdown");
  const openSidebar = document.querySelector(".header-siderbar-dropdown-button");
  openDrop.classList.toggle("active");
  openSidebar.classList.toggle("siderbar-active");
});
