
//ingreso a la fila de la tabla y en cada una de ellas accedo a su id para formar la url y asi mostrar la informacion
//de la fila donde se hace click.
const filaSeleccion = document.querySelectorAll(".filaPedido"); 
filaSeleccion.forEach(fila => {
    fila.addEventListener("click",() =>{
        const idPedido=fila.id;
        location.href=`informacion-pedido.html?id=${idPedido}`;
    });
});