

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

