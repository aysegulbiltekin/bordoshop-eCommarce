// url
const baseURL = 'https://fakestoreapi.com/'

// DOM elements
const categoriesEl = document.querySelector('.categories')
const productsEl = document.querySelector('.products')


// methods
async function getCategories () {
  let result = await fetch(`${baseURL}products/categories`)
  let categories = await result.json()

  categories.forEach((category) => {
    categoriesEl.innerHTML += `
    <div class="category">${category}</div>
    `
  })
}

async function getAllProducts () {
  let result = await fetch(`${baseURL}/products/category/jewelery`) 
  let products = await result.json()

  // let newProducts = products.slice(4, 8)
  console.log(newProducts)


  newProducts.forEach((product) => {
   productsEl.innerHTML += `
   <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${product.image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${product.title}</h5>
      <p class="card-text">${product.description}</p>
      <a href="#" class="btn btn-outline-dark w-50  " >Sepete Ekle</a>

    </div>
  </div>
   `
  })
} 


// calling methods
getAllProducts()
getCategories()

