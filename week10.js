let id = 0;

document.getElementById('add').addEventListener('click',() =>{

    let table = document.getElementById('book-list')
    let row = table.insertRow(1);
    row.setAttribute('id',`item-${id}`)
    row.insertCell(0).innerHTML = document.getElementById('book-author').value;
    row.insertCell(1).innerHTML = document.getElementById('book-title').value;
    row.insertCell(2).innerHTML = document.getElementById('genre').value;
   
    let remove = row.insertCell(3);
    remove.appendChild(createDeleteButton(id++));
    document.getElementById('book-author').value = ' ';
    

});

function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className= 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
        

    };
    return btn;


}