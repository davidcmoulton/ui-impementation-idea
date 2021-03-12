// Wait until the DOM's available
window.addEventListener('DOMContentLoaded', () => {
  // Toggle the data attribute to control the menu show / hide when the icon's clicked
  document.querySelector('#fly-out-toggle').addEventListener('click', (e) => {
    const pageContainer = document.querySelector('.page-container');
    const shownFlag = pageContainer.dataset.menuShown;
    switch (shownFlag) {
    case 'true':
      pageContainer.dataset.menuShown = 'false';
      break;
    case 'false':
      pageContainer.dataset.menuShown = 'true';
      break;
    case undefined:
      pageContainer.dataset.menuShown = window.matchMedia('(min-width: 700px)').matches ? 'false' : 'true';
    }
  });
});
