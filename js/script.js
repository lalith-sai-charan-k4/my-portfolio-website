const scrollContainer = document.querySelector('.scroll-container');
const containerWidth = scrollContainer.offsetWidth;

scrollContainer.addEventListener('scroll', () => {
  const scrollPosition = scrollContainer.scrollLeft;
  if (scrollPosition >= containerWidth * 2) { // Assuming two clones
    scrollContainer.scrollTo(0, 0);
  }
});

const nav = document.getElementById('icon');
const navbar = document.getElementById('navbar');
console.log(nav);

// Add a click event listener to the element
nav.addEventListener('click', () => {
  console.log('clicked')
  navbar.classList.toggle('active')
  // nav.classList.toggle('active');
  // console.log(nav.classList)
});
