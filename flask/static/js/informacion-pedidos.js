document.addEventListener("DOMContentLoaded", ()=>{
    
    const filaPedido=document.querySelectorAll("tr");

    filaPedido.forEach(fila => {
            fila.addEventListener("click", () => {
                const idPedido = fila.id;
                location.href=`informacion-pedido.html?id=${idPedido}`
            });
    });

});