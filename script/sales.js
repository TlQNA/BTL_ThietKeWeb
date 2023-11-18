function getdata(product,location) 
{
    location.innerHTML = ""; 
    product.forEach(elem => { 
             
        let product_box = document.createElement("div"); 
        // Product Show Page on click
        product_box.addEventListener("click",(event) => { 

            let obj = { 
                titleprod: elem.name,
                imageprod: elem.image,
                desprod: elem.description,
                catprod: elem.category,
                priceprod: elem.price
            };
    
            localStorage.setItem("product", JSON.stringify(obj)); 
    
            window.location.href = "product_show.html"; 
        });

        let image_box = document.createElement("div"); 
        image_box.setAttribute("id","image_box");

        let image = document.createElement("img"); 
        image.src = elem.image; 

        let content_box = document.createElement("div");
        content_box.setAttribute("id","content_box"); 

        let name = document.createElement("h5"); 
        name.textContent = elem.name;

        let category = document.createElement("p");
        category.textContent = elem.category;

        let price = document.createElement("p");
        price.textContent = elem.price;

        image_box.append(image); 
        content_box.append(name,category,price);
        product_box.append(image_box,content_box); 
        location.append(product_box); 
    })
}
function filter_cat(data,main,location,name) 
{                                           
    let section = document.createElement("div");
    section.style.cssText = ` 
    display:flex;
    height:35px;
    border:1px ridge;
    padding-top:2%;`; 

    let button = document.createElement("button"); 

    button.style.cssText = 
    `margin:0% 4% 0% 5%;
    height:20px;
    width:20px;
    border-radius:5px;
    background:white;
    border:1px solid black`; 
    let sec_name = document.createElement("span");
    sec_name.textContent = name; 

    button.addEventListener("click",() => 
    {
        event.target.style.background = "black";  
 
        setTimeout(function(){  
            button.style.background = "white"; 
        },800)

       let products = data.filter(function(elem) 
        {
            let word = event.target.nextSibling.textContent; 
            let include = elem.category; 
            let has = include.includes(word); 

            if( has == true) 
            {
                return include; 
            }
        })
        let place = document.querySelector("#sale_products"); 
        getdata(products,place);

    })

    section.append(button,sec_name);

    location.append(section);
    main.append(location); 
}

export {getdata,filter_cat};