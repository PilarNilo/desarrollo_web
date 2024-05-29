//variables a utilizar en productos y comunas
const regiones = {
    "Región de Arica y Parinacota": ["Arica", "Camarones", "General Lagos", "Putre"],
    "Región de Tarapaca": ["Alto Hospicio", "Camina", "Colchane", "Huara", "Iquique", "Pica", "Pozo Almonte"],
    "Región de Antofagasta": ["Antofagasta", "Calama", "Maria Elena", "Mejillones", "Ollague", "San Pedro de Atacama", "Sierra Gorda", "Taltal", "Tocopilla"],
    "Región de Atacama": ["Alto del Carmen", "Caldera", "Chañaral", "Copiapó", "Diego de Almagro", "Freirina", "Huasco", "Tierra Amarilla", "Vallenar"],
    "Región de Coquimbo": ["Andacollo", "Canela", "Combarbala", "Coquimbo", "Illapel", "La Higuera", "La Serena", "Los Vilos", "Monte Patria", "Ovalle", "Paihuano", "Punitaqui", "Rio Hurtado", "Salamanca", "Vicuña"],
    "Región de Valparaíso": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"],
    "Región Metropolitana de Santiago": ["Santiago", "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil"],
    "Región del Libertador General Bernardo O'Higgins": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "Pichilemu", "La Higuera", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "San Fernando", "Santa Cruz"],
    "Región del Maule": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"],
    "Región del Biobío": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío", "Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"],
    "Región de la Araucanía": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"],
    "Región de Los Ríos": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
    "Región de Los Lagos": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"],
    "Región del Ñuble": ["Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"],
    "Región Aysen": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O'Higgins", "Tortel", "Chile Chico", "Río Ibáñez"],
    "Región de Magallanes": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"],
};

const frutas = {
   "Fruta":[ "Arándano", "Frambuesa", "Frutilla", "Grosella", "Mora", "Limón", "Mandarina", "Naranja",
    "Pomelo", "Melón", "Sandía", "Palta", "Chirimoya", "Coco", "Dátil", "Kiwi", "Mango", "Papaya", "Piña",
    "Plátano", "Damasco", "Cereza", "Ciruela", "Higo", "Kaki", "Manzana", "Durazno", "Nectarin", "Níspero",
    "Pera", "Uva", "Almendra", "Avellana", "Maní", "Castaña", "Nuez", "Pistacho"]
};
const verduras = {
    "Verdura":[ "Brócoli", "Repollo", "Coliflor", "Rábano", "Alcachofa", "Lechuga", "Zapallo", "Pepino",
    "Haba", "Maíz", "Champiñón", "Acelga", "Apio", "Espinaca", "Perejil", "Ajo", "Cebolla", "Espárrago",
    "Puerro", "Acelga", "Espinaca", "Remolacha", "Berenjena", "Papa", "Pimiento", "Tomate", "Zanahoria" ]
};




//funciones de validacion de datos del formulario, en orden
const validateProducto = producto => producto;

const validateTipoProducto = tipoProducto => tipoProducto && tipoProducto.length >= 1 && tipoProducto.length <= 5;

const validateRegion = region => region;

const validateComuna = comuna => comuna;

// const validateUserName = userName => userName && 80>= userName.length && userName.length>= 3;
const validateUserName = userName => {
  if (!userName.trim()) {
    return false;
}
 
  return userName && userName.replace(/\s+/g, '').length >= 3 && userName.replace(/\s+/g, '').length <= 80;;
};

const validateEmail = email => {
    // Email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && 0 < email.length <= 30 ;
  };

const validatePhone = phone => {
    const phoneRegex = /^[\+]{1}?[0-9]{2}?[0-9]{3}?[0-9]{4,6}$/g;
    return phoneRegex.test(phone) && 8 < phone.length<= 11;
};

//funciones para mostrar los tipos de frutas/verdura y las comunas
const productoSeleccion = document.getElementById("producto"); //con esto ingreso a producto

const  mostrarSeleccionProducto = () => {
    
    const seleccion = productoSeleccion.value; //obtengo el tipo de valor seleccionado: fruta o verdura
    const productoEspecifico = document.getElementById("producto-especifico"); //ingreso al produccto especifico, que sera dinamico en este caso
    //si el valor es fruta, se recorre y va añadiendo cada elemento del diccionario fruta.
    if (seleccion === "fruta") {
        const opciones = frutas["Fruta"];
        const opcionesHTML = opciones.map((opcion) => `<option>${opcion}</option>`).join('');
        productoEspecifico.innerHTML = opcionesHTML;
        }
    //si el valor es verdura, se recorre y va añadiendo cada elemento del diccionario verdura.
    else if (seleccion === "verdura") {
       const opciones = verduras["Verdura"];
       const opcionesHTML = opciones.map((opcion) => `<option>${opcion}</option>`).join('');
       productoEspecifico.innerHTML = opcionesHTML;
       
    };
};
productoSeleccion.addEventListener('change', mostrarSeleccionProducto); //conexion entre ambos elementos

//................................................................................................................
const regionSeleccion = document.getElementById("regiones"); //ingreso a regiones
const mostrarComunasSeleccion = () => {
    
    const escogerRegion = regionSeleccion.value; //obtengo el valor (tipo de region seleccionada)
    const comunasSeleccion = document.getElementById("comuna"); //ingreso a comunas
    //se añaden las comunas correspondientes a la region seleccionada
    const opciones = regiones[escogerRegion];
    const opcionesHTML = opciones.map((opcion) => `<option>${opcion}</option>`).join('');
    comunasSeleccion.innerHTML = opcionesHTML;
};
regionSeleccion.addEventListener('change', mostrarComunasSeleccion); //conexion entre ambos elementos

let addpedido = document.getElementById("enviar");
let confirmacion = document.getElementById("popupconf");

addpedido.addEventListener("click", () => {

    confirmacion.style.display = "block";
}
);

//si pasan todas las validaciones
let confbutton = document.getElementById("confirmbutton");
let staybutton = document.getElementById("staybutton");

confbutton.addEventListener("click", () => {
}
);


staybutton.addEventListener("click", () => {
    alert("No se ha registrado el Pedido,modifica el formulario.")
    //ocultamos el div de confirmacion
    confirmacion.style.display = "none";
}
);




//........................................................
//envio y validacion del formulario
// const handleFormSubmit = () => {
//     console.log("Validando formulario...")
//   //obtengo los id
//     const productoInput=document.getElementById("producto");
//     const tipoProductoInput=document.getElementById("producto-especifico")

//     const regionInput=document.getElementById("regiones");
//     const comunaInput=document.getElementById("comuna");

//     const userNameInput = document.getElementById("nombre-comprador");
//     const emailInput = document.getElementById("email");
//     const phoneInput = document.getElementById("numero-comprador");
    

//     let isValid = true;
//     let errorMessage = "";

//     //validaciones de texto y alertas
//       if (!validateEmail(emailInput.value)) {
//           isValid = false;
//           errorMessage += "Por favor, ingresa un correo electrónico válido.\n";
//           emailInput.style.borderColor = "red";
//       } else {
//           emailInput.style.borderColor = "";
//       }
    
//       if (!validateUserName(userNameInput.value)) {
//         isValid = false;
//         errorMessage += "Por favor, ingresa un nombre válido (3 caracteres mínimo).\n";
//         userNameInput.style.borderColor = "red";
//       } else {
//         userNameInput.style.borderColor = "";
//       }
//     //necesito validar el numero de telefono solo si esuqe este se ingresa
//       if (phoneInput.value.length > 0) {
//         isValid = false;
//         errorMessage += "El número de teléfono debe tener +código país, código área, número.\n";
//         phoneInput.style.borderColor = "red";

//       } else {
//         phoneInput.style.borderColor = "";
//       }

//       // if (!validatePhone(phoneInput.value)) {
//       //   isValid = false;
//       //   errorMessage += "El número de teléfono debe tener +código país, código área, número.\n";
//       //   phoneInput.style.borderColor = "red";
//       // } else {
//       //   phoneInput.style.borderColor = "";
//       // }
//       //validaciones de seleccion
//       if (!validateProducto(productoInput.value)) {
//         isValid = false;
//         errorMessage += "Por favor, seleccione un tipo de producto.\n";
//         productoInput.style.borderColor = "red";
//       } else {
//         productoInput.style.borderColor = "";
//       }
//       if (!validateRegion(regionInput.value)) {
//         isValid = false;
//         errorMessage += "Por favor, seleccione una región.\n";
//         regionInput.style.borderColor = "red";
//       } else {
//         regionInput.style.borderColor = "";
//       }
//       //validacion de cantidad de selecciones
//       if (!validateComuna(comunaInput.value)) {
//           isValid = false;
//           errorMessage += "Por favor, seleccione una comuna.\n";
//           comunaInput.style.borderColor = "red";
//       } else {
//           comunaInput.style.borderColor = "";
//       }
//       //array de los productos seleccionados
//       const productosSeleccionados = Array.from(tipoProductoInput.selectedOptions).map(option => option.value);

//       if (!validateTipoProducto(productosSeleccionados)) {
//         isValid = false;
//         errorMessage += "Por favor, seleccione como mínimo 1 producto y máximo 5.\n";
//         tipoProductoInput.style.borderColor = "red";
//       } else {
//         tipoProductoInput.style.borderColor = "";
//       }
//     //FIN DE VALIDACION, PASAR AL BOTON AGREGAR PRODUCTO
      
//       if (!isValid) {
//         alert(errorMessage); 
//       } else {
//         mostrarConfirmacion()
//       }
    
    
// };

// const mostrarConfirmacion = () => {
//     const confirmacion = confirm("¿Confirma el registro de este pedido?");
//     if (confirmacion) {
//         alert("Hemos recibido su pedido. Muchas gracias.");
//         window.location.href = "index.html";
//     } else {
        
//     }
// };
// //---------------------------------------------------------------------
// //asigno la funcion de validación al hacer click en el boton agregarpedido
// const agregarPedidoButton = document.getElementById("agregarpedido");
// agregarPedidoButton.addEventListener("click", handleFormSubmit);



