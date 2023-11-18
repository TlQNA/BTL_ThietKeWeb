
    var product = JSON.parse(localStorage.getItem("product"));

    var cart_data = JSON.parse(localStorage.getItem("cart")) || [];
                console.log(cart_data);

    var wishlist_data = JSON.parse(localStorage.getItem("wishlist")) || [];

    showProduct(product);

    function showProduct({catprod, desprod, imageprod, priceprod, titleprod}){
        var body= document.querySelector("#Product_show_main_div");
            body.innerHTML = null;

        var image = document.createElement("img");
            image.setAttribute("src", imageprod);
            image.setAttribute("id", "product_show_image");

        var div = document.createElement("div");
            div.setAttribute("id", "product_show_div")

        var title = document.createElement("h1");
            title.innerText = titleprod;
            title.id = "product_show_title"

        var price = document.createElement("h3");
            price.innerText =priceprod+ "đ";
            price.id = "product_show_price";

        var tax = document.createElement("p");
            tax.innerText = "(Incl. of taxes and duties)";
            tax.id = "product_show_tax";

        var addcart = document.createElement("button");
            addcart.textContent = "Add to cart";
            addcart.id = "product_show_add_to_cart_button";
            addcart.addEventListener("click", function(event){
                event.preventDefault();
                var obj = {
                    prodtitle: titleprod,
                    prodcat: catprod,
                    proddes: desprod,
                    prodimg: imageprod,
                    prodprice: priceprod,
                }
                cart_data.push(obj);
                localStorage.setItem("cart", JSON.stringify(cart_data));
            })

        var wishlist = document.createElement("button");
            wishlist.textContent = "Favourite";
            wishlist.id = "product_show_wishlist_button";
            wishlist.addEventListener("click", function(event){
                event.preventDefault();

                var obj = {
                    prodtitle: titleprod,
                    prodcat: catprod,
                    proddes: desprod,
                    prodimg: imageprod,
                    prodprice: priceprod,
                }

                wishlist_data.push(obj);
                localStorage.setItem("wishlist", JSON.stringify(wishlist_data));
            })

        var br = document.createElement("br")
            

        var description = document.createElement("p");
            description.innerText = desprod;
            description.id = "product_show_description";

        document.title = titleprod+", Nike IN";

        div.append(title, price, tax, addcart, br, wishlist, description);

        body.append(image, div);
    }

    var similarProduct = [
        {
            prodtitle: "Nike Air Zoom Alphafly NEXT% Flyknit Ekiden",
            prodimg: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/40c3c2d4-7449-43dc-9b44-e3ad58181da8/air-zoom-alphafly-next-flyknit-ekiden-road-racing-shoes-ZgldSQ.png",
            prodprice: 25095
        },
        {
            prodtitle: "Nike Air Zoom Pegasus 38 Ekiden",
            prodimg: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b72aa81e-f334-43d2-8e40-3ad10d382e7f/air-zoom-pegasus-38-ekiden-road-running-shoes-0z837x.png",
            prodprice: 11495
        },
        {
            prodtitle: "Nike Air Zoom Alphafly NEXT% Flykint",
            prodimg: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4311a6fc-8436-4bc5-81aa-ae70c1bfbb42/air-zoom-alphafly-next-flyknit-road-racing-shoes-Wd4lk6.png",
            prodprice: 22795
        },
        {
            prodtitle: "Nike Metcon 7 X",
            prodimg: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fcd7acb3-e5fa-4305-9857-63891e317aa1/metcon-7-training-shoe-n9kDR9.png",
            prodprice: 9197
        },
        {
            prodtitle: "Nike Metcon 7",
            prodimg: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/561d3126-f85e-4e1b-9e98-8945f158617a/metcon-7-training-shoes-knCh3v.png",
            prodprice: 11495
        },
        {
            prodtitle: "Nike React Infinity Run Flyknit 2",
            prodimg: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/aacc05b7-ce69-42cb-b28f-b9ca39e6031d/react-infinity-run-flyknit-2-road-running-shoes-9hhcGc.png",
            prodprice: 11597
        },
        {
            prodtitle: "Nike Air Monarch IV",
            prodimg: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/uirypqqxq83mwcjbf9ej/air-monarch-iv-training-shoe-cc3XbD.png",
            prodprice: 5295
        },
        {
            prodtitle: "Nike Air More Uptempo '96",
            prodimg: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ls18t4crkxjbr3fysf6r/air-more-uptempo-96-shoes-KwM99n.png",
           prodprice: 14495
        },
        {
            prodtitle: "Nike Air Max Pre-Day",
            prodimg: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d8a4fead-8f49-44a6-ae63-1ffeb86ac68b/air-max-pre-day-shoes-jMh2rB.png",
           prodprice: 11495
        },
        {
            prodtitle: "Air Jordan4 Retro",
            prodimg: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f0c6bdc2-b8fe-45f7-a76d-ae1bbf30e156/air-jordan-4-retro-shoe.png",
           prodprice: 15995
        },
        {
            prodtitle: "Nike Mercurial Valor 14 Elite FG",
            prodimg: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d50a987f-54ba-4af7-8897-e41fae964e53/mercurial-vapor-14-elite-fg-football-boots-GzzgK8.png",
            prodprice: 21995
        },
        {
            prodtitle: "Nike Air Sesh",
            prodimg: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/96a61df3-d699-4334-9fa8-6a1837d649ab/air-sesh-shoes-jCBMQW.png",
            prodprice: 9295
        },
        {
            prodtitle: "Nike Dynamo GO SE",
            prodimg: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/65245f16-e360-4c16-8b26-a6d8c381ef91/dynamo-go-se-shoes-L9PHDR.png",
            prodprice: 4295
        },
        {
            prodtitle: "Nike Air More Uptempo",
            prodimg: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7136f8e8-a37c-4e78-9aaf-edbebada75a3/air-more-uptempo-shoes-7fsS55.png",
            prodprice: 6095
        },
        {
            prodtitle: "Sky Jordan 1",
            prodimg: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/14ce6f03-a127-41ff-a952-e1f14d0edc77/sky-jordan-1-and-shoe-td3n17.png",
            prodprice: 3495
        },
        {
            prodtitle: "Jordan 1 Retro High OG",
            prodimg: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c506f4ab-d519-4576-9471-b54ff2282090/jordan-1-retro-high-og-shoes.png",
            prodprice: 4495
        },
        {
            prodtitle: "Nike Kawa",
            prodimg: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a2432279-f957-4401-abab-715714e9bb9a/kawa-slides-tCXlrc.png",
            prodprice: 1395
        },
        {
            prodtitle: "Nike Star Runner 3 SE",
            prodimg: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bf7010ab-4ff3-4790-9c54-a39711c7e8d2/star-runner-3-se-shoes-Q2RVNH.png",
            prodprice: 3495
        }
    ]
    setTimeout(showMoreSimilar(similarProduct), 2000);

    function showMoreSimilar(similarProduct){
        var p1 = Math.floor(Math.random() * (6 - 0) + 0);
        var p2 = Math.floor(Math.random() * (12 - 6) + 6);
        var p3 = Math.floor(Math.random() * (similarProduct.length - 12) + 12)

        console.log("product index:", p1, p2, p3);

        var pdata =[];

        pdata.push(similarProduct[p1]);
        pdata.push(similarProduct[p2]);
        pdata.push(similarProduct[p3]);

        var body = document.querySelector("#product_show_more_similar_products_show");
            body.innerHTML = null;

        pdata.forEach(({prodtitle, prodimg, prodprice})=>{
            var div = document.createElement("div");

            var image = document.createElement("img");
                image.src = prodimg;
                image.setAttribute("class", "similar_product_image")

            var title = document.createElement("h2");
                title.innerText = prodtitle;

            var price = document.createElement("p");
                price.innerText =prodprice+"đ";

            div.append(image, title, price);

            body.append(div);
        })
    };
