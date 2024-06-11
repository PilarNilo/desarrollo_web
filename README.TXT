Hola!!
** Como aviso importante --> utilicé otro puerto (3307), dado que el puerto 3306 lo tenía ocupado con otro programa y no me permitía
utilizarlo por alguna razón e.e **
Voy a explicar un poco la tarea 3, problemas que surgieron y algunos que no logré solucionar por completo.
#Agregar Pedido:
1.decidí mostrar los errores usando la metodología flask en html y para mantener la validación con CSS (casilla a rellenar en rojo en caso de error),
le ingresé código a los select e inputs, de manera que en caso de pillar el mensaje de error la casilla fuera roja.
2.Arreglé el mensaje a mostrar de los errores y el popup(ventana emergente), solo que este no se desliza automaticamente hacia él, hay que subir manualmente la página para
encontrar el mensaje de confirmación.
#app.py, db.py, query.json
3.En cuanto a las validaciones, estas funciones de validación traidas desde db.py funcionan correctamente a excepción de tipo_producto, productos y región
, como no funcionaron realicé directamente las 3 validaciones en app.py.
4. tanto en query.json como db.py se agregaron querys nuevas para obtener información que no podía ser obtenida directamente
con las consultas dadas como material, con su respectiva función en db.py
#ver pedidos
5. Decidí implementar una paginación que tuviera flechas izquierda y derecha, junto con los indices respectivos de página.
Solo funciona el cambio de página si se aprieta el número, las flechas no funcionaron, pero podría ser una mejora
6. cambié la forma de renderizar las imagenes, ahora están en el JS respectivo y no el HTML.
#informacion pedidos
7.la URL de las imagenes se construyeron manualmente, es decir static/uploads/+URLFOTO+.jpg, dado que surgian problemas
al rescatar la url desde el diccionario implementado para esta parte.
8. Añadí la información que faltó en la tarea 1
9. Las imagenes fueron renderizadas mediante JS y no con HTML, además de que ahora al expandir la imagen se puede volver a hacer click en ella
y con ello volver al tamaño original.
10.cuando se ingresa más de 1 imagen, solo pude expandir y aplicar el cambio de tamaño a la primera, quizás falta arreglar el ciclo
que permite expandir y renderizar el resto de las imagenes, pero se visualizan las 3 imágenes que es lo importante.

#archivos test
1. Decidí hacer una página que tuviera ambas estadisticas (productos y pedidos)
por ende la implementación en primera instancia la realicé por separadas para probar como funcionaba (stats-pedidos/productos.html
, grafico productos/pedidos.js y .css). Luego junté ambos códigos
y los escribí en los archivos test.js, test.html y test.css de manera que solo * tomar en cuenta los archivos test.html, test.css, test.js *
2. usé un gráfico de barras y otro de torta para comparar entre ambos gráficos cual es el mejor, pero en cuanto
a estadisticas el más fácil de visualizar y entender es el de barra ya que el de torta no queda clara la cantidad
(sin poner el mouse sobre el gráfico) de cada área.
Cosas a mencionar extra:
1.hubo un error al expandir las imagenes en la parte de informacion-productos, pero fue un problema de
detección de dimensiones (no detectaba los pixeles) asique fue arreglado.

