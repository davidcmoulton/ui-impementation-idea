window.addEventListener('DOMContentLoaded', () => {
  const pageContainer = document.querySelector('.page-container');
  if (pageContainer) {
    const falseIfWideViewport = () => {
      return window.matchMedia('(min-width: 700px)').matches ? 'false' : 'true';
    };
    document.querySelector('#fly-out-toggle').addEventListener('click', () => {
      if (!pageContainer.dataset.menuShown) {
        pageContainer.dataset.menuShown = falseIfWideViewport();
      } else {
        pageContainer.dataset.menuShown = pageContainer.dataset.menuShown === 'true' ? 'false' : 'true';
      }
    });
  }
});
