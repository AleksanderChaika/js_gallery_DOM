'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  const target = e.target;
  let link;

  if (target.tagName === 'IMG') {
    link = target.closest('a');
  } else if (target.tagName === 'A') {
    link = target;
  }

  if (!link || !link.href) {
    return;
  }

  e.preventDefault();
  largeImg.src = link.href;
});
