function formatCurrency(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function setdata()
{          
    // details of products

    function nike_sale_products(image,name,category,price,desc)
    {
        this.image = image,
        this.name = name,
        this.category = category,
        this.price = price
        this.description = desc
    }
    let lebron_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/61e77bc0-098d-4f96-9351-de623bf84336/lebron-space-jam-a-new-legacy-older-t-shirt-dBpgK2.png";
    let lebron_desc = `The LeBron T-Shirt celebrates the release of your new favourite sports and family adventure 
                        movie, Space Jam: A New Legacy, with graphics featuring LeBron James and your favourite 
                        animated characters back to play ball.It's game time!`
    let lebron = new nike_sale_products(lebron_url,"LeBron x Space Jam:A New Legacy","Kids Shirts",formatCurrency(100000),lebron_desc)

    let waffle_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/55e448bd-3e2a-4af9-81f9-d69a9947975e/waffle-one-shoes-1SFQwJ.png";
    let Waffle_desc = `Bringing a new look to the iconic Waffle franchise, the Nike Waffle One balances everything 
                        you love most about heritage Nike running with fresh innovations.Its new durable plastic
                        heel clip adds energy, while a mixture of transparent mesh and luscious suedes get you ready 
                        for summertime.The new springy midsole features the classic wedge shape while the updated 
                        Waffle outsole provides a level of support and traction you have to feel to believe.`
    let Waffle = new nike_sale_products(waffle_url,"Nike Waffle One","Men's Shoes",formatCurrency(100000),Waffle_desc)

    let paris_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c1a35118-32c2-46cb-8d38-146ed6da4277/paris-saint-germain-logo-t-shirt-PkTBzc.png";
    let paris_desc = `Signal your pride for Paris Saint-Germain in this logo T-Shirt from Jordan Brand.
                        It's made from soft, lightweight cotton.The tee has an oversized back graphic and 
                        olours inspired by the club's home kit on select versions.`
    let paris = new nike_sale_products(paris_url,"Nike Saint-Germain","Men's Shirts",formatCurrency(100000),paris_desc)

    let tiempo_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6ab28540-ecfb-4a3e-a758-a4068acfc5ee/tiempo-legend-9-club-mg-multi-ground-football-boot-LQpr2X.png";
    let tiempo_desc = `1 of our lightest Tiempos to date, the Nike Tiempo Legend 9 Club MG lets you go on the 
                        offensive with a low-profile design that's reinvented for attackers.The upper has raised 
                        textures backed by soft foam pods for precise dribbling, passing and shooting, while studs 
                        on the bottom provide traction for quick cuts and sudden stops.`
    let tiempo = new nike_sale_products(tiempo_url,"Nike Tiempo Legend 9 Club MG","Men's Shoes",formatCurrency(100000),tiempo_desc )

    let trophy_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7d0059f8-a2f0-4afd-bee4-38c6fa266fde/dri-fit-trophy-older-graphic-training-top-klrNC8.png";
    let trophy_desc = `Breathable, soft and lightweight, the Nike Dri-FIT Trophy Top is an absolute winner. 
                        This active tee has sweat-wicking power to help you stay dry while you run, skip and 
                        jump through your day.`
    let trophy = new nike_sale_products(trophy_url,"Nike Dri-FIT Trophy","Kids Shirts",formatCurrency(100000),trophy_desc)

    let crator_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/db60dd15-c9f6-42ca-8047-7f6a6109191b/crater-remixa-shoes-fX2fDZ.png";
    let crator_desc = `Today's world brings choices. That's why we've decided to keep sustainability in mind to 
                        create this running staple. Bridging futuristic details with a fresh design, the Nike Crater
                        Remixa is made from at least 20% recycled material by weight. The Crater Foam midsole feels
                        like you're walking on clouds while the upper lets you dress for the occasion.`
    let crator = new nike_sale_products(crator_url,"Nike Crater Remixa","Men's Shoes",formatCurrency(100000),crator_desc)

    let sportwear_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a40fcdbc-d7f6-45da-bdb1-307c9b79ff2f/sportswear-boxy-t-shirt-c5DCWh.png";
    let sportwear_desc = `The Nike Sportswear T-Shirt is made from a midweight cotton and has a boxy fit.
                            The printed graphic features artwork by Machine for the Nike 
                            Artist-in-Residence (A.I.R.)Collection.`
    let sportwear = new nike_sale_products(sportwear_url,"Nike Sportswear","Women's Shirts",formatCurrency(100000),sportwear_desc)

    let offcourt_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fb342345-0191-4df3-b5b0-9995cad43640/offcourt-slides-kJDhS7.png";
    let offcourt_desc = `Featuring Revive Foam, a super-soft foam designed to help you relax and recharge, the 
                        unrelenting comfort of the Nike Offcourt Slide is sensational.The innovative dual-layered
                        foam and soft jersey lining on the strap ensure a gratifying full-foot experience.
                        The iconic Air Force 1 pivot circle outsole and block lettering on the strap casually nod 
                        to heritage hoops.`
    let offcourt = new nike_sale_products(offcourt_url,"Nike Offcourt","Women's Shoes",formatCurrency(100000),offcourt_desc)

    let revolution_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a467ac53-cc37-4581-b972-c82a69ce007b/revolution-5-road-running-shoes-8P3bh3.png";
    let revolution_desc = `When the road beckons, answer the call in a lightweight pair that'll keep you moving 
                            mile after mile. Soft foam cushions your stride and a reinforced heel delivers a smooth,
                            stable ride. Crafted from knit material for breathable support, while a minimalist design
                            fits in just about anywhere your day takes you.`
    let revolution = new nike_sale_products(revolution_url,"Nike Revolution 5","Women's Shoes",formatCurrency(100000),revolution_desc)

    let legend_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ef59116-eb8b-4a6f-bab1-5afd887a9239/dri-fit-legend-training-t-shirt-lG9Aj8.png";
    let legend_desc = `The Nike Dri-FIT Legend T-Shirt is an essential layer with an odour-resistant finish that helps 
                        keep you fresh through workouts at any level. Lightweight fabric breathes and wicks sweat 
                        so you stay cool and dry from warm-ups well into the after-burn.`
    let legend = new nike_sale_products(legend_url,"Nike Dri-FIT Legend","Men's Shirts",formatCurrency(100000),legend_desc )


    let legacy_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3233194a-e117-4ff0-b4da-e7b1cb0dfe50/nikecourt-legacy-mule-zFdB7h.png";
    let legacy_desc  = `Ease into a slip-on, pro-level design that feels off-court relaxed.The canvas front looks 
                        like your favourite court shoe but the dropped heel lets you slip your foot in easily.
                        Step away from the net and into a shoe where competition meets casual.`
    let legacy = new nike_sale_products(legacy_url,"NikeCourt Legacy","Women's Shoes",formatCurrency(100000),legacy_desc)

    let jordan_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/136222bb-225a-4048-a25e-2afc81bf332e/jordan-4-retro-younger-shoes.png";
    let jordan_desc = `Naturally, this bold Air Jordan 4 will be easy to spot in the streets. Featuring a classic 
                        full-grain nubuck leather upper in Tour Yellow with Dark Blue Grey accents and a white 
                        midsole, this colourway is perfectly coordinated for striking fits—just let the sneakers 
                        do all the talking. If you couldn't feel the energy enough from the pictures alone, 
                        these Air Jordan 4s are certainly loud enough for any show-stopping event.`
    let jordan = new nike_sale_products(jordan_url,"Nike Jordan 4 Retro","Kids Shoes",formatCurrency(100000),jordan_desc)

    let academy_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ac81615-a189-4a79-bef8-ae636306bf2e/dri-fit-academy-older-short-sleeve-football-top-JFSSPT.png";
    let academy_desc = `The Nike Dri-FIT Academy Top is a football staple designed for everyday training.
                        It combines smooth, sweat-wicking fabric with mesh panels to help keep you cool in the heat
                        of the game.This product is made from 100% recycled polyester fibres.`
    let academy = new nike_sale_products(academy_url,"Nike Dri-FIT Academy","Kids Shirts",formatCurrency(100000),academy_desc)

    let giannis_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc9a6d70-7ec3-4412-a9f5-fd2e7d463200/giannis-immortality-older-basketball-shoes-kxlTDf.png";
    let giannis_desc = `The future of basketball is positionless, and nobody embodies this evolution like MVP 
                        Giannis Antetokounmpo.The Giannis Immortality is a game shoe for players who love Giannis's 
                        multi-dimensional game and want a piece of his freaky style.`
    let giannis = new nike_sale_products(giannis_url,"Giannis Immortality","Kids Shoes",formatCurrency(100000),giannis_desc)

    let white_sportwear_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4c016fbb-bebd-483a-9124-24a8224575bb/sportswear-older-t-shirt-spsZBB.png";
    let white_sportwear_desc = `Inspired by '90s cleaning ads, this top is the one to wear with your favourite kicks
                                to feel extra fresh.`
    let white_sportwear = new nike_sale_products(white_sportwear_url,"Nike Sportswear","Kids Shirts",formatCurrency(100000),white_sportwear_desc)

    let sunray_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bc9be7a-5cff-469a-9008-6f86a8aa7ac7/sunray-protect-2-younger-sandal-kxrqx3.png";
    let sunray_desc = `The Nike Sunray Protect 2 has a quick-drying design, so kids are free to jump, skip and 
                        splash. It has a thin, soft sole with rubber on the bottom for traction when it's wet. 
                        A strap on either side gives it a secure fit and makes it easy and fast to get it on and off.`
    let sunray = new nike_sale_products(sunray_url,"Nike Sunray Protect 2","Kids Shoes",formatCurrency(100000),sunray_desc)

    let air_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/93367bed-4b51-4fd1-87a0-3d76b77a2894/air-velour-1-4-zip-long-sleeve-top-Z5DkKm.png";
    let air_desc = `An elegant spin on a classic staple, the Nike Air 1/4-Zip Top is made from soft velour fabric 
                    covered in an all-over-embossed Nike Air pattern. Its tight fit features a modest crop that 
                    falls at your hips for a carefree look that's both fun and functional.`
    let air = new nike_sale_products(air_url,"Nike Air","Women's Shirts",formatCurrency(100000),air_desc)

    let phantom_url = "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6a3ebd39-b4fb-4f73-be41-8ce291c46721/jr-phantom-gt2-academy-mg-younger-older-multi-ground-football-boot-H8ll29.png";
    let phantom_desc = `Building on the Phantom GT, the Nike Jr. Phantom GT2 MG has an updated design and 
                        patterning that are engineered to help you place your shots with pinpoint accuracy.
                        Off-centre lacing provides a clean strike zone to help you dribble, pass and score with 
                        precision.`
    let phantom = new nike_sale_products(phantom_url,"Nike Jr. Phantom GT2 Academy MG","Kids Shoes",formatCurrency(100000),phantom_desc)

    let max90_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/911b97e3-eb38-4aef-9013-7ff2a3cd7fef/sportswear-max90-t-shirt-qPnlmH.png";
    let max90_desc = `The Nike Sportswear Max90 T-Shirt drapes you in comfort. Longer sleeves and a roomy fit 
                        through the body and hips give this Max90 tee a relaxed and casual look.`
    let max90 = new nike_sale_products(max90_url,"Nike Sports Max90","Men's Shirts",formatCurrency(100000),max90_desc)

    let clash_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c29cd46d-31ad-41ab-bd93-f505856d5ce7/sportswear-icon-clash-short-sleeve-dress-PgXrgd.png";
    let clash_desc = `An elegant spin on a classic staple, the Nike Air 1/4-Zip Top is made from soft velour fabric 
                        covered in an all-over-embossed Nike Air pattern. Its tight fit features a modest crop that 
                        falls at your hips for a carefree look that's both fun and functional.`
    let clash = new nike_sale_products(clash_url,"Nike Sportwear Icon Clash","Women's Shirts",formatCurrency(100000),clash_desc)

    let force_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4443e39d-c7b3-41b2-a4db-3029454c7e57/air-force-1-07-essential-shoes-4DfNJF.png"
    let force_desc = `The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin 
                    on what you know best: stitched overlays, bold details and the perfect amount of hoops style 
                    to make heads turn.`
    let force = new nike_sale_products(force_url,"Nike Air Force 1 '07 Essential","Women's Shoes",formatCurrency(100000),force_desc)

    let miler_url = "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ab7fd318-7e87-4941-81ef-27683ecefab5/dri-fit-miler-wild-run-short-sleeve-printed-running-top-3PksHG.png"
    let miler_desc = `Get inspiration for your daily route from the Nike Dri-FIT Miler Wild Run Top. A graphic 
                        pushing you to "Keep the Lights On" is printed on the front. Lightweight and mobile, 
                        it offers a soft feel for your journey.`
    let miler = new nike_sale_products(miler_url,"Nike Dri-FIT Miler Wild Run","Men's Shirts",formatCurrency(100000),miler_desc)

    let fleece_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9f3133a1-1eff-4cbc-9390-70f3f4ad4f75/air-mock-fleece-sjlNRG.png"
    let fleece_desc = `The Nike Air Mock is a cropped fleece style that sits at your hips for a comfortable 
                        feel and easy styling.Its roomy fit features a mock-neck design and curved blocking 
                        inspired by movement.The blocking details and Air graphic are accented with a printed 
                        outline.`
    let fleece = new nike_sale_products(fleece_url,"Nike Air","Women's Shirts",formatCurrency(100000),fleece_desc)

    let black_tshirt_url = "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c3da821d-96ce-40e1-bbc6-d8d6dda375c7/sportswear-boyfriend-t-shirt-4S8Ffd.png"
    let black_tshirt_desc = `The Nike Sportswear T-Shirt is made from soft cotton in a comfortable boyfriend 
                            fit.Stacked graphics offer added texture and a trendy '90s look.This product is made 
                            from at least 75% organic cotton fibres.`
    let black_tshirt = new nike_sale_products(black_tshirt_url,"Nike Sportswear","Women's Shirts",formatCurrency(100000),black_tshirt_desc)


    let terry_url = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6e04a75a-7c53-4f1c-abfd-46400627c648/sportswear-older-french-terry-pullover-hoodie-J1DPxS.png"
    let terry_desc = `Colourful, comfy and classic—the Nike Sportswear Hoodie is the pullover you know and 
                        love.The soft knit feel is lightweight and warm, making this a staple for anyone's 
                        wardrobe.`
    let terry = new nike_sale_products(terry_url,"Nike Sportswear","Kids Shirts",formatCurrency(100000),terry_desc)

    let short_url = "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/40833b3d-b747-4a59-9f55-ac70ee4a6d68/older-short-sleeve-football-top-qKnsBF.png"
    let short_desc = `The Nike Top has a camo print on sweat-wicking fabric to help keep you dry when your 
                        training heats up. This product is made from 100% recycled polyester fibres.`
    let short = new nike_sale_products(short_url,"Nike Short sleeve","Kids Shirts",formatCurrency(100000),short_desc)

    let flyknit_url = "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ca5c50ec-79ac-4f36-824d-8d2c90b5ffe1/air-force-1-crater-flyknit-older-shoe-SVjXLc.png"
    let flyknit_desc = `The Nike Air Force 1 Crater Flyknit updates classic b-ball style with at 
                        least 20% recycled content by weight.Super-airy Flyknit material feels 
                        breathable and stretchy around your foot.The speckled sole ups the 
                        legendary comfy style that lets you give a little back with every step.`
    let flyknit = new nike_sale_products(flyknit_url,"Nike Air Force 1 Crater Flyknit","Kids Shoes",formatCurrency(100000),flyknit_desc)

    let products = [lebron, Waffle,paris,tiempo,trophy,crator,sportwear,short,offcourt,terry,revolution,
                    legend,legacy,jordan,academy,fleece, giannis,white_sportwear,flyknit,sunray,air,phantom,
                    max90,clash,force,miler,black_tshirt]
    localStorage.setItem("sales_products",JSON.stringify(products))
}



export default setdata 

