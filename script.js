// PRODUCT LIST
const products = [

{
id:0,
name:"EDITING",
price:500,
image:"pictures/photo_2026-04-03_11-47-26.jpg"
},
{
id:1,
name:"Smart Rope LE",
price:150,
image:"pictures/jumping.jpg"
},
 
{
id:2,
name:"p236 Tripod",
price:650,
image:"pictures/p236.png"
},
{
id:3,
name:"Calus JV52",
price:500,
image:"pictures/calusjv52.png"
},
{
id:4,
name:"Calus Airpods pro",
price:300,
image:"pictures/calusairpodspro.png"
},
  {
id:5,
name:"Airpods cases",
price:90,
image:"pictures/cases.jpg"
},
   {
id:6,
name:"PIXEL WATCH",
price:1800,
image:"pictures/61zfx9OEwDL.jpg"
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





