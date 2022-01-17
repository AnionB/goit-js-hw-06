const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createListEl = array => {
  return array.map(element => {
    const listEl = document.createElement('li');
    listEl.textContent = element;
    listEl.classList.add('item');
    return listEl;
  });
};

const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.prepend(...createListEl(ingredients));
