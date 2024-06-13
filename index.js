// const data = {
//     currentDate: "2023-01-01",
//     events: [
//       {
//         _id: "639c723b992482e5f2834be9",
//         name: "Collectivities Party",
//         image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
//         date: "2022-12-12",
//         description:
//           "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
//         category: "Food Fair",
//         place: "Room A",
//         capacity: 45000,
//         assistance: 42756,
//         price: 5,
//         __v: 0,
//       },
//       {
//         _id: "639c723b992482e5f2834beb",
//         name: "Korean style",
//         image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
//         date: "2023-08-12",
//         description:
//           "Enjoy the best Korean dishes, with international chefs and awesome events.",
//         category: "Food Fair",
//         place: "Room A",
//         capacity: 45000,
//         price: 10,
//         __v: 0,
//         estimate: 42756,
//       },
//       {
//         _id: "639c723c992482e5f2834bed",
//         name: "Jurassic Park",
//         image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
//         date: "2022-11-02",
//         description:
//           "Let's go meet the biggest dinosaurs in the paleontology museum.",
//         category: "Museum",
//         place: "Field",
//         capacity: 82000,
//         price: 15,
//         __v: 0,
//         assistance: 65892,
//       },
//       {
//         _id: "639c723c992482e5f2834bef",
//         name: "Parisian Museum",
//         image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
//         date: "2023-11-02",
//         description:
//           "A unique tour in the city of lights, get to know one of the most iconic places.",
//         category: "Museum",
//         place: "Paris",
//         capacity: 8200,
//         estimate: 8200,
//         price: 3500,
//         __v: 0,
//       },
//       {
//         _id: "639c723c992482e5f2834bf1",
//         name: "Comicon",
//         image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
//         date: "2022-02-12",
//         description:
//           "For comic lovers, all your favourite characters gathered in one place.",
//         category: "Costume Party",
//         place: "Room C",
//         capacity: 120000,
//         assistance: 110000,
//         price: 54,
//         __v: 0,
//       },
//       {
//         _id: "639c723c992482e5f2834bf3",
//         name: "Halloween Night",
//         image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
//         date: "2023-02-12",
//         description: "Come with your scariest costume and win incredible prizes.",
//         category: "Costume Party",
//         place: "Room C",
//         capacity: 12000,
//         estimate: 9000,
//         price: 12,
//         __v: 0,
//       },
//       {
//         _id: "639c723c992482e5f2834bf5",
//         name: "Metallica in concert",
//         image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
//         date: "2023-01-22",
//         description: "The only concert of the most emblematic band in the world.",
//         category: "Music Concert",
//         place: "Room A",
//         capacity: 138000,
//         estimate: 138000,
//         price: 150,
//         __v: 0,
//       },
//       {
//         _id: "639c723c992482e5f2834bf7",
//         name: "Electronic Fest",
//         image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
//         date: "2022-01-22",
//         description:
//           "The best national and international DJs gathered in one place.",
//         category: "Music Concert",
//         place: "Room A",
//         capacity: 138000,
//         assistance: 110300,
//         price: 250,
//         __v: 0,
//       },
//       {
//         _id: "639c723d992482e5f2834bf9",
//         name: "10K for life",
//         image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
//         date: "2022-03-01",
//         description: "Come and exercise, improve your health and lifestyle.",
//         category: "Race",
//         place: "Soccer field",
//         capacity: 30000,
//         assistance: 25698,
//         price: 3,
//         __v: 0,
//       },
//       {
//         _id: "639c723d992482e5f2834bfb",
//         name: "15K NY",
//         image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
//         date: "2023-03-01",
//         description:
//           "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
//         category: "Race",
//         place: "New York",
//         capacity: 3000000,
//         price: 3,
//         __v: 0,
//         estimate: 2569800,
//       },
//       {
//         _id: "639c723d992482e5f2834bfd",
//         name: "School's book fair",
//         image: "https://i.postimg.cc/Sst763n6/book1.jpg",
//         date: "2023-10-15",
//         description: "Bring your unused school book and take the one you need.",
//         category: "Book Exchange",
//         place: "Room D1",
//         capacity: 150000,
//         estimate: 123286,
//         price: 1,
//         __v: 0,
//       },
//       {
//         _id: "639c723d992482e5f2834bff",
//         name: "Just for your kitchen",
//         image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
//         date: "2022-11-09",
//         description:
//           "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
//         category: "Book Exchange",
//         place: "Room D6",
//         capacity: 130000,
//         assistance: 90000,
//         price: 100,
//         __v: 0,
//       },
//       {
//         _id: "639c723d992482e5f2834c01",
//         name: "Batman",
//         image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
//         date: "2022-3-11",
//         description: "Come see Batman fight crime in Gotham City.",
//         category: "Cinema",
//         place: "Room D1",
//         capacity: 11000,
//         assistance: 9300,
//         price: 225,
//         __v: 0,
//       },
//       {
//         _id: "639c723d992482e5f2834c03",
//         name: "Avengers",
//         image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
//         date: "2023-10-15",
//         description:
//           "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
//         category: "Cinema",
//         place: "Room D1",
//         capacity: 9000,
//         estimate: 9000,
//         price: 250,
//         __v: 0,
//       },
//     ],
//   };

import { mostrarEvento, generarCasillasCategorias, filtrarEventos1 } from './modules/functions.js';

const contenedorEventos = document.querySelector('#contenedorEventos');
const searchInput = document.getElementById('searchInput');

// URL de la API
const apiUrl = 'https://aulamindhub.github.io/amazing-api/events.json';

// Función para obtener los datos desde la API
function fetchData() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      inicializarEventos(data);
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
}

// Función para inicializar los eventos
function inicializarEventos(data) {
  // Mostrar los eventos
  data.events.forEach(evento => {
    mostrarEvento(evento, contenedorEventos);
  });

  // Obtener una lista de categorías únicas
  const categorias = [...new Set(data.events.map(evento => evento.category))];

  // Generar casillas de verificación de categorías
  generarCasillasCategorias('categoriaFiltros', categorias);

  // Evento de escucha para cambios en los checkboxes
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => manejarBusqueda(data));
  });

  // Evento de escucha para el campo de búsqueda
  searchInput.addEventListener('input', () => manejarBusqueda(data));
}

// Función para manejar la búsqueda y el filtrado por categorías
function manejarBusqueda(data) {
  const termino = searchInput.value;
  const categoriasSeleccionadas = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
  filtrarEventos1(data, termino, categoriasSeleccionadas, contenedorEventos);
}

// Añadir evento de clic para cada evento
contenedorEventos.addEventListener('click', (event) => {
  if (event.target.closest('.evento')) {
    const eventId = event.target.closest('.evento').dataset.id;
    localStorage.setItem('selectedEventId', eventId);
    window.location.href = './details.html';
  }
});

// Llamar a la función para obtener los datos al cargar la página
fetchData();


  // import { mostrarEvento, generarCasillasCategorias, filtrarEventos1 } from './functions.js';

  // const contenedorEventos = document.querySelector('#contenedorEventos');
  // const searchInput = document.getElementById('searchInput');
  
  // // Inicializar eventos
  // data.events.forEach(evento => {
  //   mostrarEvento(evento, contenedorEventos);
  // });
  
  // // Obtener una lista de categorías únicas
  // const categorias = [...new Set(data.events.map(evento => evento.category))];
  
  // // Generar casillas de verificación de categorías
  // generarCasillasCategorias('categoriaFiltros', categorias);
  
  // // Función para manejar la búsqueda y el filtrado por categorías
  // function manejarBusqueda() {
  //   const termino = searchInput.value;
  //   const categoriasSeleccionadas = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
  //   filtrarEventos1(data, termino, categoriasSeleccionadas, contenedorEventos);
  // }
  
  // // Evento de escucha para cambios en los checkboxes
  // document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
  //   checkbox.addEventListener('change', manejarBusqueda);
  // });
  
  // // Evento de escucha para el campo de búsqueda
  // searchInput.addEventListener('input', manejarBusqueda);
  

//    let contenedorEventos = document.querySelector('#contenedorEventos');
  
//     for (let i = 0; i < data.events.length; i++) {
//       let evento = data.events[i];

//       let tarjetaEvento = document.createElement('div');

//       tarjetaEvento.innerHTML = `
//         <div class="card h-100" style="width: 15rem;">
//           <img src="${evento.image}" class="card-img-top " alt="${evento.name}">
//           <div class="card-body">
//             <h5 class="card-title d-flex justify-content-center">${evento.name}</h5>
//             <p class="card-text d-flex justify-content-center">${evento.description}</p>
//           </div>
//           <div class="  card-body d-flex justify-content-between align-items-center">
//             <p class=" m-0" >Price: ${evento.price}</p>
//             <a href="./details.html" class="card-link text-decoration-none">Details</a>
//           </div>
//         </div>
//       `;
//       contenedorEventos.appendChild(tarjetaEvento);
//     }


// // Obtener una lista de categorías únicas
// const categorias = [...new Set(data.events.map(evento => evento.category))];

// // Función para generar las casillas de verificación de categorías
// function generarCasillasCategorias(contenedorId, categorias) {
//   const contenedor = document.getElementById(contenedorId);

//   categorias.forEach(categoria => {
//     // Crear el input de tipo checkbox
//     const casilla = document.createElement('input');
//     casilla.type = 'checkbox';
//     casilla.id = categoria;
//     casilla.value = categoria;
//     casilla.checked = false; // Marcado por defecto
//     casilla.classList.add('form-check-input');

//     // Crear el label asociado al checkbox
//     const etiqueta = document.createElement('label');
//     etiqueta.htmlFor = categoria;
//     etiqueta.textContent = categoria;
//     etiqueta.classList.add('form-check-label');


//     // Agregar el checkbox y el label al contenedor
//     contenedor.appendChild(casilla);
//     contenedor.appendChild(etiqueta);
//   });
// }

// // Llamar a la función para generar las casillas de verificación en el contenedor deseado
// generarCasillasCategorias('categoriaFiltros', categorias); // Reemplaza 'categoryFilters' con el ID de tu contenedor

// // Función para filtrar eventos según las categorías seleccionadas
// function filtrarPorCategoria() {
//   // Obtener las categorías seleccionadas
//   const categoriasSeleccionadas = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

//   // Mostrar todos los eventos si no se ha seleccionado ninguna categoría
//   if (categoriasSeleccionadas.length === 0) {
//       contenedorEventos1.innerHTML = '';
//       data.events.forEach(evento => {
//           mostrarEvento(evento);
//       });
//       return;
//   }

//   // Filtrar eventos por categorías seleccionadas
//   const eventosFiltrados = data.events.filter(evento => categoriasSeleccionadas.includes(evento.category));

//   // Mostrar eventos filtrados
//   contenedorEventos1.innerHTML = '';
//   eventosFiltrados.forEach(evento => {
//       mostrarEvento(evento);
//   });
// }

// // Función para mostrar un evento en la lista de eventos
// function mostrarEvento(evento) {
//   const tarjetaEvento = document.createElement('div');
//   tarjetaEvento.innerHTML = `
//       <div class="card h-100" style="width: 15rem;">
//           <img src="${evento.image}" class="card-img-top " alt="${evento.name}">
//           <div class="card-body">
//               <h5 class="card-title d-flex justify-content-center">${evento.name}</h5>
//               <p class="card-text d-flex justify-content-center">${evento.description}</p>
//           </div>
//           <div class="  card-body d-flex justify-content-between align-items-center">
//               <p class=" m-0" >Price: ${evento.price}</p>
//               <a href="./details.html" class="card-link text-decoration-none">Details</a>
//           </div>
//       </div>
//   `;
//   contenedorEventos1.appendChild(tarjetaEvento);
// }

// // Evento de escucha para cambios en los checkboxes
// document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
//   checkbox.addEventListener('change', filtrarPorCategoria);
// });





// const contenedorEventos1 = document.querySelector('#contenedorEventos');
// const searchInput = document.getElementById('searchInput');

// // Función para filtrar eventos según el término de búsqueda
// function filtrarEventos(termino) {
//     // Limpiar el contenedor de eventos
//     contenedorEventos1.innerHTML = '';

//     // Filtrar eventos que coincidan con el término de búsqueda
//     const eventosFiltrados = data.events.filter(evento => {
//         const nombreEnMinuscula = evento.name.toLowerCase();
//         const descripcionEnMinuscula = evento.description.toLowerCase();
//         const terminoEnMinuscula = termino.toLowerCase();
//         return nombreEnMinuscula.includes(terminoEnMinuscula) || descripcionEnMinuscula.includes(terminoEnMinuscula);
//     });

//     // Mostrar eventos filtrados
//     eventosFiltrados.forEach(evento => {
//         const tarjetaEvento = document.createElement('div');
//         tarjetaEvento.innerHTML = `
//             <div class="card h-100" style="width: 15rem;">
//                 <img src="${evento.image}" class="card-img-top " alt="${evento.name}">
//                 <div class="card-body">
//                     <h5 class="card-title d-flex justify-content-center">${evento.name}</h5>
//                     <p class="card-text d-flex justify-content-center">${evento.description}</p>
//                 </div>
//                 <div class="  card-body d-flex justify-content-between align-items-center">
//                     <p class=" m-0" >Price: ${evento.price}</p>
//                     <a href="./details.html" class="card-link text-decoration-none">Details</a>
//                 </div>
//             </div>
//         `;
//         contenedorEventos1.appendChild(tarjetaEvento);
//     });
// }

// // Evento de escucha para el campo de búsqueda
// searchInput.addEventListener('input', () => {
//     filtrarEventos(searchInput.value);
// });


// // Función para filtrar eventos según las categorías seleccionadas y el término de búsqueda
// function filtrarEventos() {
//   const termino = searchInput.value.toLowerCase();
//   const categoriasSeleccionadas = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

//   const eventosFiltrados = data.events.filter(evento => {
//       const nombreEnMinuscula = evento.name.toLowerCase();
//       const descripcionEnMinuscula = evento.description.toLowerCase();
//       const cumpleTermino = nombreEnMinuscula.includes(termino) || descripcionEnMinuscula.includes(termino);
//       const cumpleCategorias = categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(evento.category);
//       return cumpleTermino && cumpleCategorias;
//   });

//   // Mostrar eventos filtrados
//   if (eventosFiltrados.length === 0) {
//     contenedorEventos1.innerHTML = '<p class="text-center" style="margin-bottom: 10vw;">No se encontraron eventos que coincidan con los criterios de búsqueda.</p>';
//   } else {
//     contenedorEventos1.innerHTML = '';
//     eventosFiltrados.forEach(evento => {
//       mostrarEvento(evento);
//     });
//   }
// }

// // Evento de escucha para cambios en los checkboxes
// document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
//   checkbox.addEventListener('change', filtrarEventos);
// });

// // Evento de escucha para el campo de búsqueda
// searchInput.addEventListener('input', filtrarEventos);
     