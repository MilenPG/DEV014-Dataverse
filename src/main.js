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
  searchRoot.innerHTML = '';
  searchRoot.appendChild(renderItems(filterByNen)) //AGREGA las cards que cumplen con el filtro, mas se sigue renderizando el resto. 
})


cleanerButton.addEventListener('click', ()=> {
  //nenSelect.value===''  QUE LOS SELECT SE REESTABLEZCAN A SU DEFAULT
  //document.getElementById('filter-nen').reset(); NO FUNCIONA
  searchRoot.innerHTML = "";
  searchRoot.appendChild(renderItems(data));
})