// - Add todo
// 1. Variables
// -not in yet: user input how to order
const todo = document.querySelector("input[type='text']");
const addBtn = document.querySelector("button");
const ol = document.querySelector("ol");

let todos = [];

// check for duplicate
let isInputUnique = (newItem) => {
    
    if(todos.length != 0) {
        for (let index = 0; index < todos.length; index++) {
        
            if(todos[index].text === newItem){
                return false;
            } else{
                return true;
            }
        } 
    } else {
        return true;
    }

    // return true;
    // todos.forEach(element => {
    //     if(newItem !== element.text.value){
    //         return true;
    //     } else{
    //         return false;
    //     }
    // });
    // loop thruogh todos list compare each item to newItem
    // return true or false
}
let addTodo = () => {
    //get Value from input
    let newItem = todo.value;

    // validate the value, check for duplicates
    if (isInputUnique(newItem) && newItem != '') {
        //create instance
        //push todos list and display list
        todos.push(new ToDo(todos.length, newItem));
        displayList(todos);
        console.log(todos);
    } 
    // else {
        //return error message
        // alert("!!!");
        // displayList(todos);
    // }
}
// let clearList = () => {
//     list.innerHTML = "";
// }

let displayList = list => {
    // clearList();
    ol.innerHTML = "";
    //loop through todo list 
    for (let index = 0; index < list.length; index++) {
        let li = document.createElement("li");
        let label = document.createElement("label");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        label.textContent = list[index].text;
        //each li-tag will be appended to ol-DOM element
        ol.appendChild(li);
        li.appendChild(label)
        li.appendChild(checkbox);
        todo.value = "";
        checkbox.addEventListener("click", () => { changeStatus(index)})//removeItem(index) });
    }

    //for each obj in the list we render HTML li tag each li-Tag base don the properties of the obj
    //addEventListener for checkbox to call changeStatus
    // const listItems = document.querySelectorAll("input[type='checkbox']");
}

// function removeItem(itemIndex) {
//     todos.splice(itemIndex, 1);
//     displayList(todos);
// }

let changeStatus = (itemIndex) => {
    if(todos[itemIndex].checked){
        todos[itemIndex].isDone === true;
        console.log(todos[itemIndex]);
        todos.splice(itemIndex, 1);
    
        removeItem(itemIndex);
    }else{
        todos[itemIndex].isDone == false;
    }
    displayList(todos);

//     // check input if checkbox  is checked -
//     // find the corresponding obj, and set isDone = true 
//     // if it is not checked, set isDone = false
}


addBtn.addEventListener("click", addTodo);

function ToDo(id, text, order, isDone = false) {
    this.id = id;
    this.text = text;
    this.order = order;
    this.isDone = isDone

}
