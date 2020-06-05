const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <span>
     <i class="far fa-trash-alt delete"></i>
     <i class="fas fa-check tick ml-2"></i>
    <span>
  </li>`; // Template string

  list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
  e.preventDefault();

  const todo = addForm.add.value.trim(); // name="add" 
  todo.length ? generateTemplate(todo) : alert("Add an Item first :)");

  addForm.reset();
});

// To remove an element we will use event delegation method... Bubbling

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove();
  }

  if (e.target.classList.contains('tick')) {
    e.target.classList.toggle('completed');
  }
});

// Search The todo ...
const filterTodos = term => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toUpperCase().includes(term.toUpperCase()))
    .forEach(todo => todo.classList.add('filtered'));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toUpperCase().includes(term.toUpperCase()))
    .forEach(todo => todo.classList.remove('filtered'));
};

// keyup event
search.addEventListener('keyup', () => {
  const term = search.value.trim();
  filterTodos(term);
});


/** --- Extra curicullum Activity : Creating our own JSEngine (very basic though) ---*/

const javascriptEngine = code => {
  return code.split(/\s+/);
};

const tokens = javascriptEngine("let products = 23");
console.log(tokens); // These are the tokens. We form AST




