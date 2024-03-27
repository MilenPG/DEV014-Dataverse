import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const searchRoot = document.getElementById('root');
const nenSelect = document.querySelector('#filter-nen');
const cleanerButton = document.getElementById('cleaner-button');

searchRoot.appendChild(renderItems(data));
renderItems(data);

nenSelect.addEventListener('change', (e)=> {
  const filterByNen = filterData(data, 'nenType', e.target.value)
  const ul = document.querySelectorAll('ul') // DUDA: por qué cuando lo intenté con getElementById no funcionó, pero con querySelectorAll sí???
  ul.forEach((card)=> { //BUSCAR COMO USAR EL remove() DIRECTO EN EL UL SIN BUCLE
    card.remove()
  }); // ...Limpiar el contenedor antes de renderizar el resultado del filtro. 
  searchRoot.appendChild(renderItems(filterByNen)) //AGREGA las cards que cumplen con el filtro, mas se sigue renderizando el resto. 
})


cleanerButton.addEventListener('click', ()=> {
  //nenSelect.value===''  QUE LOS SELECT SE REESTABLEZCAN A SU DEFAULT
  //document.getElementById('filter-nen').reset(); NO FUNCIONA
  const ul = document.querySelectorAll('ul') //DUDA: por q cuando saco esta variable del scope, deja de funcionar?
  ul.forEach((card)=> {
    card.remove()
  });
  searchRoot.appendChild(renderItems(data));
})