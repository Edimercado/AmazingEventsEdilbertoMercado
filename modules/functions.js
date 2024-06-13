// Función para mostrar un evento en la lista de eventos
export function mostrarEvento(evento, contenedor) {
  const tarjetaEvento = document.createElement('div');
  tarjetaEvento.classList.add('col-lg-3', 'col-md-6', 'd-flex', 'justify-content-center', 'my-1');
  tarjetaEvento.dataset.id = evento._id;  // Añadir data-id aquí
  tarjetaEvento.innerHTML = `
    <div class="card h-100" style="width: 15rem;">
      <img src="${evento.image}" class="card-img-top" alt="${evento.name}">
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-center">${evento.name}</h5>
        <p class="card-text d-flex justify-content-center">${evento.description}</p>
      </div>
      <div class="card-body d-flex justify-content-between align-items-center">
        <p class="m-0">Price: ${evento.price}</p>
        <a href="./details.html" class="card-link text-decoration-none">Details</a>
      </div>
    </div>
  `;
  contenedor.appendChild(tarjetaEvento);
}

  
  // Función para generar las casillas de verificación de categorías
  export function generarCasillasCategorias(contenedorId, categorias) {
    const contenedor = document.getElementById(contenedorId);
  
    categorias.forEach(categoria => {
      const casilla = document.createElement('input');
      casilla.type = 'checkbox';
      casilla.id = categoria;
      casilla.value = categoria;
      casilla.checked = false;
      casilla.classList.add('form-check-input');
  
      const etiqueta = document.createElement('label');
      etiqueta.htmlFor = categoria;
      etiqueta.textContent = categoria;
      etiqueta.classList.add('form-check-label');
  
      contenedor.appendChild(casilla);
      contenedor.appendChild(etiqueta);
    });
  }
  
  // Función para filtrar eventos según el término de búsqueda
  export function filtrarEventos(data, termino, currentDate, contenedor) {
    contenedor.innerHTML = '';
    const terminoEnMinuscula = termino.toLowerCase();
    const eventosFiltrados = data.events.filter(evento => {
      const nombreEnMinuscula = evento.name.toLowerCase();
      const descripcionEnMinuscula = evento.description.toLowerCase();
      const cumpleTermino = nombreEnMinuscula.includes(terminoEnMinuscula) || descripcionEnMinuscula.includes(terminoEnMinuscula);
      const eventoDate = new Date(evento.date);
      return eventoDate < currentDate && cumpleTermino;
    });
  
    if (eventosFiltrados.length === 0) {
      contenedor.innerHTML = '<p class="text-center" style="margin-bottom: 10vw;">No se encontraron eventos que coincidan con los criterios de búsqueda.</p>';
    } else {
      eventosFiltrados.forEach(evento => {
        mostrarEvento(evento, contenedor);
      });
    }
  }
  
  export function filtrarEventosPorTermino(data, termino, contenedor, mostrarEvento) {
    contenedor.innerHTML = '';
    const eventosFiltrados = data.events.filter(evento => {
      const nombreEnMinuscula = evento.name.toLowerCase();
      const descripcionEnMinuscula = evento.description.toLowerCase();
      const terminoEnMinuscula = termino.toLowerCase();
      return nombreEnMinuscula.includes(terminoEnMinuscula) || descripcionEnMinuscula.includes(terminoEnMinuscula);
    });
  
    if (eventosFiltrados.length === 0) {
      contenedor.innerHTML = '<p class="text-center" style="margin-bottom: 10vw;">No se encontraron eventos que coincidan con los criterios de búsqueda.</p>';
    } else {
      eventosFiltrados.forEach(evento => {
        mostrarEvento(evento, contenedor);
      });
    }
  }

  // Función para filtrar eventos por categoría
export function filtrarPorCategoria(data, categoriasSeleccionadas, contenedor) {
    const eventosFiltrados = data.events.filter(evento => {
        return categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(evento.category);
    });

    contenedor.innerHTML = '';
    eventosFiltrados.forEach(evento => {
        mostrarEvento(evento, contenedor);
    });
}

// Función para filtrar eventos según el término de búsqueda y categorías seleccionadas
export function filtrarEventos1(data, termino, categoriasSeleccionadas, contenedor) {
  contenedor.innerHTML = '';
  const terminoEnMinuscula = termino.toLowerCase();
  const eventosFiltrados = data.events.filter(evento => {
    const nombreEnMinuscula = evento.name.toLowerCase();
    const descripcionEnMinuscula = evento.description.toLowerCase();
    const cumpleTermino = nombreEnMinuscula.includes(terminoEnMinuscula) || descripcionEnMinuscula.includes(terminoEnMinuscula);
    const cumpleCategorias = categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(evento.category);
    return cumpleTermino && cumpleCategorias;
  });

  if (eventosFiltrados.length === 0) {
    contenedor.innerHTML = '<p class="text-center" style="margin-bottom: 10vw;">No se encontraron eventos que coincidan con los criterios de búsqueda.</p>';
  } else {
    eventosFiltrados.forEach(evento => {
      mostrarEvento(evento, contenedor);
    });
  }
}