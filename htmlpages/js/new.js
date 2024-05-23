var video = document.getElementById('videoElement');

// Función para reproducir el video
function playVideo() {
  video.play();
}

// Función para pausar el video
function pauseVideo() {
  video.pause();
}
//menuhamburgesa
const hamburgerButton = document.getElementById('hamburger-menu');
const menu = document.getElementById('menu');

hamburgerButton.addEventListener('click', function() {
menu.classList.toggle('active');

if (menu.classList.contains('active')) {
  setTimeout(() => {
    menu.classList.remove('active');
  }, 5000);
}
});
function search() {
  var searchInput = document.getElementById("searchInput");
  var searchTerm = searchInput.value;

  // Lógica de búsqueda aquí
  // Puedes utilizar APIs, bases de datos o cualquier otro método para realizar la búsqueda

  // Ejemplo de resultado de búsqueda
  /*var results = [
    { type: "imagen", url: "https://example.com/imagen1.jpg" },
    { type: "producto", name: "Producto 1", price: "$10" },
    { type: "texto", content: "Este es un resultado de búsqueda de texto" }
  ]; */

  var resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  if (results.length > 0) {
    for (var i = 0; i < results.length; i++) {
      var result = results[i];
      var resultElement = document.createElement("div");

      if (result.type === "imagen") {
        var imageElement = document.createElement("img");
        imageElement.src = result.url;
        resultElement.appendChild(imageElement);
      } else if (result.type === "producto") {
        var nameElement = document.createElement("h3");
        nameElement.textContent = result.name;
        resultElement.appendChild(nameElement);

        var priceElement = document.createElement("p");
        priceElement.textContent = result.price;
        resultElement.appendChild(priceElement);
      } else if (result.type === "texto") {
        var contentElement = document.createElement("p");
        contentElement.textContent = result.content;
        resultElement.appendChild(contentElement);
      }

      resultsContainer.appendChild(resultElement);
    }
  } else {
    var noResultsElement = document.createElement("p");
    noResultsElement.textContent = "No se encontraron resultados.";
    resultsContainer.appendChild(noResultsElement);
  }
}

//para seleccionar la imagen y agrandarla
   
// Agrega un evento de clic a la imagen
imagen.addEventListener("click", function() {
  // Cambia el tamaño de la imagen
  imagen.style.width = "80%";
  imagen.style.height = "80%";
});

// Agrega un evento de doble clic a la imagen
imagen.addEventListener("dblclick", function() {
  // Restaura el tamaño original de la imagen
  imagen.style.width = "";
  imagen.style.height = "";
});

 //buscador lado del cliente
 // Suponiendo que tienes un arreglo de objetos con los nombres de las imágenes y sus descripciones
let imagenes = [
	{ nombre: 'manganegra.jpg', descripcion: 'super oferta producto 1' },
	{ nombre: 'mangas.jpg', descripcion: 'super oferta producto 2' },
	// ... más imágenes
  ];
  
  // Función para buscar una imagen y mostrarla con su descripción
  function buscarYMostrarImagen(nombreImagen) {
	let imagenEncontrada = imagenes.find(imagen => imagen.nombre === nombreImagen);
	if (imagenEncontrada) {
	  // Crear elementos de imagen y descripción
	  let imgElement = document.createElement('img');
	  imgElement.src = 'C:/Users/user/Desktop/sell/sound' + imagenEncontrada.nombre;
	  let descElement = document.createElement('p');
	  descElement.textContent = imagenEncontrada.descripcion;
  
	  // Agregar al DOM
	  document.body.appendChild(imgElement);
	  document.body.appendChild(descElement);
	} else {
	  console.log('Imagen no encontrada');
	}
   

  