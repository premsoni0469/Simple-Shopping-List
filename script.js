function addItem(event){
    var item = document.getElementById('item-input').value;
    event.preventDefault();
    if (item ==''){
        alert("Can't add empty item in the list");
    }
    else{
        document.getElementById('item-list').innerHTML += 
        `<li>
        ${item}
        <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
        </button>
        </li>`;
        console.log("Added");
        document.getElementById('item-input').value='';
    }
}
document.querySelector('.btn').addEventListener('click', addItem);


function deleteItem(event){
    if(confirm("Do you want to remove this item from your list?")){   
        event.target.closest('li').remove();
        console.log("Removed Item");
    }
}
document.querySelector('#item-list').addEventListener('click', deleteItem);


function clearAll(event){
    event.preventDefault();
    var list = document.getElementById('item-list').innerText;
    if (list ==''){
        alert("List is aleardy empty");
    }
    else{
        if(confirm("Are you sure you want to clear your list??"))
            document.getElementById('item-list').innerHTML = ``;
        
        console.log("Cleared all items");
    }
}
document.querySelector('.btn-clear').addEventListener('click', clearAll);


/* reference for search functionality :
    https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_list
*/
function searchItem() {
    // Get the input element with the id 'filter'
    let input = document.getElementById('filter');

    // Get the value of the input and convert it to uppercase for case-insensitive comparison
    let filter = input.value.toUpperCase();

    // Get all the <li> elements in the document
    let li = document.getElementsByTagName('li');

    // Loop through all the <li> elements
    for (let i = 0; i < li.length; i++) {
        // Get the text content of the current <li> element
        let txtValue = li[i].textContent || li[i].innerText;

        // Check if the text content includes the filter string
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            // If it does, display the <li> element
            li[i].style.display = "";
        } else {
            // If it doesn't, hide the <li> element
            li[i].style.display = "none";
        }
    }
}
