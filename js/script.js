

// Get the button
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
// Show the button dark-mode
if (isDarkMode) {
  body.classList.add('dark-mode');
  darkModeToggle.checked = true;
}
darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  }
  else {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled')
  }
});


// Get the button
let scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button with animation after scrolling 200px
window.onscroll = function () {


  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");


  }
};



// Scroll to top when the button is clicked
scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
};



