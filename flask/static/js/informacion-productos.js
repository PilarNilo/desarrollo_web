document.addEventListener("DOMContentLoaded", ()=>{
    const fotoProducto = document.getElementById("fotoProducto");
    const anchoInicial = 640; // Ancho inicial 
    const altoInicial = 480; // Alto inicial

    // tamaño inicial 
    fotoProducto.width = anchoInicial;
    fotoProducto.height = altoInicial;

    const originalWidth = fotoProducto.width;
    const originalHeight = fotoProducto.height;

    // Al hacer clic en la imagen
    fotoProducto.addEventListener("click", () => {
        if (fotoProducto.width === originalWidth) {
            // Si la imagen está en su tamaño original, la agrandamos
            fotoProducto.width = 1280;
            fotoProducto.height = 1024;
        } else {
            // Si la imagen está agrandada, la volvemos a su tamaño original
            fotoProducto.width = originalWidth;
            fotoProducto.height = originalHeight;
        }
    });

});
