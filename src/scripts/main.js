(function () {
  'use strict';

  const largeImg = document.querySelector('#largeImg');
  const thumbs = document.querySelector('#thumbs');

  if (!thumbs || !largeImg) {
    return;
  }

  thumbs.addEventListener('click', (e) => {
    const target = e.target;
    let link;
    let imgElement;

    if (target.tagName === 'IMG') {
      imgElement = target;
      link = target.closest('a');
    } else if (target.tagName === 'A') {
      link = target;
      imgElement = target.querySelector('img');
    }

    if (!link || !link.href) {
      return;
    }

    e.preventDefault();
    largeImg.src = link.href;

    if (imgElement && imgElement.alt) {
      largeImg.alt = imgElement.alt;
    } else {
      largeImg.alt = 'Enlarged image from gallery';
    }
  });
})();
