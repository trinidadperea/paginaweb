const images = document.querySelectorAll('.carousel-image');
let index = 0;

    function showImage() {
        images.forEach(image => image.style.display = 'none');
        index = (index + 1) % images.length;
        images[index].style.display = 'block';
        setTimeout(showImage, 3000); // Cambiar la imagen cada 3 segundos (3000 milisegundos)
    }
    showImage(); // Iniciar el carrusel al cargar la página
