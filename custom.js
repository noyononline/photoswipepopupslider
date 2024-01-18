let lightbox = new PhotoSwipeLightbox({
    gallery: '.popup-gallery',
    children: 'a',
    // dynamic import is not supported in UMD version
    pswpModule: PhotoSwipe 
  });
  lightbox.init();