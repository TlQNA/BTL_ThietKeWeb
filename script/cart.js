function formatCurrency(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function parseFormattedNumber(formattedNumber) {
  return parseFloat(formattedNumber.replace(/,/g, ''));
}

var temparr =  JSON.parse(localStorage.getItem("cart"))||[]


let handling = 150000;
const displaycart = (temparr) => {
  let subtotal = 0;
  
  let grandtotal = 0;
  document.getElementById("cart-div").innerHTML = null;
 temparr.map((elem,index)=>{
  let cartdiv = document.createElement("div");
  cartdiv.setAttribute("class","cart-items");

  let imagediv = document.createElement("div");
  let imag = document.createElement("img");
  imag.src = elem.prodimg;
  imagediv.append(imag)

  let detailsdiv = document.createElement("div")

  let categ = document.createElement("p")
  categ.innerHTML = elem.prodcat

  let title = document.createElement("p")
  title.innerHTML = elem.prodtitle

  let remove = document.createElement("button")
  remove.innerHTML = "Remove"
  remove.setAttribute = ("class","remove-button")
  detailsdiv.append(title,categ,remove)

  remove.addEventListener("click", function(){
    removeitem(index)
    
  })
 



  let pricediv = document.createElement("div")
  let price = document.createElement("p");
  price.innerHTML = formatCurrency(elem.prodprice) + "đ";
  pricediv.append(price);

  grandtotal += parseFormattedNumber(elem.prodprice);
  
  grand(grandtotal);

  cartdiv.append(imagediv,detailsdiv,pricediv)
  
  document.getElementById("cart-div").append(cartdiv)
  
 })
}

  const grand = (grandtotal) => {
    var subtot = grandtotal
    document.getElementById("subtotal").textContent = formatCurrency(subtot) + "đ";
    var grandtotal = grandtotal + handling;
    document.getElementById("grandtotal").textContent = formatCurrency(grandtotal) + "đ";
  
    localStorage.setItem("totalamount", grandtotal);
  
  }



  displaycart (temparr)
function removeitem(index){
  temparr.splice(index,1)
  displaycart (temparr)  
  localStorage.setItem("cart",JSON.stringify(temparr))
  
}

document.getElementById("cart-checkout").addEventListener("click",toCheckOutPage)


function toCheckOutPage(){
  window.location.href = "/Pages/checkout.html"
}