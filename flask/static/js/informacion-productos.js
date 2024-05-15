document.addEventListener("DOMContentLoaded", ()=>{
    const fotoProducto = document.getElementById("fotoProducto");
    const anchoInicial = 640; //ancho inicial 
    const altoInicial = 480; //alto incial

    //tamaño inicial 
    fotoProducto.width = anchoInicial;
    fotoProducto.height = altoInicial;

    const originalWidth = fotoProducto.width;
    const originalHeight = fotoProducto.height;

    //al hacer click en la imagen
    fotoProducto.addEventListener("click", () => {
        if (fotoProducto.width === originalWidth) {
            //dado que está en tamaño general, se expande al hacer click
            fotoProducto.width = 1280;
            fotoProducto.height = 1024;
        } else {
            //Si la imagen se encuentra expandida, con un click vuelve al tamaño original
            fotoProducto.width = originalWidth;
            fotoProducto.height = originalHeight;
        }
    });

});
