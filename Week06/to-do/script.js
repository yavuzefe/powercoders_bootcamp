// - Add todo
// 1. Variables
// -not in yet: user input how to order
const todo = document.querySelector("input[type = 'text']");
const addBtn = document.querySelector("button");
const list = document.querySelector("ol");

let todos = [

];

// check for duplicate
let isInputUnique = (newItem) => {
    // loop thruogh todos list compare each item to newItem
    // return true or false
}
let addTodo = () => {
    //get Value from input
    let newItem = todo.value;
    // validate the value, check for duplicates
    if (isInputUnique(newItem)) {
        //create instance
        //push todos list
        todos.push(new TodO(todos.length, newItem));
        displayList(todos);
    } else {
        //return error message
    }
}
let clearList = () => {
    list.innerHTML = "";

}

let displayList = list => {
    clearList();
    //loop through todo list 
    //for each obj in the list we render HTML li tageach li-Tag base don the properties of the obj
    //each li-tag will be appended to ol-DOM element
    //addEventListener for checkbox to call changeStatus
    const listItems = document.querySelectorAll("input[type='checkbox']");
}
let changeStatus = () => {
    //check input if checkbox  is checked -
    //find the corresponding obj, and set isDone = true 
    //if it is not checked, set isDone = false
}

addBtn.addEventListener("click", addTodO);



function TodO(id, text, order, isDone = false) {
    this.id = id;
    this.text = text;
    this.order = order;
    this.isDone = isDone

}
