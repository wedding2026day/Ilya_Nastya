// ОТКРЫТИЕ САЙТА ПО НАЖАТИЮ НА СТАРТОВОЕ ФОТО

const startScreen = document.getElementById('startScreen');
const openSite = document.getElementById('openSite');
const siteContent = document.getElementById('siteContent');

openSite.addEventListener('click', function () {
  siteContent.style.display = 'block';

  setTimeout(() => {
    siteContent.classList.add('show');
    startScreen.classList.add('hide');
    revealBlocks();
  }, 50);
});


// ЛЕГКАЯ АНИМАЦИЯ БЛОКОВ ПРИ ПРОКРУТКЕ

function revealBlocks() {
  const blocks = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  blocks.forEach(function (block) {
    observer.observe(block);
  });
}