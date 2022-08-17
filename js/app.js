const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function ActiveBtn() {
  // Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      const currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    });
  }

  // Sections active
  allSections.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if (id) {
      // Remove active from the other buttons
      sectBtns.forEach(btn => {
        btn.classList.remove('active');
      });
      event.target.classList.add('active');

      // Hide other sections
      sections.forEach(section => {
        section.classList.remove('active');
      });

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });

  // Toggle theme
  const themeBtn = document.querySelector('.theme-btn');

  themeBtn.addEventListener('click', () => {
    const element = document.body;
    element.classList.toggle('light-mode');
  });
}

ActiveBtn();
