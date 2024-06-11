// document.addEventListener("DOMContentLoaded", ()=>{
//     const fotoProducto = document.getElementById("fotoProducto");
//     const anchoInicial = 640; //ancho inicial 
//     const altoInicial = 480; //alto incial

//     //tamaño inicial 
//     fotoProducto.width = anchoInicial;
//     fotoProducto.height = altoInicial;

//     const originalWidth = fotoProducto.width;
//     const originalHeight = fotoProducto.height;

//     //al hacer click en la imagen
//     fotoProducto.addEventListener("click", () => {
//         if (fotoProducto.width === originalWidth) {
//             //dado que está en tamaño general, se expande al hacer click
//             fotoProducto.width = 1280;
//             fotoProducto.height = 1024;
//         } else {
//             //Si la imagen se encuentra expandida, con un click vuelve al tamaño original
//             fotoProducto.width = originalWidth;
//             fotoProducto.height = originalHeight;
//         }
//     });

// });

document.addEventListener("DOMContentLoaded", () => {
    const fotosProducto = document.querySelectorAll(".fotoProducto");

    fotosProducto.forEach(foto => {
        foto.addEventListener("click", () => {
            const originalWidth = 640;  // Anchura original de la imagen
            const originalHeight = 480; // Altura original de la imagen

            // Cambiar el tamaño de la imagen al hacer clic
            if (foto.style.width === originalWidth + "px") {
                foto.style.width = "1280px";
                foto.style.height = "1024px";
            } else {
                foto.style.width = originalWidth + "px";
                foto.style.height = originalHeight + "px";
            }
        });
    });
});

