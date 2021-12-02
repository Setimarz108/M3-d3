window.onload = () => {

    loadBooks
}

      let books = [];
      let shoppingCartList = [];
      let filteredBooks = [];


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

        col.innerHTML += `
        <div class="d-flex">
             <div class="card">
                <img src=${book.img} class=" img-fluid card-img-top" alt=${book.title} image>
                 <div class="card-body">
                       <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">${book.category}</p>
                <button id="addBook" class="btn btn-primary" onclick="add_to_cart('${String(book.asin)}', this)">$${book.price}</button>
                <button class="btn btn-warning" onclick="this.closest('.col-12').remove()">
                Skip me
                   </button>
                 </div>
             </div> 
         </div>`

        row.appendChild(col)


}



const add_to_cart = (asin, element) =>{

    console.log(asin);
    const book = books.find((book) => book.asin == asin);
    shoppingCartList.push(book);
    console.log(shoppingCartList);
}


loadBooks()
console.log(shoppingList)

