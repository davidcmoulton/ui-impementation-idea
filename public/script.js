(function () {
  const pageContainer = document.querySelector('.page-container');
  if  (!pageContainer) { return; }

  const rewriteMenuToggleLink = () => {
    pageContainer.querySelector('#fly-out-toggle').setAttribute('href', '#fly-out-menu');
  }

  const handleClick = () => {
    if (!pageContainer.dataset.menuShown) {
      pageContainer.dataset.menuShown = window.matchMedia('(min-width: 700px)').matches ? 'false' : 'true';
    } else {
      pageContainer.dataset.menuShown = pageContainer.dataset.menuShown === 'true' ? 'false' : 'true';
    }
  };

  window.addEventListener('DOMContentLoaded', () => {
    rewriteMenuToggleLink();
    document.querySelector('#fly-out-toggle').addEventListener('click', handleClick);
  });
})();
