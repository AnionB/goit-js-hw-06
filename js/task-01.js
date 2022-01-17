const categoriesEl = document.querySelector('#categories');
const itemEl = categoriesEl.querySelectorAll('li.item');
console.log(`Number of categories: ${itemEl.length}`);
itemEl.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
});
