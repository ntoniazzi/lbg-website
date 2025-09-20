var images = document.querySelectorAll('img[loading]');
for (var i = 0; i < images.length; i++) {
    if (images[i].complete) {
        images[i].classList.add('is-loaded');
    } else {
        images[i].addEventListener('load', function () {
            this.classList.add('is-loaded');
        }, false);
    }
}