

const loadBooks = () => {

    fetch("https://striveschool-api.herokuapp.com/books"  )
    .then( response => response.json())
    .then(books => {

        console.log(books)

        const row = document.querySelector(".row")

        books.forEach(book => {

            const col = document.createElement("div")
                        col.className = "col-3"

                        col.innerHTML = `
                        <div class="card">
                            <img src=${book.img} class="card-img-top" alt=${book.title} image>
                            <div class="card-body">
                                <h5 class="card-title">${book.title}</h5>
                                <p class="card-text">${book.category}</p>
                                <a href="#" class="btn btn-primary">${book.price}</a>
                            </div>
                        </div>
                        `
                            row.appendChild(col)
            
        });


    })
}

loadBooks()