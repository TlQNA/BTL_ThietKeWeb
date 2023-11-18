link_pages()

function link_pages()
{
    document.querySelector("#join_us_nav_bar").addEventListener("click",()=>
    {
        window.location.href = "/Pages/join_us.html"
    })
    
    document.querySelector("#sign_in_nav_bar").addEventListener("click",()=>
    {
        window.location.href = "/Pages/sign_in.html"
    })

    document.querySelector("#men_page_nav_bar").addEventListener("click",()=>
    {
        window.location.href = "/Pages/men.html"
    })
    document.querySelector("#women_page_nav_bar").addEventListener("click",()=>
    {
        window.location.href = ""
    })
    document.querySelector("#kid_page_nav_bar").addEventListener("click",()=>
    {
        window.location.href = "/Pages/kids.html"
    })
    document.querySelector("#customize_page_nav_bar").addEventListener("click",()=>
    {
        window.location.href = "/Pages/customize.html"
    })
    document.querySelector("#sale_page_nav_bar").addEventListener("click",()=>
    {
        window.location.href = "/Pages/sales.html"
    })
    document.querySelector("#snkrs_page_nav_bar").addEventListener("click",()=>
    {
        window.location.href = "/Pages/sneakersfeed.html"
    })
}

var phone = window.matchMedia("(max-width: 414px)");
    navbar(phone);
    phone.addListener(navbar);

    function navbar(phone){
        if(phone.matches){
            var phone_div = document.querySelector(".center");
                phone_div.style.display = "none";

            var body = document.querySelector("#center_phone");
                body.innerHTML = null;

            var sel = document.createElement("select");
                sel.setAttribute("style", "-webkit-appearance: none;");

            var op1 = document.createElement("option");
                op1.text = "|||";

            var op2 = document.createElement("option");
                op2.text = "Favorite";

            var op3 = document.createElement("option");
                op3.text = "Cart";

            var op4 = document.createElement("option");
                op4.text = "Men";

            var op5 = document.createElement("option");
                op5.text = "Women";

            var op6 = document.createElement("option");
                op6.text = "Kids";

            var op7 = document.createElement("option");
                op7.text = "Customise";
    
            var op8 = document.createElement("option");
                op8.text = "Sales";

            var op9 = document.createElement("option");
                op9.text = "SNKRS";

            sel.add(op1)
            sel.add(op2)
            sel.add(op3)
            sel.add(op4)
            sel.add(op5)
            sel.add(op6)
            sel.add(op7)
            sel.add(op8)
            sel.add(op9)

            body.append(sel);

            sel.addEventListener("change", () => {
                
                let sel_value = event.target.value
                
                if(sel_value == "Favorite")
                {
                    window.location.href = "/Pages/wishlist.html"
                }
                else if(sel_value == "Cart")
                {
                    window.location.href = "/Pages/cart.html"
                }
                else if(sel_value == "Men")
                {
                    window.location.href = "/Pages/men.html"
                }
                else if(sel_value == "Women")
                {
                    window.location.href = "/Pages/women.html"
                }
                else if(sel_value == "Kids")
                {
                    window.location.href = "/Pages/kids.html"
                }
                else if(sel_value == "Customise")
                {
                    window.location.href = "/Pages/customize.html"
                }
                else if(sel_value == "Sales")
                {
                    window.location.href = "/Pages/sales.html"
                }
                else if(sel_value == "SNKRS")
                {
                    window.location.href = "/Pages/sneakersfeed.html"
                }
            })
        }
        else{
            document.querySelector(".center").style.display = "flex";
        }
    }

