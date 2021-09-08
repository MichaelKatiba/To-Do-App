/************ GETTING THE NECCESSARY ELEMENTS FOR MODIFICATION *************/

const form = document.querySelector('#form');
let searchField = document.querySelector('#input-list_field');
let submitBtn = document.querySelector('#submit_btn');
let list = document.getElementById('list');
let listItem = document.getElementsByClassName('list_item');
let deleteItem = document.querySelectorAll('.delete_btn');
// console.log(submitBtn);



/**************A FUNCTION TO ADD A NEW LIST ITEM ******************/

function addItem(event){
event.preventDefault();//Prevents the page from refreshing

if(searchField.value == searchField.value && searchField.value != ''){
///Creates a new list item
let newValue = document.createElement('li');//Creates Html li tag
newValue.className = 'list_item';//Adds a class name to the li tag
newValue.appendChild(document.createTextNode(searchField.value));//Sets the value(textContent) by grabbing the input value(Content) fill by the user 

///Adds a new "Remove" button to the new list item
let deleteBtn = document.createElement('button');//Creates Html button tag
deleteBtn.className = 'delete_btn';//Adds a class name to the button tag
deleteBtn.appendChild(document.createTextNode('Remove'));//Sets/creates a default text that will appear in the buttton element
newValue.appendChild(deleteBtn);//Adds the Remove button to the new li tag/list item
list.appendChild(newValue);//Adds the a new list item to the list
 

} else{
    console.log('The form is not filled');
};
}

//For Debugging uncomment below
console.log();
// }
submitBtn.addEventListener('click', addItem);


/*************** A FUNCTION TO REMOVE A LIST ITEM *****************/

list.addEventListener("click",itemRemover);//Invoking the function to delete a selected item

function itemRemover(e) {
    //Targeting the delete/remove button(class) when clicking inside the <ul></ul>
    if (e.target.classList.contains('delete_btn')) {
        let li = e.target.parentElement;//Grabbing the remove button's parentElement or <li></li> tag
        list.removeChild(li);//Removing the remove button's parentElement or <li></li> tag on click
    }else{
        console.log(`Didn't work`);
    }
}





/**************************ADD & UPDATE COPYRIGHT INFO AUTOMATICALLY*****************************/

let copyrigtInfo = document.getElementById('copyright__info');
function copyrightUpdater() {
    let year = new Date().getFullYear();
    copyrigtInfo.innerHTML = `Copyright ${year}`;

}
copyrightUpdater();


/*********************GSAP ANIMATION**********************/
let headerMotion = gsap.from(".main_header", {duration: 1, y: -40, opacity: 0.3});
let formMotion = gsap.from("#search_filter", {duration: .6, y: -30, opacity: 0, delay: .8});
let titletMotion = gsap.from(".app_title", {duration: .6, y: -20, opacity: 0});
let listMotion = gsap.from(list, {duration: 1.6, y: 30, opacity: 0,});
let copyrightMotion = gsap.from(copyrigtInfo, {duration: .8, y: 40, opacity: 0});
