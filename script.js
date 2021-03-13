(function () {
  const pageContainer = document.querySelector('.page-container');
  if  (!pageContainer) { return; }

  const handleClick = () => {
    if (!pageContainer.dataset.menuShown) {
      pageContainer.dataset.menuShown = window.matchMedia('(min-width: 700px)').matches ? 'false' : 'true';
    } else {
      pageContainer.dataset.menuShown = pageContainer.dataset.menuShown === 'true' ? 'false' : 'true';
    }
  };

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#fly-out-toggle').addEventListener('click', handleClick);
  });
})();
