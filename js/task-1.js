// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).
const item = document.querySelectorAll('.item');
const catNumber = item.length;
console.log(`Number of categories: ${catNumber}`);
const text = document.querySelectorAll('.title-text');
const textTitle = text.map(el => el.textContent);
console.log(textTitle);
