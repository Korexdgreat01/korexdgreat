const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");

});

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.carousel-image');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const dots = document.querySelectorAll('.dot');
  let current = 0;

  function updateCarousel(index) {
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    images[index].classList.add('active');
    dots[index].classList.add('active');
    current = index;
  }

  prevBtn.addEventListener('click', () => {
    const newIndex = (current - 1 + images.length) % images.length;
    updateCarousel(newIndex);
  });

  nextBtn.addEventListener('click', () => {
    const newIndex = (current + 1) % images.length;
    updateCarousel(newIndex);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'));
      updateCarousel(index);
    });
  });

  setInterval(() => {
    const newIndex = (current + 1) % images.length;
    updateCarousel(newIndex);
  }, 5000);
});
