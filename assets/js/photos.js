// Media loader for photos.html
// If a generated manifest (window.MEDIA) exists, use it.
// Otherwise, fall back to window.PHOTOS (legacy manual list).

// Keep legacy variable defined for backwards compatibility
window.PHOTOS = window.PHOTOS || [];

(function initMedia() {
  const isImage = (p) => /\.(png|jpe?g|gif|webp|bmp|svg)$/i.test(p);
  const isVideo = (p) => /\.(mp4|webm|ogg|mov|m4v)$/i.test(p);

  // Choose source list
  const list = Array.isArray(window.MEDIA) && window.MEDIA.length
    ? window.MEDIA
    : (Array.isArray(window.PHOTOS) ? window.PHOTOS : []);

  // Expose derived lists globally for the page script
  window.MEDIA_LIST = list;
  window.MEDIA_IMAGES = list.filter(isImage);
  window.MEDIA_VIDEOS = list.filter(isVideo);
})();


