const newTask = document.querySelector('#new-task-input');
const addtaskbtn = document.querySelector('.add-task-btn');
const removecompletebtn = document.querySelector('.remove-complete-btn')
const tasklist = document.querySelector('.task-list');
const tasktemplate = document.querySelector('#task-template');

let id = 1;

newTask.addEventListener('keyup', (e) => {
  if (e.keyCode === 13 && inputvalid()){
    addtask();
  };
});



addtaskbtn.addEventListener('click',()=> {
  if (inputvalid()){
    addtask();
  }
});

removecompletebtn.addEventListener('click',() => {
  const task = document.querySelectorAll('.task');
  task.forEach(task => {
    const checked = task.querySelector('input').checked;
    if(checked){
      task.remove();
    }
  });

    const task1 = document.querySelectorAll('.task1');
  task1.forEach(task1 => {
    const checked = task1.querySelector('input').checked;
    if(checked){
      task.remove();
    }
  })
});

function addtask(){
  const taskelement = document.importNode
  (tasktemplate.content, true);
  const checkbox = taskelement.querySelector('input');
  checkbox.id = id;
  const label = taskelement.querySelector('label');
  label.htmlfor = id;
  label.append(newTask.value);
  tasklist.appendChild(taskelement);
  newTask.value = '';
  id++; 

} 
function inputvalid(){
  return newTask.value !=='' && newTask.value !==''
}