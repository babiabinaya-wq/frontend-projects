var card1=document.querySelector('.card1')
product=[
    {
        name:"First",
        image:"./assets/image/bird-4062359_640.jpg",
        price:"500"
    },
    {
        name:"Second",
        image:"./assets/image/gull-192909_640.jpg",
        price:"1000"
    },
    {
        name:"Third",
        image:"./assets/image/istockphoto-170615532-1024x1024.jpg",
        price:"3000"    
    },
]
function looping(){
    var section="";
    product.forEach(function(data,index){
        var row=`<div class="card" style="width: 18rem;">
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary" onclick="adding(${index})">Add To Card</a>
          <p>${data.price}</p>
        </div>
      </div>`
    section += row;
    })
    card1.innerHTML=section;
    updatevalue();
    updateTable();
}
function adding(index){
          var cartItems=JSON.parse(localStorage.getItem('cartItems')) || [];
          var existingItem=cartItems.find(item => item.name === product[index].name);
    if(existingItem){
         existingItem.quantity += 1;
    }
    else{
        product[index].quantity =1;
        cartItems.push(product[index]);
    }
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
    updatevalue()
    updateTable()
}
function updatevalue(){
       var cartItems=JSON.parse(localStorage.getItem('cartItems')) || [];
       var totalcount =cartItems.reduce((total,item) => total+item.quantity,0)
        document.querySelector('.birdcount').innerHTML=totalcount;
}

function updateTable(){
       var cartItems=JSON.parse(localStorage.getItem('cartItems')) ||[];
       var tbody = document.querySelector('.tbody')
       var loop="";
       cartItems.forEach(function(item,index){
           var row=`<tr>
                     <td>${item.name}</td>
                     <td><img src="${item.image}" alt="${item.name}"style="width:50px; height:auto;"> </td>
                     <td>
                     <button onclick="dec(${index})">-</button>
                     <button>${item.quantity}</button>
                     <button onclick="inc(${index})">+</button>
                     </td>
                     <td>${item.price * item.quantity}</td>
                    </tr>`;
            loop += row;
       })
        tbody.innerHTML = loop;
}
looping()
 function inc(index){
          var cartItems=JSON.parse(localStorage.getItem('cartItems')) ||[];
          cartItems[index].quantity += 1;
          const price=cartItems[index].price * cartItems[index].quanity;
          localStorage.setItem('cartItems',JSON.stringify(cartItems));
          updateTable();
          updatevalue();
 }
 function dec(index){
    var cartItems= JSON.parse(localStorage.getItem('cartItems')) ||[];
    cartItems[index].quantity -= 1;
     
    localStorage.setItem('cartItems',JSON.stringify(cartItems));
    updateTable();
    updatevalue();
 }
var container = document.querySelector('.container')
var table = document.querySelector('.table')
var tbody = document.querySelector('.tbody')
document.querySelector('.birds').addEventListener('click',function(){
    container.classList.add('d-none')
    table.classList.remove('d-none')
    updateTable()
})
looping()