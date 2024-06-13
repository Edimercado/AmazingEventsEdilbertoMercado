
import { mostrarEvento, generarCasillasCategorias, filtrarEventos } from './modules/functions.js';

const contenedorEventos = document.querySelector('#contenedorEventos');
const searchInput = document.getElementById('searchInput');
const apiUrl = 'https://aulamindhub.github.io/amazing-api/events.json';

// Función para obtener los datos desde la API
function fetchData() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const currentDate = new Date(data.currentDate);
      inicializarEventos(data, currentDate);
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
}

// Función para inicializar los eventos
function inicializarEventos(data, currentDate) {
  // Mostrar eventos pasados
  data.events.forEach(evento => {
    const eventoDate = new Date(evento.date);
    if (eventoDate < currentDate) {
      mostrarEvento(evento, contenedorEventos);
    }
  });

  // Obtener una lista de categorías únicas
  const categorias = [...new Set(data.events.map(evento => evento.category))];

  // Generar las casillas de verificación en el contenedor deseado
  generarCasillasCategorias('categoriaFiltros', categorias);

  // Filtrar por categorías seleccionadas
  function filtrarPorCategoria() {
    const categoriasSeleccionadas = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

    contenedorEventos.innerHTML = '';
    data.events.forEach(evento => {
      const eventoDate = new Date(evento.date);
      if (eventoDate < currentDate && (categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(evento.category))) {
        mostrarEvento(evento, contenedorEventos);
      }
    });
  }

  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', filtrarPorCategoria);
  });

  searchInput.addEventListener('input', () => {
    filtrarEventos(data, searchInput.value, currentDate, contenedorEventos);
  });
}

// Llamar a la función para obtener los datos al cargar la página
fetchData();

 