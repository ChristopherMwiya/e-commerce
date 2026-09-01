// PRODUCT LIST
const products = [

{
id:0,
name:"EDITING",
price:400,
oldPrice:500,
image:"pictures/photo_2026-04-03_11-47-26.jpg"
},{
id:1,
name:"Controller",
price:350,
image:"pictures/Controller.png"
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
<p>
${product.oldPrice ? `<span style="text-decoration:line-through;color:gray;">K${product.oldPrice}</span> ` : ""}
<span>K${product.price}</span>
</p>

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





