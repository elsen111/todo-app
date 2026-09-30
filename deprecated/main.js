// ELEMENT SELECTORS
let input = document.querySelector('input');
let add_button = document.querySelector('#add-button');
let task_list = document.querySelector('ul');
let input_field = document.querySelector('#input-field');
let li = document.querySelectorAll('ul li');
let sort = document.querySelector('#sort-button img');
let clear = document.querySelector('#input-field .clear');

let pre_form = [];    // Creating empty array to push items for sorting procedure


// FUNCTIONS TO DO REQUIRED FUNCTIONALITIES

// Function to add entered items to TODO
function add(){
    // If input field isn't empty before adding
    if(input.value.trim() != 0){
        pre_form.push(input.value); 
        
        // Creating new list item and its content after every adding procedure
        li = document.createElement('li');
        task_list.append(li);
        let text = document.createElement('p');
        li.append(text);
        text.textContent = input.value;
        text.setAttribute('class', 'task-text');

        // Creating clear button inside list item after every adding procedure
        let cl_btn = document.createElement('img');
        cl_btn.setAttribute('src', 'images/cl-mark.png');
        cl_btn.setAttribute('class', 'clear');
        li.appendChild(cl_btn);

        // Adding css styles to item
        text.style.width = '75%';
        text.style.overflow = 'none';
        text.style.marginTop = '1px';
        li.style.padding = '8px 15px'
        li.style.display = 'flex';
        li.style.flexDirection = 'row';
        task_list.style.display = 'block';

        // Adding css styles to clear button
        cl_btn.style.position = 'relative';
        cl_btn.style.marginLeft = '23px';   
        cl_btn.style.marginTop = '0%'; 

        input.value = ''; // Resetting input field after adding
        
        // Event Listener to remove selected lis item from the task list
        cl_btn.addEventListener("click", () => {
            cl_btn.parentNode.remove();

            if(document.querySelectorAll('li').length == 0){
                task_list.style.display = 'none';
            }
          });

        
        // Pushing entered contents to Local Storage
        let getLocalStorage = localStorage.getItem('New Todo');
        if(getLocalStorage == null){
            dataArr = [];
        }

        else{
            dataArr = JSON.parse(getLocalStorage);
        }
        dataArr.push(input.value);
        localStorage.setItem('New Todo', JSON.stringify(dataArr));
    }

    // If input field is empty before adding
    else{
        alert('Please fill !');
        }
}

// Function to sort entered items according to alphabetical order
function sort_list() {
    let new_tasks = [];
    let tasks = document.querySelectorAll("li");
    for (let i = 0 ; i < tasks.length; i++) {
        new_tasks.push(tasks[i].innerHTML)
    }
    new_tasks.sort();
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].innerHTML = new_tasks[i];
    }
}

// Function to sort entered items according to reversed alphabetical order
function sort_list_reverse(){
    let new_tasks = [];
    let tasks = document.querySelectorAll("li");
    for (let i = 0 ; i < tasks.length; i++) {
        new_tasks.push(tasks[i].innerHTML)
    }
    new_tasks.sort().reverse();
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].innerHTML = new_tasks[i];
    }
}

// Function to sort entered items according to initial order
function prev(){
    let tasks = document.querySelectorAll("li p");
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].innerHTML = pre_form[i]; 
    }
}


// EVENT LISTENERS
// Clearing selected item
clear.addEventListener('click', () => {
    input.value = '';
})

// Adding entered contents list (while clicking add button)
add_button.addEventListener('click', () => {
        add();
});

// Adding entered contents list (while pressing 'ENTER' keyboard)
input.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        add();
    }
  });

// Sorting procedures
sort.addEventListener('click', () => {
    if(sort.getAttributeNode('id').value == 'ascending'){
        sort_list();

        // Changing id and image of sorting button element
        sort.setAttribute('id', 'descending');
        sort.setAttribute('src', 'images/descending sort.png');
        sort.style.width = '25px'
    }

    else if(sort.getAttributeNode('id').value == 'descending'){   
        sort_list_reverse();

        // Changing id and image of sorting button element
        sort.setAttribute('id', 'previous');
        sort.setAttribute('src', 'images/ascending sort.png');
        sort.style.width = '25px'
    }

    else{
        prev();

        // Changing id and image of sorting button element
        sort.setAttribute('id', 'ascending');
        sort.setAttribute('src', 'images/unsort.png');
        sort.style.width = '15px';
    }


    // Making available removing function after sorting
    let cl_btns = document.querySelectorAll('ul li img');
    for(let i=0; i<cl_btns.length; i++){
        cl_btns[i].addEventListener('click', () => {
            cl_btns[i].parentNode.remove();

            if(document.querySelectorAll('li').length == 0){
                task_list.style.display = 'none';
            }
        });
    }
})