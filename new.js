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

function myFunction() {
  const node = document.getElementById("myList2").lastChild;
  const clone = node.cloneNode(true);
  document.getElementById("myList1").appendChild(clone);
  const checkbox = node.querySelector('mylist2');

}

let meaning2 = "7";
let mmm;
console.log(mmm);

// var mmm = "it is true";

// let mmm = "I cannot find truth";
mmm = "everything is true";
const mmm1 = "what is this?";
console.log(mmm);

let a = 1, b = " for u", c = "just do it";



let r;
r  = 34 % 3;
console.log(r)

let xx = 4.4 / 2.0;
console.log(xx);

let yy = 6, zz = 77;
zz = zz + yy;
console.log(zz);

let just8 = "a is not b \"but could be c\" plus b";
console.log(just8);

let lli = `first\n\\second\nand \f third`;

console.log(lli);

let a1 = "John", b1 = "Mary", last = " Smith ";
manname = a1 + last;
womanname = b1 + last;

console.log(manname + "and " + womanname);

let z1 = "the world is";
x1 = " just";
z1 += x1 += " beautiful." ;
let z1length = 0;

z1length = z1.length;
console.log(z1);
console.log(z1length);

let aZ2 = "ABCD";
let aZ2length = 0;

// aZ1length = aZ1.length;


console.log(aZ2.length);
console.log(aZ2[1],aZ2[2],aZ2[0]);

let me = `${z1}${aZ2}`;
console.log(me.length);
let me2 = me[me.length - 32];
console.log(me);
console.log(me2);

function w(aaa, bbb, ccc, ddd, eee) {
  let result1 = "";
  result1 += aaa + bbb + ccc + ddd + eee;
  return result1;
}

console.log(w("I"," am"," a"," man.",""))
console.log(w("You"," are"," not"," a"," woman."))

let qqq = [77,88,99,[00,11,[22,33,44]]];
qqq[3][1] = 66;
console.log(qqq);

// qqq.push = (["1516"]);
qqq.push(["6666"]);
console.log(qqq);