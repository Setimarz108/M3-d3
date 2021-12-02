

const loadBooks = () => {

    fetch("https://striveschool-api.herokuapp.com/books"  )
    .then( response => response.json())
    .then(books => {
        console.log(books)
        books.forEach(book => {

           create_cards(book)                       
        })        
    })
    .then(() => add_to_cart()  )
}


const create_cards = (book) =>{  
    
    const row = document.querySelector(".row")
       const col = document.createElement("div")
        col.className = "col-3"

        col.innerHTML = `
             <div class="card">
                <img src=${book.img} class="card-img-top" alt=${book.title} image>
                 <div class="card-body">
                       <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">${book.category}</p>
                        <a href="#" class="btn btn-primary">${book.price}</a>
                <button id="addBook" type="button" class="btn btn-dark" >Add to <i class="bi bi-cart2 text-white"></i> </button>
               </div>
                  </div> `

        row.appendChild(col)


}



const add_to_cart = () =>{

        
    const bntAdd = document.getElementById('addBook')
    
     bntAdd.addEventListener('click', test )}


     let shoppingList = []

function test (){
        
    let bookToAdd = document.querySelector('.card');
    shoppingList[card].push(bookToAdd)

        
}


loadBooks()
console.log(shoppingList)

