// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return [];
}*/

export const filterData = (data, filterBy, value) => {
  const filterByNen = data.filter((character)=>
    character.facts[filterBy]===value
  );
  return filterByNen;
};
