const addForm = document.querySelector('.add');
const lists = document.querySelector('.todos');

const generateTemplate = todo => {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`; // Template string

  lists.innerHTML += html;
};

addForm.addEventListener('submit', e => {
  e.preventDefault();

  const todo = addForm.add.value.trim(); // name="add" 
  todo.length ? generateTemplate(todo) : alert("Add an Item first :)");

  addForm.reset();
});