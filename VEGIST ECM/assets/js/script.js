var con=document.querySelector('.qq1')
var log=document.querySelector('.login')
var main=document.querySelector('.main')
var create=document.querySelector('.Create')
var sign=document.querySelector('.sign')
var In=document.querySelector('.in')
var sign1=document.querySelector('.sign1')
var fir=document.querySelector('.fir')
var mai=document.querySelector('.mai')
var pass=document.querySelector('.pass')
var last=document.querySelector('.last')
var mai1=document.querySelector('.mai1')
var word=document.querySelector('.word')
var heart=document.querySelector('.heart')
var dish=document.querySelector('#dish')
var card1=document.querySelector('.card1')
var bagg=document.querySelector('.bagg')
var to=document.querySelector('.to')
var tbody=document.querySelector('.tbody')
var pic=document.querySelector('.pic')
var wishlisttable=document.querySelector('.wishlistTable')
var back=document.querySelector('.back')
var back1=document.querySelector('.back1')
var back2=document.querySelector('.back2')
var array=[]
var object={}

con.addEventListener('click',function(){
    main.classList.add('d-none')
    log.classList.remove('d-none')
    bag.classList.add('d-none')
    
  
})
sign.addEventListener('click',function(){
    log.classList.add('d-none')
    create.classList.remove('d-none')
})
In.addEventListener('click',function(){
    log.classList.remove('d-none')
    create.classList.add('d-none')
})
function abi(){
    var objects={
        fir:fir.value,
        last:last.value,
        mai:mai.value,
        pass:pass.value,
      }
      array.push(objects);
      localStorage.setItem('wer',JSON.stringify(array))
        fir.value=''
        last.value=''
        mai.value=''
        pass.value=''
}
function abi1(){
      var currentdata=JSON.parse(localStorage.getItem('wer'))
    var gmail = currentdata.find((item)=>{
        return item.mail == mai1.value 
    })
    var gmail = currentdata.find((item)=>{
        return item.pass == word.value
    })
    mai1.value=''
    word.value='' 

    if(gmail){
        alert('Login Successful')
    }
    else{
        alert('Please fill out this')
    }
}
back1.addEventListener('click',function(){
  main.classList.remove('d-none')
  card1.classList.add('d-none')
})
heart.addEventListener('click',function(){
    main.classList.add('d-none')
    pic.classList.remove('d-none')
   
})
bagg.addEventListener('click',function(){
     main.classList.add('d-none')
     card1.classList.remove('d-none')
})
back.addEventListener('click',function(){
    log.classList.add('d-none')
    main.classList.remove('d-none')
})
back2.addEventListener('click',function(){
     pic.classList.add('d-none')
     main.classList.remove('d-none')
})
Product=[
    {
        name:"Healthy papaya organic",
        image:"./assets/image/11_3b901fee-31ca-4f77-9217-44e9289bf307.jpg",
        price:"31.00",
        review:"No Reviews",
        view:'',
    },
    {
        name:"Shrimp - Jumbo(5 lb)",
        image:"./assets/image/34_e2b438b2-687b-4721-9dee-90a9046d07c2.jpg",
        price:"61.00",
        review:"No Reviews",
        view:'',
    },
    { 
        name:"Organic Coconut",
        image:"./assets/image/39_c90864d7-0b4c-497e-9704-d190bf7018dd.jpg",
        price:"66.00",
        review:"No Reviews",
        view:'',
    },
    {
        name:"Orange Juice natural",
        image:"./assets/image/47_079bbe40-1ad0-4306-91a0-c2fd343ca0a7.jpg",
        price:'63.00',
        review:"No Reviews",
        view:'',
    },
]
function looping(){
    var section="";
    Product.forEach(function(data,index){
       var row=` <div class="col-md-3 ">
                <p  class="but1" >${data.view}<button type="button" class="but" onclick="wish(${index})"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
              </svg></button>
              <button class="but" onclick="adding(${index})"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
              </svg></button>
              <button class="but"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg></button>   
               </p>
              <div class="card" style="width: 18rem;" id="card">
                <img src="${data.image}"class="card-img-top"  alt="...">
                <div class="card-body">
                  <h5 class="card-title">${data.name}</h5>
                  <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" class="bi bi-currency-euro" viewBox="0 0 16 16">
                    <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936q-.002-.165.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.6 6.6 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"/>
                  </svg>${data.price}</p>
                  <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                  </svg><svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                  </svg><svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                  </svg><svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                  </svg>${data.review}</p>
                </div>
              </div>
                 </div>`
        section += row;
    })
    dish.innerHTML=section;
    updatevalue();
    updateTable();
    updateWishlistTable()
}
looping()
function adding(index) {
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Fix this line
  var existingItem = cartItems.find(item => item.name === Product[index].name);

  if (existingItem) {
      existingItem.quantity += 1;
  } else {
      Product[index].quantity = 1;
      cartItems.push(Product[index]);
  }

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  updatevalue();
  updateTable();
}
looping()

function updatevalue(){
        var cartItems=JSON.parse(localStorage.getItem('cartItems')) || [];
        var totalcount=cartItems.reduce((total,item)=>total+item.quantity,0)  
        document.querySelector('.to').innerHTML=totalcount;
}
looping()
function updateTable(){
       var cartItems=JSON.parse(localStorage.getItem('cartItems')) ||[];
       var tbody = document.querySelector('.tbody')
       var loop="";
       cartItems.forEach(function(item,index)
       {
           var row=`<tr>
                     <td>${item.name}</td>
                     <td><img src="${item.image}" alt="${item.name}" style="width:20vw; height:30vh;"></td>
                     <td><button onclick="dec(${index})"class="inc1" >-</button>
                    ${item.quantity}
                     <button onclick="inc(${index})" class="inc1" >+</button></td>
                     <td>${item.price * item.quantity}</td>
                    </tr>`;
          loop += row;
       })
        tbody.innerHTML=loop;
}
looping()

function inc(index){
     var cartItems=JSON.parse(localStorage.getItem('cartItems')) ||[];
     cartItems[index].quantity += 1;
     const price=cartItems[index].price*cartItems[index].quantity;
     localStorage.setItem('cartItems',JSON.stringify(cartItems));
    //  updatevalue();
     updateTable();
  
}
function dec(index){
  var cartItems=JSON.parse(localStorage.getItem('cartItems')) ||[];
  cartItems[index].quantity -=1;
 
  // updatevalue();
   if (cartItems[index].quantity > 1) {
      cartItems[index].quantity -= 0;
     }
     localStorage.setItem('cartItems',JSON.stringify(cartItems));
  updateTable();
}
looping()

function wish(index){
  var wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
  // Fix this line
  var existingItem = wishlistItems.find(item => item.name === Product[index].name);
  if (existingItem) {
      alert("Already in Wishlist!");
  }
   else {
      wishlistItems.push(Product[index]);
      localStorage.setItem('wishlistItems',JSON.stringify(wishlistItems))
      alert("Added to Wishlist!");
  }
  updateWishlist();
}
looping()
updateWishlistTable()
  function updateWishlistTable(){
    var wishlistItems=JSON.parse(localStorage.getItem('wishlistItems')) ||[];
    var wishlistTable = document.querySelector('.wishlistTable');
    var current="";
    wishlistItems.forEach(function(item,index){
      current +=`<div class="col-md-3 mb-4">
                   <div class="card" style="width:18rem;">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-tittle">${item.name}</h5>
                        <p class="card-text"><b>Price: ${item.price}</b></p>
                        <button class="btn btn-danger" onclick="removeFromWishlist(${index})">Remove</button>
                    </div>  
                   </div>
                </div>` 
    })
    if(wishlistTable){
       wishlistTable.innerHTML = current;
    }
   }
looping()
function removeFromWishlist(index){
         var wishlistItems=JSON.parse(localStorage.getItem('wishlistItems'))||[];
         wishlistItems.splice(index,1);
         localStorage.setItem('wishlistItems',JSON.stringify(wishlistItems))
         updateWishlistTable();
}
looping()




