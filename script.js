// PRODUCT LIST
const products = [

{
id:1,
name:"Mango airpods",
price:150,
image:"/pictures/mango.jpg"
}

]

// DISPLAY PRODUCTS ON HOMEPAGE
const productList = document.getElementById("productList")

if(productList){

products.forEach(product=>{

productList.innerHTML += `

<div class="product">

<img src="${product.image}">
<h3>${product.name}</h3>
<p>K${product.price}</p>

<button onclick="addToCart(${product.id})">
Add to Cart
</button>

</div>

`

})

}

// CART SYSTEM
let cart = JSON.parse(localStorage.getItem("cart")) || []

function addToCart(id){

let product = products.find(p=>p.id === id)

let existing = cart.find(item => item.id === id)

if(existing){

existing.qty += 1

}else{

cart.push({...product, qty:1})

}

localStorage.setItem("cart", JSON.stringify(cart))

alert("Product added to cart!")


}


