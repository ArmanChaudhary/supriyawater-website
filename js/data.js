// ========================================
// SUPRIYA WATER TECHNOLOGY - ALL DATA
// ========================================
// Edit all content directly in this file

// ========================================
// PRODUCTS (20 items)
// ========================================
const products = [
    // DOMESTIC PURIFIERS
    {
        id: 105,
        name: "Flavia Galaxy RO Purifier",
        category: "Domestic Purifier",
        price: "NPR 26,700",
        image: "https://i.postimg.cc/Dy4HYW72/IMG-20230121-203408-871.jpg",
        description: "Galaxy Alkaline RO Purifier provides pure, mineral-rich and healthy drinking water with advanced RO purification and alkaline technology for better taste.",
        specs: "Alkaline RO+UV+UF+TDS | 10 to 12L Storage | 15 LPH | Food Grade ABS Body | Wall/Table Mount | Auto Cut-Off & Mineral Retention."
    },
    {
        id: 2,
        name: "Flavia Classic RO Purifier",
        category: "Domestic Purifier",
        price: "NPR 24,900",
        image: "https://i.postimg.cc/VsTcPvcQ/product.png",
        description: "Flavia Classic RO Purifier delivers pure, safe and great-tasting drinking water with advanced filtration, reliable performance and elegant design for home and commercial use.",
        specs: "RO+UV+TDS Controller | 10 to 12L Storage | 15 LPH | Food Grade ABS Body | Wall/Table Mount | Auto Cut-Off & Purity Indicator."
    },
    {
        id: 3,
        name: "FLavia Alkasure RO Purifier",
        category: "Domestic Purifier",
        price: "NPR 22,200",
        image: "https://i.postimg.cc/zfXJXQtF/product-(2).png",
        description: "Alkasure RO Purifier delivers clean, safe and refreshing drinking water with advanced RO and UF purification, ensuring reliable performance and great taste for everyday use.",
        specs: "RO+UF+TDS Controller | 10 to 12L Storage | 15 LPH | Food Grade ABS Body | Wall/Table Mount | Auto Cut-Off & Low Maintenance."
    },
    {
        id: 4,
        name: "50LPH RO Water Purifier",
        category: "RO Plant",
        price: "Contact for Price",
        image: "https://i.postimg.cc/c4njwctN/product-(1).png",
        description: "50 LPH RO Plant is designed to deliver pure and safe drinking water with efficient filtration, reliable performance and durable construction, ideal for offices, schools, restaurants and commercial use.",
        specs: "50 LPH Capacity | RO Filtration | Heavy Duty Pump | Stainless Steel Body | Fully/Semi Automatic | Low Maintenance & Commercial Use."
    },
    {
        id: 5,
        name: "100LPH RO Water Purifier",
        category: "RO Plant",
        price: "Contact for Price",
        image: "https://static.wixstatic.com/media/55eb38_322881ee48e64305bf4b8167b171000f~mv2.png/v1/fill/w_320,h_320,q_90,enc_avif,quality_auto/55eb38_322881ee48e64305bf4b8167b171000f~mv2.png",
        description: "100 LPH RO Plant delivers high-quality purified water with advanced filtration, durable construction and dependable performance, ideal for commercial and institutional water purification needs.",
        specs: "100 LPH Capacity | RO Filtration | Heavy Duty Pump | Stainless Steel Body | Fully/Semi Automatic | Efficient Purification & Commercial Use."
    },
    {
        id: 6,
        name: "250LPH RO Water Plant",
        category: "RO Plant",
        price: "Contact for Price",
        image: "https://i.postimg.cc/8kMkPLkv/product-(2).png",
        description: "250 LPH RO Plant is built for high-capacity water purification with efficient RO technology, sturdy construction and reliable performance, making it ideal for commercial and industrial applications.",
        specs: "250 LPH Capacity | Industrial RO Filtration | High Pressure Pump | Stainless Steel Body | Fully/Semi Automatic | High Recovery & Commercial/Industrial Use."
    },
    {
        id: 7,
        name: "500LPH RO Water Plant",
        category: "RO Plant",
        price: "Contact for Price",
        image: "https://i.postimg.cc/3w5n7Mtp/product-(4).png",
        description: "500 LPH RO Plant is engineered for large-scale water purification with powerful performance, advanced filtration and durable construction, ideal for commercial and industrial water treatment needs.",
        specs: "500 LPH Capacity | Industrial RO Filtration | High Pressure Pump | Stainless Steel Body | Fully/Semi Automatic | High Recovery & Commercial/Industrial Use."
    },
    {
        id: 8,
        name: "750LPH RO Water Plant",
        category: "RO Plant",
        price: "Contact for Price",
        image: "https://i.postimg.cc/yd5J4KTX/product-(5).png",
        description: "750 LPH RO Plant is designed for large-scale water purification with advanced RO technology, heavy-duty construction and consistent performance, suitable for high-demand commercial and industrial applications.",
        specs: "750 LPH Capacity | Industrial RO Filtration | High Pressure Pump | Stainless Steel Body | Fully/Semi Automatic | High Recovery & Commercial/Industrial Use."
    },
    {
        id: 9,
        name: "1000LPH - 12000LPH RO Plant",
        category: "RO Plant",
        price: "Contact for Price",
        image: "https://i.postimg.cc/wT5XCW1w/product.png",
        description: "1000 to 12000 LPH RO Plants are engineered for high-capacity water purification with advanced RO technology, heavy-duty construction and reliable performance, ideal for industrial, commercial and institutional water treatment applications.",
        specs: "1000 to 12000 LPH Capacity | Industrial RO Filtration | High Pressure Pump | Stainless Steel/MS Frame | PLC/Fully Automatic | High Recovery & Continuous Operation."
    },
    {
        id: 10,
        name: "RO Dispensing Unit",
        category: "RO Plant",
        price: "Contact for Price",
        image: "https://i.postimg.cc/9Qq8S66g/product-(2).png",
        description: "SS RO Water Dispenser is a heavy-duty stainless steel water dispensing system designed for high-demand usage, featuring multiple taps, hygienic storage and reliable purified water delivery for commercial and public applications.",
        specs: "4 Tap SS RO Water Dispenser | Stainless Steel Body | Inbuilt SS Tank | Floor Standing | Fast Dispensing | Hygienic & Low Maintenance."
    },
    {
        id: 11,
        name: "Water Treatment Plant",
        category: "Water Treatment Plant",
        price: "Contact for Price",
        image: "https://i.postimg.cc/t4TzF3gV/product-(1).png",
        description: "Water Treatment Plant is designed to treat and improve water quality by removing impurities, suspended particles and unwanted contaminants, ensuring safe and reliable water for industrial, commercial and domestic use.",
        specs: "Custom Capacity | Multi-Stage Water Treatment | SS/MS Skid Mounted System | Manual/Semi/Fully Automatic | Low Maintenance | Industrial & Commercial Use."
    },
    {
        id: 12,
        name: "Wastewater Treatment Plant",
        category: "Water Treatment Plant",
        price: "Contact for Price",
        image: "https://www.icimod.org/wp-content/uploads/2022/12/Sewage_treatment_plantSTP_IN_NCELL_BUILDING_2.jpg",
        description: "Supriya Water Technology offers advanced Wastewater Treatment Plants (WWTP) designed to effectively treat and recycle wastewater from industrial, commercial, and institutional facilities. Our systems utilize multi-stage treatment processes including filtration, chemical dosing, and purification to remove contaminants and ensure compliance with environmental standards. Built with durable SS/MS skid-mounted structures, these plants provide reliable performance, low maintenance, and efficient operation, making them ideal for industries, hotels, hospitals, schools, and commercial establishments.",
        specs: "Custom Capacity | Wastewater Treatment Plant (WWTP) | Filtration & Chemical Treatment | SS/MS Skid Mounted System | Automatic Operation | Industrial & Commercial Use."
    },
    {
        id: 13,
        name: "RO Dispensing Unit",
        category: "RO Plant",
        price: "Contact for Price",
        image: "https://i.postimg.cc/9Qq8S66g/product-(2).png",
        description: "SS RO Water Dispenser is a heavy-duty stainless steel water dispensing system designed for high-demand usage, featuring multiple taps, hygienic storage and reliable purified water delivery for commercial and public applications.",
        specs: "SS RO Water Dispenser with 4 Tap System | Durable Stainless Steel Body & Inbuilt SS Tank | Fast Multi-User Water Dispensing | Hygienic Storage & Low Maintenance | Ideal for Schools, Hospitals, Offices & Public Places."
    },
    {
        id: 14,
        name: "Raw Material for WTP",
        category: "Water Treatment Plant",
        price: "Contact for Price",
        image: "https://citywaterpurifier.com/wp-content/uploads/2022/02/frp-vessel.png",
        description: "We supply premium quality water treatment raw materials and spare parts designed for reliable performance, durability and efficient operation in RO and water purification systems.",
        specs: "MPV, FRP Vessels, RO Membranes & Filter Housings | High-Grade Water Treatment Components | Durable & Easy Installation | Compatible with Domestic, Commercial & Industrial Systems | Reliable Performance & Long Service Life."
    },
    {
        id: 15,
        name: "Solar Water Heater",
        category: "Others",
        price: "Contact for Price",
        image: "https://solara.am/assets/images/e6/e6be21_Solar-Water-Heater-400L.webp",
        description: "Solar Water Heater provides energy-efficient and eco-friendly hot water using solar energy, delivering reliable performance and reduced electricity costs for homes and commercial applications.",
        specs: "Solar Water Heater | Stainless Steel Insulated Tank | Solar Collector Technology | Energy Efficient & Eco-Friendly | Durable, Low Maintenance Design | Ideal for Homes, Hotels, Hospitals & Commercial Use."
    },
    {
        id: 16,
        name: "RO Purifier Spare",
        category: "RO Plant",
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2025/4/502595194/IU/EA/OM/17087235/water-purifier-raw-material.jpg",
        description: "We provide high-quality domestic RO purifier raw materials and spare parts designed for dependable performance, durability and smooth water purification system operation.",
        specs: "RO Spare Parts & Accessories | Membranes, Pumps, SMPS, Filters & Fittings | Premium Quality Components | Easy Installation & Long Service Life | Compatible with Most Domestic RO Purifiers."
    },
    {
        id: 17,
        name: "5th Stage RO Water Purifier",
        category: "RO Plant",
        price: "Contact for Price",
        image: "https://i5.walmartimages.com/seo/5-Stage-Reverse-Osmosis-System-Home-Clear-RO-Water-Filter-System-Under-Sink-Superb-Taste-Drinking-Water-Filter-MADE-IN-USA_a74fdcfe-2d05-42a6-95a6-8b5e53a6f9e9.8279a2222c8ce546e58ab2b398bfbb83.png",
        description: "5th Stage Filter is designed to enhance water taste and quality by providing final-stage filtration, ensuring fresh, clean and pleasant drinking water from your RO purifier.",
        specs: "RO 5th Stage Filter | Post Carbon Taste Enhancer | Improves Taste & Odor | Food Grade Filter Media | Easy Replacement | Compatible with Most Domestic RO Purifiers."
    },
    {
        id: 18,
        name: "Water Softener - 500 LPH",
        category: "Others",
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/5/307363162/CX/FH/BH/4374713/automatic-1000-lph-auto-water-softener-for-domestic.jpeg",
        description: "Automatic water softener for removing hardness from water.",
        specs: "Capacity: 500 L/hour | Resin: 25L | Auto regeneration | Salt-based"
    },
    {
        id: 19,
        name: "Water ATM Machine",
        category: "Others",
        price: "Contact for Price",
        image: "https://images.jdmagicbox.com/v2/comp/def_content/ncat_id/water-vending-machine-vtxt281-250.jpg",
        description: "Automated water dispensing machine with coin/card payment system.",
        specs: "Capacity: 500 L/day | Payment: Coin + RFID | RO purified | Stainless steel"
    },
    {
        id: 20,
        name: "8080 Industrial RO Plant Membrane",
        category: "RO Plant",
        price: "Contact for Price",
        image: "https://m.media-amazon.com/images/I/41A7WcBlJdL.jpg",
        description: "8080 RO Membrane is a high-performance industrial membrane designed for efficient water purification, delivering excellent salt rejection, high flow rate and reliable long-term performance.",
        specs: "8080 Industrial RO Membrane | High Rejection & High Flow Performance | Effective TDS & Salt Removal | Suitable for High Pressure Systems | Long Service Life | Ideal for Industrial & Commercial RO Plants."
    },
    {
        id: 21,
        name: "8040 Industrial RO Plant Membrane",
        category: "RO Plant",
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/IOS/Default/2024/9/454049553/IV/FA/GZ/86414012/product-jpeg-500x500.png",
        description: "8040 RO Membrane is a high-efficiency industrial membrane designed for reliable water purification, offering excellent filtration performance, high salt rejection and long-lasting operation.",
        specs: "8040 Industrial RO Membrane | High Rejection & High Flow Performance | Effective TDS & Salt Removal | Suitable for High Pressure RO Systems | Long Service Life | Ideal for Industrial, Commercial & Institutional RO Plants."
    },
    {
        id: 22,
        name: "Industrial RO Membrane",
        category: "RO Plant",
        price: "Contact for Price",
        image: "https://purencure.com/wp-content/uploads/2026/03/Dupont_FilmTec_BW-30-4040_Series.png",
        description: "RO Membrane is known for high filtration efficiency, excellent salt rejection and dependable long-term performance in industrial and commercial RO systems.",
        specs: "RO Membrane | High Rejection Performance | Available in 8040 & 8080 Sizes | Effective TDS & Salt Removal | High Recovery & Long Service Life | Ideal for Industrial & Commercial RO Plants."
    },
    {
        id: 23,
        name: "Premium KT-20 Water Filter Media",
        category: "Water Filter Media",
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/IOS/Default/2025/1/484166955/VM/KU/NA/6455328/product-jpeg.png",
        description: "KT-20 Filter Media is a high-performance water filtration media designed to improve water quality by effectively reducing impurities and enhancing purification efficiency for cleaner and safer water.",
        specs: "KT-20 Filter Media | High Performance Water Filtration Media | Reduces Impurities & Improves Water Quality | Durable & Long Lasting | Suitable for Domestic, Commercial & Industrial Water Treatment Systems."
    },
    {
        id: 24,
        name: "Premium KT-Anthracite Water Filter Media",
        category: "Water Filter Media",
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/1/378646149/OV/RL/EM/210473880/img-20231120-wa0020-500x500.jpg",
        description: "KT Anthracite Media is a premium filtration media designed for effective removal of suspended particles and impurities, delivering improved water clarity and efficient filtration performance.",
        specs: "KT Anthracite Filter Media | High Grade Filtration Media | Removes Suspended Particles & Impurities | Durable & Long Lasting Performance | Suitable for Filter Vessels & Water Treatment Plants."
    },
    {
        id: 25,
        name: "Premium KT-Greensand Water Filter Media",
        category: "Water Filter Media",
        price: "Contact for Price",
        image: "https://www.kynrem.com/uploads/product_pic/1768016990_0.png",
        description: "KT Green Sand Media is an advanced filtration media designed for effective removal of iron, manganese and unwanted impurities, helping improve water quality and clarity for various treatment applications. Supriya Water Technology is the official distributor of KT Premium Media in Nepal.",
        specs: "KT Green Sand Filter Media | Effective Iron & Manganese Removal | Premium Filtration Performance | Durable & Long Service Life | Suitable for Water Treatment Plants & Filter Vessels | Official KT Media Distributor in Nepal."
    },
    {
        id: 26,
        name: "Premium KT-Manganese-Di-Oxide Water FIlter Media",
        category: "Water Filter Media",
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2025/1/479014415/EX/QD/NT/101109722/manganese-dioxide-kt-500x500.jpeg",
        description: "KT Manganese Dioxide Media is a high-performance filtration media designed for efficient removal of iron, manganese and hydrogen sulfide, helping deliver cleaner, clearer and better-quality water for treatment systems. Supriya Water Technology official Distributor in Nepal of KT Water Filter Media.",
        specs: "KT Manganese Dioxide Filter Media | Removes Iron, Manganese & Sulfur Odor | High Performance Oxidizing Media | Fast Filtration & Long Service Life | Suitable for Water Treatment Plants & Filter Vessels | Official KT Media Distributor in Nepal."
    },
    {
        id: 27,
        name: "Premium KT-Iron Removal Media",
        category: "Water Filter Media",
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/1/379079529/FC/AX/CM/210473880/coconut-shell-activated-carbon-250x250.jpg",
        description: "KT Iron Removal Media is a high-performance filtration media specially designed for efficient removal of iron, manganese and water impurities, helping deliver cleaner, clearer and safer water for treatment systems.",
        specs: "KT Iron Removal Filter Media | Effectively Removes Iron, Manganese & Water Impurities | Premium Filtration Performance | Fast Filtration & Long Service Life | Suitable for Water Treatment Plants & Filter Vessels | Official KT Media Distributor in Nepal."
    },
    {
        id: 28,
        name: "Silica Sand",
        category: "Water Filter Media",
        price: "Contact for Price",
        image: "https://www.dustlessblasting.com/hubfs/Silica%20Sand.jpg",
        description: "High-grade silica sand filter media for water treatment, used in multi-media filters for removing suspended solids and turbidity from water.",
        specs: "Silica Sand Filter Media | Various Mesh Sizes | High Purity | Effective Filtration | Durable & Long-lasting | For Sand Filters & Multi-Media Filters."
    },
    {
        id: 29,
        name: "Activated Carbon",
        category: "Water Filter Media",
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/12/369754698/GR/BB/IR/6946241/activated-carbon-500x500.jpg",
        description: "Premium activated carbon for removing chlorine, odor, color, organic compounds and improving water taste and quality.",
        specs: "Activated Carbon Filter Media | High Adsorption Capacity | Removes Chlorine & Odor | Food Grade | High Surface Area | For Carbon Filters."
    },
    {
        id: 30,
        name: "Coconut Shell Activated Carbon",
        category: "Water Filter Media",
        price: "Contact for Price",
        image: "https://media.licdn.com/dms/image/v2/D5612AQGPyK6Z7EX4rg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1728016699218?e=2147483647&v=beta&t=BoqgPBpsqHuBJSiyLtKWfLIR4fxWGnCPJeaaiBO5SAA",
        description: "Premium coconut shell based activated carbon with high hardness and superior adsorption properties for water purification.",
        specs: "Coconut Shell Activated Carbon | High Hardness | Superior Adsorption | Low Ash Content | Eco-friendly | Ideal for Drinking Water Treatment."
    },
    {
        id: 31,
        name: "Anthracite",
        category: "Water Filter Media",
        price: "Contact for Price",
        image: "https://innovativewatersolutionsinc.com/cdn/shop/products/Anthracite-Shopify_2048x.jpg?v=1656580219",
        description: "High-quality anthracite coal filter media for multi-media filters, providing excellent dirt-holding capacity and backwash efficiency.",
        specs: "Anthracite Filter Media | Low Density | High Dirt-Holding Capacity | Uniform Size | Durable & Long Life | For Multi-Media Filtration."
    },
    {
        id: 32,
        name: "PAC - Poly Aluminum Chloride",
        category: "Others",
        price: "Contact for Price",
        image: "https://khainhat.vn/wp-content/uploads/2024/04/pac-grasim-an-do-pac-an-do-vikram-poly-aluminium-chloride-powder-1-247x247.jpg",
        description: "Poly Aluminum Chloride (PAC) coagulant for water and wastewater treatment, effective in removing suspended solids and turbidity.",
        specs: "Poly Aluminum Chloride | High Efficiency Coagulant | Low Dosage Required | Wide pH Range | Effective Flocculation | For Water Treatment."
    },
    {
        id: 33,
        name: "Bleaching Powder",
        category: "Others",
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2025/8/534976457/RE/GW/RP/60759408/stable-bleaching-powder-500x500.jpeg",
        description: "Calcium hypochlorite bleaching powder for water disinfection, effective against bacteria, viruses and other microorganisms.",
        specs: "Bleaching Powder | Calcium Hypochlorite | Water Disinfection | Chlorine-based | Kills Bacteria & Viruses | For Tanks & Pools."
    },
    {
        id: 34,
        name: "Soda Ash (Sodium Carbonate)",
        category: "Others",
        price: "Contact for Price",
        image: "https://irrorwxhlnlklk5p-static.micyjz.com/cloud/jkBprKolloSRiknolonljq/zhongjian-1-_564_564.jpg",
        description: "Soda ash (sodium carbonate) for pH adjustment, water softening and alkalinity control in water treatment processes.",
        specs: "Soda Ash | Sodium Carbonate | pH Adjuster | Water Softening | Alkalinity Control | Industrial Grade | For Water Treatment."
    },
    {
        id: 35,
        name: "Lime (Calcium Hydroxide)",
        category: "Others",
        price: "Contact for Price",
        image: "https://cpimg.tistatic.com/04374447/b/6/Hydrated-Lime-Powder.jpg",
        description: "Calcium hydroxide (slaked lime) for water softening, pH adjustment, and coagulation in water treatment applications.",
        specs: "Lime | Calcium Hydroxide | pH Control | Water Softening | Coagulation Aid | High Purity | For Water Treatment Plants."
    },
    {
        id: 36,
        name: "HCL - Hydrochloric Acid",
        category: "Others",
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/3/293835924/DE/PD/NK/19422964/hydrochloric-acid-hcl-33--500x500.jpg",
        description: "Hydrochloric acid for pH adjustment, cleaning and regeneration of ion exchange resins in water treatment systems.",
        specs: "Hydrochloric Acid | pH Adjuster | Resin Regeneration | Filter Cleaning | Industrial Grade | For Filtration Purpose."
    },
    {
        id: 37,
        name: "Chlorine",
        category: "Others",
        price: "Contact for Price",
        image: "https://hthpools.com/cdn/shop/files/11189_A_HTHLIQCHLORGAL_OP2Front.jpg?v=1740077525",
        description: "Chlorine for water disinfection and sanitization, effective in killing bacteria, viruses and algae in water systems.",
        specs: "Chlorine | Water Disinfectant | Bacteria & Virus Control | Pool & Tank Treatment | Sanitization | Industrial Grade."
    },
    {
        id: 38,
        name: "Silex (Quartz Gravel)",
        category: "Water Filter Media",
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2022/10/MW/EQ/DV/102878494/silex-filter-media.jpeg",
        description: "Silex quartz gravel for filter bed support and under-drain systems in water filtration applications.",
        specs: "Silex | Quartz Gravel | Filter Support Media | High Purity | Various Sizes | Durable & Inert | For Filter Beds."
    },
    {
        id: 39,
        name: "Core Sands, Gravels & Pebbles",
        category: "Water Filter Media",
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/1/377661840/IX/JO/FW/104019286/water-filter-sand-gravel-pebble.jpeg",
        description: "Graded sands, gravels and pebbles for filter support layers, under-drain systems and multi-media filter construction.",
        specs: "Core Sands, Gravels & Pebbles | Various Grades | Filter Support Layers | Under-drain Systems | Washed & Graded | For Filters."
    },
    {
        id: 40,
        name: "Ion Exchange Resin",
        category: "Water Filter Media",
        price: "Contact for Price",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Ion_exchange_resin_beads.jpg",
        description: "High-quality ion exchange resins for water softening, demineralization and deionization applications.",
        specs: "Ion Exchange Resin | High Exchange Capacity | Durable | Regenerable | Long Service Life | For DM Plants & Softeners."
    },
    {
        id: 41,
        name: "Cation Resin",
        category: "Water Filter Media",
        price: "Contact for Price",
        image: "https://www.newater.com/wp-content/uploads/2022/03/cation-exchange-resin-1.jpg",
        description: "Cation exchange resin for removing positively charged ions (calcium, magnesium, sodium) in water treatment systems.",
        specs: "Cation Exchange Resin | Strong Acid Type | High Capacity | Removes Hardness | Regenerable with Acid | For DM & Softening."
    },
    {
        id: 42,
        name: "Anion Resin",
        category: "Water Filter Media",
        price: "Contact for Price",
        image: "https://www.asharesins.com/files/ChatGPT%20Image%20Aug%206,%202025%20at%2012_14_06%20PM.png",
        description: "Anion exchange resin for removing negatively charged ions (chlorides, sulfates, nitrates) in demineralization plants.",
        specs: "Anion Exchange Resin | Strong Base Type | High Capacity | Removes Anions | Regenerable with Alkali | For DM Plants."
    },
    {
        id: 43,
        name: "Mixed Bed Resin",
        category: "Water Filter Media",
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2025/12/566400061/VV/QR/UA/4037747/mixed-bed-resin-500x500.png",
        description: "Mixed bed ion exchange resin combining cation and anion resins for ultra-pure water production in final polishing.",
        specs: "Mixed Bed Resin | Cation + Anion Mix | Ultra-Pure Water | High Purity Output | Polishing Grade | For High-Purity Applications."
    },
    {
        id: 44,
        name: "Softener Resin",
        category: "Water Filter Media",
        price: "Contact for Price",
        image: "https://ionexchangeglobal.com/app/uploads/2025/12/How-Water-Softener-Resin-Powers-Eco-Friendly-Softening.jpg",
        description: "Specialized cation resin for water softening applications, removing calcium and magnesium hardness from water.",
        specs: "Softener Resin | Food Grade | High Capacity | Removes Hardness | Salt Regenerable | Long Life | For Water Softeners."
    },
    {
        id: 45,
        name: "Indion Resin",
        category: "Water Filter Media",
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/4/MI/PE/LH/84918746/indion-resin-220-22na-ion-exchange-make-.jpg",
        description: "Premium Indion brand ion exchange resins manufactured in India, offering high performance and reliability for water treatment.",
        specs: "Indion Brand Resin | Made in India | High Quality | Various Types Available | Reliable Performance | For Industrial Applications."
    },
    {
        id: 46,
        name: "MnO₂ Media (Manganese Dioxide)",
        category: "Water Filter Media",
        price: "Contact for Price",
        image: "https://www.starkefiltermedia.com/wp-content/uploads/2024/11/iron-removal-media-manganese-greensand-1-thumbnail-1.webp",
        description: "Manganese dioxide filter media for removing iron, manganese, hydrogen sulfide and other oxidizable contaminants from water.",
        specs: "MnO₂ Media | Manganese Dioxide | Iron & Manganese Removal | Oxidizing Media | Regenerable | For Iron Removal Filters."
    },
    {
        id: 47,
        name: "Local Filter Media",
        category: "Water Filter Media",
        price: "Contact for Price",
        image: "https://www.dkchemicals.in/wp-content/uploads/2023/04/dk-chemicals-1.jpg",
        description: "Locally available filter media including sand, gravel and other materials for cost-effective water filtration solutions.",
        specs: "Local Filter Media | Economical Solution | Sand, Gravel & Others | Basic Filtration | Readily Available | For General Filtration."
    },
    {
        id: 48,
        name: "RO Membrane - 4040",
        category: "RO Plant",
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/12/EJ/RA/FT/7090887/industrial-ro-membrane-4040.jpg",
        description: "High-performance 4040 RO membrane for commercial and industrial water purification with excellent salt rejection and durability.",
        specs: "4040 RO Membrane | 2.5\" x 40\" Size | High Flow Rate | 98-99% Salt Rejection | TFC Membrane | For 250-500 LPH RO Plants."
    },
    {
        id: 49,
        name: "Water Fountain",
        category: "Others",
        price: "Contact for Price",
        image: "https://sc04.alicdn.com/kf/H4e996fdf634649cbba52ec78bb6a15edL.jpg",
        description: "Enhance the beauty of any space with our custom water fountain solutions. From dancing and musical fountains to decorative and digital fountain systems, we design and install stunning water features for parks, hotels, commercial complexes, and public spaces.",
        specs: "Dancing, Musical & Digital Fountains | Custom Design & Installation | LED Lighting Effects | Programmable Water Patterns | Indoor & Outdoor Applications | Parks, Hotels & Commercial Spaces."
    },
    {
        id: 50,
        name: "Domestic/Industrial RO or WTP Service",
        category: "Others",
        price: "Contact for Price",
        image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHpbjhJNonSfN6nMbDM09QidyMTqVRCEYwFYjr00LuV8Z1oOxq480aBqKCoXw1KNTZvKCP2cZgy8WVY7sQ676XkHh7N0XaWa3x7HccVZIOXm6EftN637LbKxfaTRRK4TCC5VCaZ=s1360-w1360-h1020-rw",
        description: "Ensure optimal performance and water quality with our professional RO and water treatment services. We provide filter replacement, membrane cleaning, preventive maintenance, repairs, and system inspections for domestic RO purifiers, commercial RO plants, industrial RO systems, WTPs, and wastewater treatment plants, ensuring reliable and uninterrupted operation.",
        specs: "RO & WTP Service | Filter Replacement & Maintenance | Membrane Cleaning & Repair | Domestic, Commercial & Industrial Systems | Preventive Inspection | Reliable Performance & Water Quality Assurance."
    },
    {
        id: 51,
        name: "6th Stage Hygenic Tank Cleaning",
        category: "Others",
        price: "Contact for Price",
        image: "https://i.postimg.cc/66F4wkhV/tank-clean.jpg",
        description: "Maintain clean and healthy water storage with our 6-Stage Hygienic Tank Cleaning Service. Using advanced German technology equipment, we effectively remove dirt, sludge, algae, bacteria, and contaminants from water tanks without compromising water safety. Suitable for residential, commercial, and industrial tanks, our service helps ensure hygienic water storage and improved water quality.",
        specs: "6th Stage Hygienic Tank Cleaning | German Technology Machine | Chemical-Free Cleaning Process | Removes Dirt, Sludge & Bacteria | Safe, Fast & Effective Service | Suitable for Residential, Commercial & Industrial Water Tanks."
    },
    {
        id: 52,
        name: "AUX/Videocon Wall Mount AC",
        category: "Air Conditioner",
        price: "Contact for Price",
        image: "https://electromandu.com/wp-content/uploads/2025/01/Untitled-800-x-800-px-1-1.jpg",
        description: "AUX/Videocon wall-mounted air conditioner with energy-efficient cooling, anti-bacterial filter, and turbo cooling mode for faster temperature control.",
        specs: "1 Ton to 2 Ton Capacity | 3 Star to 5 Star Rating | Copper Condenser | Anti-bacterial Filter | Turbo Mode | Auto Restart | Low Noise."
    },
    {
        id: 53,
        name: "AUX/Videocon Cassette AC",
        category: "Air Conditioner",
        price: "Contact for Price",
        image: "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/515922539_1419712585737123_1118916760668110017_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s1024x1024&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bnHA6QQYjS8Q7kNvwGu7ET3&_nc_oc=AdpvAeWu_SQkTMB6ko2KD9ubOsnjFtF-DUTB1KN1o-BF_QnLLtux853wfItXQUfl6-3UvWhh5ISRmdG86Gj2IMCc&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=NGIDIls0_-8VG-swXvBkiw&_nc_ss=7b289&oh=00_Af_2EJXjurbFjGcl4prbDrSlbTqGAUlemw2PToJPZ6cUcQ&oe=6A33CDB1",
        description: "AUX/Videocon ceiling cassette air conditioner designed for commercial spaces, providing 4-way air distribution with uniform cooling coverage.",
        specs: "2 Ton to 5 Ton Capacity | Ceiling Cassette Type | 4-Way Air Distribution | R32 Refrigerant | Wireless Remote | Commercial Grade."
    },
    {
        id: 54,
        name: "Hitachi Wall Mount AC",
        category: "Air Conditioner",
        price: "Contact for Price",
        image: "https://www.acghar.com/uploads/products/hitachi/images/hitachi-1-5-ton-wall-mount-split-air-conditioner-nepal-price_6a180372ab8f4.jpg",
        description: "Hitachi premium wall-mounted air conditioner with inverter technology, energy-saving features, and powerful cooling performance.",
        specs: "1 Ton to 2 Ton Capacity | Inverter Technology | 5 Star Rating | Copper Coil | Tropical Inverter | PM 2.5 Filter | Stabilizer Free."
    }
];

// ========================================
// GALLERY (145 items)
// ========================================
// IMPORTANT: For fountain projects, you can now add videos!
// Set mediaType: "video" and add youtubeId instead of image
const gallery = [
    {
        id: 1,
        title: "WTP Plant Installation - Hotel",
        location: "Thamel, Kathmandu",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-plant-aloft-hotel-thamel.jpeg"
    },
    {
        id: 2,
        title: "WTP Plant Installation - Baluwatar",
        location: "Baluwatar, Kathmandu",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-plant-baluwatar.jpeg"
    },
    {
        id: 3,
        title: "WTP Plant Installation - Naxal",
        location: "Naxal, Kathmandu",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-plant-naxal.jpeg"
    },
    {
        id: 4,
        title: "WTP Installation - Hospital",
        location: "Butwal",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-butwal-hospital.jpeg"
    },
    {
        id: 5,
        title: "WTP Installation - Hotel",
        location: "Jhapa",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-hotel-mechi-crown-jhapa.jpeg"
    },
    {
        id: 6,
        title: "WTP Plant Installation - Jhapa Hotel",
        location: "Jhapa",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-jhapa-hotel.jpeg"
    },
    {
        id: 7,
        title: "WTP Plant Installation - Vegas Casino",
        location: "Jhapa",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-vegas-casino-jhapa.jpeg"
    },
    {
        id: 8,
        title: "WTP Installation Ready for Dispatch",
        location: "Butwal",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-install-dispatch-butwal.jpeg"
    },
    {
        id: 9,
        title: "WTP Plant Installation - KV Kathmandu",
        location: "Lazimpat, Kathmandu",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/kv-ktm-wtp-plant-lazimpat.jpeg"
    },
    {
        id: 10,
        title: "5 KLD STP Plant Installation - Wellness Center",
        location: "Wellness Center",
        category: "sewage",
        mediaType: "image",
        image: "images/gallery/5-kld-stp-plant-install-patanjali.jpeg"
    },
    {
        id: 11,
        title: "RO Plant Unit Installation - Janakpur",
        location: "Janakpur",
        category: "ro-system",
        mediaType: "image",
        image: "images/gallery/ro-plant-unit-janakpur.jpeg"
    },
    {
        id: 12,
        title: "RO Dispensing Unit Installation - Janakpur",
        location: "Janakpur",
        category: "ro-system",
        mediaType: "image",
        image: "images/gallery/ro-dispensing-unit-janakpur.jpeg"
    },
    {
        id: 13,
        title: "Classic Domestic RO Installation",
        location: "Lalitpur",
        category: "ro-system",
        mediaType: "image",
        image: "images/gallery/classic-domestic-install-lalitpur.jpeg"
    },
    {
        id: 14,
        title: "Warehouse RO Plant - Packing for Dispatch",
        location: "Warehouse",
        category: "ro-system",
        mediaType: "image",
        image: "images/gallery/warehouse-ro-plant-packing-for-dispatch.jpeg"
    },
    {
        id: 15,
        title: "RO Dispensing Unit - Ready for Dispatch",
        location: "Warehouse",
        category: "ro-system",
        mediaType: "image",
        image: "images/gallery/dispatch-ro-dspensing-unit.jpeg"
    },
    {
        id: 16,
        title: "Water Fountain Installation - Massif Hotel",
        location: "Massif Hotel",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/water-fountain-massif-hotel.jpeg",
        priority: 4
    },
    {
        id: 17,
        title: "Water Fountain - Birgunj Hotel",
        location: "Birgunj",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/water-fountain-birgunj-hotel.jpeg",
        priority: 2
    },
    {
        id: 18,
        title: "Water Fountain Civil Work",
        location: "Pokhara",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/water-fountain-civil-work-pokhara.jpeg"
    },
    {
        id: 19,
        title: "Domestic Water Fountain Installation",
        location: "Residential",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/domestic-water-fountain.jpeg"
    },
    {
        id: 20,
        title: "AC Dispatch - Wellness Center",
        location: "Wellness Center",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/ac-disptch-to-patanjali-yogpeeth.jpeg"
    },
    {
        id: 21,
        title: "Filter Media Replacement Service",
        location: "Gwarko",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/filter-media-replacement-gwarko.jpeg"
    },
    {
        id: 22,
        title: "Boring Installation - Hospital",
        location: "Hospital",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/boring-install-at-manmohan-hospital.jpeg"
    },
    {
        id: 23,
        title: "100 LPH RO Plant - Flavia by SWT",
        location: "Installation Site",
        category: "ro-system",
        mediaType: "image",
        image: "images/gallery/100-lph-ro-plant-falvia-by-swt.jpeg"
    },
    {
        id: 24,
        title: "10 KLD STP Plant Installation",
        location: "Installation Site",
        category: "sewage",
        mediaType: "image",
        image: "images/gallery/10kld-stp-plant-installation.jpeg"
    },
    {
        id: 25,
        title: "50 LPH RO with Storage Tank",
        location: "Installation Site",
        category: "ro-system",
        mediaType: "image",
        image: "images/gallery/50LPH-RO-with-tank.jpeg"
    },
    {
        id: 26,
        title: "AC Dispatch to Chitwan",
        location: "Chitwan",
        category: "Air Conditioner",
        mediaType: "image",
        image: "images/gallery/ac-dispatch-to-chitwan.jpeg"
    },
    {
        id: 27,
        title: "2.0 Ton AC Installation - Kirtipur",
        location: "Kirtipur",
        category: "Air Conditioner",
        mediaType: "image",
        image: "images/gallery/ac-install-2.0-ton-kirtipur.jpeg"
    },
    {
        id: 28,
        title: "AC Installation - Baluwatar",
        location: "Baluwatar",
        category: "Air Conditioner",
        mediaType: "image",
        image: "images/gallery/ac-install-baluwatar.jpeg"
    },
    {
        id: 29,
        title: "AC Installation - Kirtipur",
        location: "Kirtipur",
        category: "Air Conditioner",
        mediaType: "image",
        image: "images/gallery/ac-install-kirtipur.jpeg"
    },
    {
        id: 30,
        title: "AC Installation - Lazimpat",
        location: "Lazimpat",
        category: "Air Conditioner",
        mediaType: "image",
        image: "images/gallery/ac-installation-lazimpat.jpeg"
    },
    {
        id: 31,
        title: "AC Installation - Wellness Center",
        location: "Dhulikhel",
        category: "Air Conditioner",
        mediaType: "image",
        image: "images/gallery/ac-installation-patanjali-yogpeeth-dhulikhel.jpeg"
    },
    {
        id: 32,
        title: "AC Installation - Syanobharang",
        location: "Syanobharang",
        category: "Air Conditioner",
        mediaType: "image",
        image: "images/gallery/ac-installation-syanobharang.jpeg"
    },
    {
        id: 33,
        title: "AC Ready for Dispatch - Biratnagar",
        location: "Biratnagar",
        category: "Air Conditioner",
        mediaType: "image",
        image: "images/gallery/ac-ready-to-dispatch-biratnagar.jpeg"
    },
    {
        id: 34,
        title: "ACF MGF MS Vessel WTP Plant",
        location: "Installation Site",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/acf-mgf-ms-vessel-wtp-plant.jpeg"
    },
    {
        id: 35,
        title: "AutoCAD Design - Water Fountain Siraha",
        location: "Siraha",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/autocad-design-of-water-fountain-siraha.jpeg"
    },
    {
        id: 36,
        title: "AutoCAD Water Fountain Design",
        location: "Design Phase",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/autocad-water-fountain-design.jpeg"
    },
    {
        id: 37,
        title: "Best Vendor Award - Hotel",
        location: "Thamel, Kathmandu",
        category: "awards",
        mediaType: "image",
        image: "images/gallery/bes-vendor-award-aloft-thamel.jpeg"
    },
    {
        id: 38,
        title: "Ceiling Cassette AC - Baluwatar",
        location: "Baluwatar",
        category: "Air Conditioner",
        mediaType: "image",
        image: "images/gallery/ceiling-cassete-ac-baluwatar.jpeg"
    },
    {
        id: 39,
        title: "Ceiling Cassette AC Installation - Wellness Center",
        location: "Dhulikhel",
        category: "Air Conditioner",
        mediaType: "image",
        image: "images/gallery/ceiling-cassete-ac-install-patanjali-dhulikhel.jpeg"
    },
    {
        id: 40,
        title: "Ceiling Cassette AC Installation by SWT",
        location: "Installation Site",
        category: "Air Conditioner",
        mediaType: "image",
        image: "images/gallery/ceiling-cassete-ac-installation-swt.jpeg"
    },
    {
        id: 41,
        title: "Civil Work - Cascade Fountain",
        location: "Installation Site",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/civil-work-cascade-fountain.jpeg"
    },
    {
        id: 42,
        title: "Civil Work - Water Fountain Khasibazar",
        location: "Khasibazar",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/civil-work-water-fountain-khasibazar.jpeg"
    },
    {
        id: 43,
        title: "Dasarath Rangasala Decoration - South Asian Games",
        location: "Dasarath Rangasala",
        category: "events",
        mediaType: "image",
        image: "images/gallery/dasarath-rangsala-decoration-south-asian-games.jpeg"
    },
    {
        id: 44,
        title: "Flavia RO Classic - Pokhara",
        location: "Pokhara",
        category: "ro-system",
        mediaType: "image",
        image: "images/gallery/domestic-ro-flavia-classic-pokhara.jpeg"
    },
    {
        id: 45,
        title: "Flavia RO Classic Installation - Basantpur",
        location: "Basantpur",
        category: "ro-system",
        mediaType: "image",
        image: "images/gallery/falvia-ro-classic-install-basantpur.jpeg"
    },
    {
        id: 46,
        title: "Flavia SWT Presence in Kathmandu Shop",
        location: "Kathmandu",
        category: "products",
        mediaType: "image",
        image: "images/gallery/falvia-swt-presence inkathmandu shop.jpeg"
    },
    {
        id: 47,
        title: "Flavia Classic RO Installation",
        location: "Installation Site",
        category: "ro-system",
        mediaType: "image",
        image: "images/gallery/flavia-classic-ro-isntall.jpeg"
    },
    {
        id: 48,
        title: "Flavia Presence SWT Nepal",
        location: "Nepal",
        category: "products",
        mediaType: "image",
        image: "images/gallery/flavia-presnece-swt-nepal-.jpeg"
    },
    {
        id: 49,
        title: "Flavia RO Classic in Pokhara Shop",
        location: "Pokhara",
        category: "products",
        mediaType: "image",
        image: "images/gallery/flavia-ro-calssic-presence-in-pokhara-shop.jpeg"
    },
    {
        id: 50,
        title: "Flavia RO in Kathmandu Shop",
        location: "Kathmandu",
        category: "products",
        mediaType: "image",
        image: "images/gallery/flavia-ro-in-kathmandu-shop.jpeg"
    },
    {
        id: 51,
        title: "Flavia RO SWT Showcase - Kathmandu",
        location: "Kathmandu",
        category: "products",
        mediaType: "image",
        image: "images/gallery/flavia-ro-swt-showcase-to-public-kathmandu.jpeg"
    },
    {
        id: 52,
        title: "Flavia Shop Presence",
        location: "Shop Display",
        category: "products",
        mediaType: "image",
        image: "images/gallery/flavia-shop-presence.jpeg"
    },
    {
        id: 53,
        title: "Galaxy Garden Water Fountain - Narayanghat",
        location: "Narayanghat",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/galaxy-garden-narayanghat-water-fountain-installation.jpeg"
    },
    {
        id: 54,
        title: "Happy Multi Supplier - Dealer of SWT",
        location: "Dealer Network",
        category: "partners",
        mediaType: "image",
        image: "images/gallery/happy-multi-suplier-dealer-of-swt.jpeg"
    },
    {
        id: 55,
        title: "High Mast Flood Light - Pashupatinath Temple",
        location: "Pashupatinath",
        category: "lighting",
        mediaType: "image",
        image: "images/gallery/high-mast-flood-light-installing-pashupatinath-temple-by-swt.jpeg"
    },
    {
        id: 56,
        title: "High Mast Flood Light Installing - Pashupatinath",
        location: "Pashupatinath",
        category: "lighting",
        mediaType: "image",
        image: "images/gallery/high-mast-flood-light-installing-pashupatinath.jpeg"
    },
    {
        id: 57,
        title: "High Mast Light Installation - Pashupatinath",
        location: "Pashupatinath",
        category: "lighting",
        mediaType: "image",
        image: "images/gallery/high-mast-light-pashupatinath-install-by-sswt.jpeg"
    },
    {
        id: 58,
        title: "Installing Fountain Frame - Khasibazar",
        location: "Khasibazar",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/installing-fountain-frame-khasibazar.jpeg"
    },
    {
        id: 59,
        title: "KT-20 Testing - Hotel",
        location: "Thamel, Kathmandu",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/kt-20-testing-aloft-hotel-thamel.jpeg"
    },
    {
        id: 60,
        title: "Massif Hotel Water Fountain - Gwarko",
        location: "Gwarko",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/massif-hotel-water-fountain-gwako.jpeg"
    },
    {
        id: 61,
        title: "Media Replacement - Nayabazar",
        location: "Nayabazar",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/media-replacement-nayabazar.jpeg"
    },
    {
        id: 62,
        title: "Media Replacement - Hotel 2024",
        location: "Hotel",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/media-repllacement-aloft-hotel-2024.jpeg"
    },
    {
        id: 63,
        title: "MGF Filter - Gwarko",
        location: "Gwarko",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/mgf-filter-gwarko.jpeg"
    },
    {
        id: 64,
        title: "MGF Filter MS Vessel - Chitwan",
        location: "Chitwan",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/mgf-filter-ms-vessel-chitwan.jpeg"
    },
    {
        id: 65,
        title: "MS Vessel Plant Installation - Chitwan",
        location: "Chitwan",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/ms-vessel-plant-install-chitwan.jpeg"
    },
    {
        id: 66,
        title: "Narayanghat Galaxy Garden Resort - Water Fountain",
        location: "Narayanghat",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/naraynghat-galaxy-garden-resort-water-fountain.jpeg"
    },
    {
        id: 67,
        title: "Pashupatinath Water Fountain Installation",
        location: "Pashupatinath",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/pashupatinath-water-fountain-install.jpeg"
    },
    {
        id: 68,
        title: "Pokhara Event Center Fountain",
        location: "Pokhara",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/pokhara-event-center-fountain.jpeg",
        priority: 3
    },
    {
        id: 69,
        title: "Pokhara Event Center Water Fountain Installation",
        location: "Pokhara",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/pokhara-event-center-water-fountain-installation.jpeg"
    },
    {
        id: 70,
        title: "Pole for Light - Pashupatinath Mandir",
        location: "Pashupatinath",
        category: "lighting",
        mediaType: "image",
        image: "images/gallery/pole-for-light-pasuhpatinath-mandir.jpeg"
    },
    {
        id: 71,
        title: "Save Supermarket Tadi - Water Fountain Installation",
        location: "Tadi",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/save-supermaret-tadi-water-fountain-installation.jpg",
        priority: 1
    },
    {
        id: 72,
        title: "Save Supermarket Tadi - Water Fountain Install",
        location: "Tadi",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/save-supermarket-tadi-water-fountain-install.jpeg"
    },
    {
        id: 73,
        title: "Solar Water Heater Installation - Bafal",
        location: "Bafal",
        category: "solar",
        mediaType: "image",
        image: "images/gallery/solar-water-heater-install-bafal.jpeg"
    },
    {
        id: 74,
        title: "Apartment WTP Plant - Kathmandu",
        location: "Kathmandu",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/status-enclave-aaprtment-wtp-plant-kathmandu.jpeg"
    },
    {
        id: 75,
        title: "STP Plant Installation - Pokhara",
        location: "Pokhara",
        category: "sewage",
        mediaType: "image",
        image: "images/gallery/stp-plant-install-pokhara.jpeg"
    },
    {
        id: 76,
        title: "Vegas Recreation Jhapa - WTP Plant Installation",
        location: "Jhapa",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/vegas-recreation-jhapa-wtp-plant-install.jpeg"
    },
    {
        id: 77,
        title: "Vertical Jet Water Fountain - Nepal",
        location: "Nepal",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/vertical-jet water-fountain-nepal.jpeg"
    },
    {
        id: 78,
        title: "Water Fountain - Birgunj Hotel",
        location: "Birgunj",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/water-foountain-birgunj-hotel.jpeg"
    },
    {
        id: 79,
        title: "Water Fountain Lighting - Hotel",
        location: "Hotel",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/water-fountain-lighting-hotel.jpeg"
    },
    {
        id: 80,
        title: "WTP Plant - Thamel",
        location: "Thamel, Kathmandu",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp--plant-thamel.jpg"
    },
    {
        id: 81,
        title: "WTP Installation - Bishalnagar",
        location: "Bishalnagar",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-install-bishalnagar.jpg"
    },
    {
        id: 82,
        title: "WTP Installation - Pokhara",
        location: "Pokhara",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-install-pokhara.jpeg"
    },
    {
        id: 83,
        title: "WTP Installation - Kathmandu Hotel",
        location: "Kathmandu",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-installation-kathmandu-hotel.jpeg"
    },
    {
        id: 84,
        title: "WTP Installation",
        location: "Installation Site",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-installation.jpeg"
    },
    {
        id: 85,
        title: "WTP - Kathmandu",
        location: "Kathmandu",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-kathmandu.jpeg"
    },
    {
        id: 86,
        title: "WTP Plant Installation - Hotel",
        location: "Hotel",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-plant-install-hotel-mechi-crown.jpeg"
    },
    {
        id: 87,
        title: "WTP Plant Installation - Nepal by SWT",
        location: "Nepal",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-plant-install-nepal-by-swt.jpg"
    },
    {
        id: 88,
        title: "WTP Plant Installation",
        location: "Installation Site",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-plant-isntallation.jpeg"
    },
    {
        id: 89,
        title: "WTP Plant - Lalitpur",
        location: "Lalitpur",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-plant-lalitpur.jpeg"
    },
    {
        id: 90,
        title: "WTP Plant - Pokhara",
        location: "Pokhara",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-plant-pokhara.jpeg"
    },
    {
        id: 91,
        title: "WTP Plant Setup - Hotel Bhaktapur",
        location: "Bhaktapur",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-plant-setup-hotel-bhaktapur.jpeg"
    },
    {
        id: 92,
        title: "WTP Plant - Apartment Kathmandu",
        location: "Kathmandu",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-plant-sunrise-apartment-kathmandu.jpeg"
    },
    {
        id: 93,
        title: "WTP Replacement - Thimi",
        location: "Thimi",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-replacement-thimi.jpeg"
    },
    {
        id: 94,
        title: "WTP Apartment Complex",
        location: "Apartment",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/WTP-Status-enclave-apartment.jpeg"
    },
    {
        id: 95,
        title: "WTP Plant - Naxal",
        location: "Naxal, Kathmandu",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-plant-naxal.jpeg"
    },
    {
        id: 96,
        title: "WTP Vegas Casino - Jhapa",
        location: "Jhapa",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-vegas-casino-jhapa.jpeg"
    },
    {
        id: 97,
        title: "RO Dispensing Unit Installation - Janakpur",
        location: "Janakpur",
        category: "ro-system",
        mediaType: "image",
        image: "images/gallery/ro-dispensing-unit-janakpur-installation.jpeg"
    },
    {
        id: 98,
        title: "Ceiling Cassette AC Installation - Wellness Center",
        location: "Dhulikhel",
        category: "Air Conditioner",
        mediaType: "image",
        image: "images/gallery/ceilling-cassete-ac-install-patanjali-dhulikhel.jpeg"
    },
    {
        id: 99,
        title: "Water Fountain Installation - Birgunj Hotel",
        location: "Birgunj",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/water-fountain-birgunj-hotel copy.jpeg"
    },
    {
        id: 100,
        title: "WTP Plant Installation",
        location: "Nepal",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-installation copy.jpeg"
    },
    {
        id: 101,
        title: "WTP Plant Installation - Thamel",
        location: "Thamel, Kathmandu",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp--plant-thamel.jpg"
    },
    {
        id: 102,
        title: "WTP Installation - Bishalnagar",
        location: "Bishalnagar, Kathmandu",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-install-bishalnagar.jpg"
    },
    {
        id: 103,
        title: "WTP Plant Installation Nepal by SWT",
        location: "Nepal",
        category: "water-treatment",
        mediaType: "image",
        image: "images/gallery/wtp-plant-install-nepal-by-swt.jpg"
    },
    {
        id: 104,
        title: "Water Fountain Installation - Tadi Supermarket",
        location: "Tadi",
        category: "fountain",
        mediaType: "image",
        image: "images/gallery/save-supermaret-tadi-water-fountain-installation.jpg"
    },
    {
        id: 105,
        title: "Water Fountain Birgunj by Supriya Water Technology",
        location: "Birgunj",
        category: "fountain",
        mediaType: "video",
        video: "images/gallery/videos/water-fountain-birgunj-by-supriyawatertechnology.mp4",
        thumbnail: "images/gallery/water-fountain-birgunj-hotel.jpeg",
        tag: "Water Fountain",
        pinned: true,
        priority: 5
    },
    {
        id: 107,
        title: "Featured - Tadi Water Fountain",
        location: "Tadi",
        category: "fountain",
        mediaType: "video",
        video: "images/gallery/videos/featured-tad-waterfountain.mp4",
        thumbnail: "images/gallery/save-supermarket-tadi-water-fountain-install.jpeg",
        tag: "Water Fountain",
        pinned: true,
        priority: 6
    },
    {
        id: 108,
        title: "Tadi Supermarket Water Fountain - Crowd Craze",
        location: "Tadi",
        category: "fountain",
        mediaType: "video",
        video: "images/gallery/videos/tadi-supermarket-water-fountain-crowd-craze.mp4",
        thumbnail: "images/gallery/save-supermaret-tadi-water-fountain-installation.jpg",
        tag: "Water Fountain"
    },
    {
        id: 109,
        title: "Water Fountain Save Supermarket Tadi - Night View",
        location: "Tadi",
        category: "fountain",
        mediaType: "video",
        video: "images/gallery/videos/water-fountain-save-supermarket-tadi-night-view.mp4",
        thumbnail: "images/gallery/save-supermaret-tadi-water-fountain-installation.jpg",
        tag: "Water Fountain",
        pinned: true
    },
    {
        id: 110,
        title: "Galaxy Garden Narayanghat - Water Fountain",
        location: "Narayanghat",
        category: "fountain",
        mediaType: "video",
        video: "images/gallery/videos/galaxy-garden-narayanghat-fountain.mp4",
        thumbnail: "images/gallery/galaxy-garden-narayanghat-water-fountain-installation.jpeg",
        tag: "Water Fountain"
    },
    {
        id: 111,
        title: "Galaxy Garden Resort Water Fountain - Narayanghat",
        location: "Narayanghat",
        category: "fountain",
        mediaType: "video",
        video: "images/gallery/videos/galaxy-garden-resort-water-fountain-narayanghat.mp4",
        thumbnail: "images/gallery/naraynghat-galaxy-garden-resort-water-fountain.jpeg",
        tag: "Water Fountain"
    },
    {
        id: 112,
        title: "Pokhara Event Center - Water Fountain",
        location: "Pokhara",
        category: "fountain",
        mediaType: "video",
        video: "images/gallery/videos/pokhara-event-center-water-fountain.mp4",
        thumbnail: "images/gallery/pokhara-event-center-fountain.jpeg",
        tag: "Water Fountain",
        priority: 7
    },
    {
        id: 113,
        title: "Indian Embassy Kathmandu - Water Fountain",
        location: "Kathmandu",
        category: "fountain",
        mediaType: "video",
        video: "images/gallery/videos/indian-embassy-kathmandu-water-fountain.mp4",
        thumbnail: "images/gallery/water-fountain-massif-hotel.jpeg",
        tag: "Water Fountain"
    },
    {
        id: 114,
        title: "Flower Jet Fountain - Nepal",
        location: "Nepal",
        category: "fountain",
        mediaType: "video",
        video: "images/gallery/videos/flower-jet-fountain-nepal.mp4",
        thumbnail: "images/gallery/water-fountain-birgunj-hotel.jpeg",
        tag: "Water Fountain"
    },
    {
        id: 115,
        title: "Water Cascade Sheet Fountain",
        location: "Installation Site",
        category: "fountain",
        mediaType: "video",
        video: "images/gallery/videos/water-cascade-sheet-fountain.mp4",
        thumbnail: "images/gallery/civil-work-cascade-fountain.jpeg",
        tag: "Water Fountain"
    },
    {
        id: 116,
        title: "Installation Work - Birgunj Water Fountain",
        location: "Birgunj",
        category: "fountain",
        mediaType: "video",
        video: "images/gallery/videos/installation-work-birgunj-water-fountain.mp4",
        thumbnail: "images/gallery/water-fountain-birgunj-hotel.jpeg",
        tag: "Water Fountain"
    },
    {
        id: 117,
        title: "Drala Resort WTP Plant",
        location: "Drala Resort",
        category: "water-treatment",
        mediaType: "video",
        video: "images/gallery/videos/drala-resort-wtp-plant.mp4",
        thumbnail: "images/gallery/wtp-installation.jpeg",
        tag: "WTP",
        pinned: true
    },
    {
        id: 118,
        title: "Hotel Kathmandu - WTP and 6000 LPH RO Plant AMC",
        location: "Thamel, Kathmandu",
        category: "water-treatment",
        mediaType: "video",
        video: "images/gallery/videos/aloft-hotel-kathmandu-wtp-and-6000lphroplant-amc.mp4",
        thumbnail: "images/gallery/wtp-plant-aloft-hotel-thamel.jpeg",
        tag: "WTP"
    },
    {
        id: 119,
        title: "Apartment WTP Setup",
        location: "Apartment Complex",
        category: "water-treatment",
        mediaType: "video",
        video: "images/gallery/videos/apartment-wtp-setup.mp4",
        thumbnail: "images/gallery/wtp-plant-sunrise-apartment-kathmandu.jpeg",
        tag: "WTP"
    },
    {
        id: 120,
        title: "Bafal WTP Plant Installation",
        location: "Bafal",
        category: "water-treatment",
        mediaType: "video",
        video: "images/gallery/videos/bafal-wtp-plant-install.mp4",
        thumbnail: "images/gallery/wtp-installation.jpeg",
        tag: "WTP"
    },
    {
        id: 121,
        title: "Hotel - WTP Plant Installation",
        location: "Jhapa",
        category: "water-treatment",
        mediaType: "video",
        video: "images/gallery/videos/hotel-mechi-crown-jhapa-wtp-plant-installation.mp4",
        thumbnail: "images/gallery/wtp-hotel-mechi-crown-jhapa.jpeg",
        tag: "WTP"
    },
    {
        id: 122,
        title: "Boring Work - Medical College",
        location: "Medical College",
        category: "water-treatment",
        mediaType: "video",
        video: "images/gallery/videos/boring-work-manmohan-medical-college.mp4",
        thumbnail: "images/gallery/boring-install-at-manmohan-hospital.jpeg",
        tag: "Boring Water"
    },
    {
        id: 123,
        title: "Government Office Boring Work by SWT",
        location: "Government Office",
        category: "water-treatment",
        mediaType: "video",
        video: "images/gallery/videos/nea-boring-work-by-swt.mp4",
        thumbnail: "images/gallery/boring-install-at-manmohan-hospital.jpeg",
        tag: "Boring Water"
    },
    {
        id: 124,
        title: "KT-20 Demonstration Video",
        location: "Laboratory",
        category: "water-treatment",
        mediaType: "video",
        video: "images/gallery/videos/kt-20-demonstration-video.mp4",
        thumbnail: "images/gallery/kt-20-testing-aloft-hotel.jpeg",
        tag: "KT-20",
        pinned: true
    },
    {
        id: 125,
        title: "KT-20 Laboratory Tested Video",
        location: "Laboratory",
        category: "water-treatment",
        mediaType: "video",
        video: "images/gallery/videos/kt-20-laboratory-tested-video.mp4",
        thumbnail: "images/gallery/kt-20-testing-aloft-hotel-thamel.jpeg",
        tag: "KT-20"
    },
    {
        id: 126,
        title: "Media Replacement Work - KT-20 Hotel",
        location: "Thamel, Kathmandu",
        category: "water-treatment",
        mediaType: "video",
        video: "images/gallery/videos/media-replacement-work-kt-20-aloft-hotel-thamel.mp4",
        thumbnail: "images/gallery/media-repllacement-aloft-hotel-2024.jpeg",
        tag: "KT-20"
    },
    {
        id: 127,
        title: "Water Filter Media Replacement - Drala Resort",
        location: "Drala Resort",
        category: "water-treatment",
        mediaType: "video",
        video: "images/gallery/videos/water-filter-media-replacement-drala-resort.mp4",
        thumbnail: "images/gallery/filter-media-replacement-gwarko.jpeg",
        tag: "Media Replacement"
    },
    {
        id: 128,
        title: "Water Filter Media Replacement",
        location: "Service Site",
        category: "water-treatment",
        mediaType: "video",
        video: "images/gallery/videos/water-filter-media-replacement.mp4",
        thumbnail: "images/gallery/filter-media-replacement-gwarko.jpeg",
        tag: "Media Replacement"
    },
    {
        id: 129,
        title: "Removing Waste Material During Media Replacement",
        location: "Service Site",
        category: "water-treatment",
        mediaType: "video",
        video: "images/gallery/videos/removing-waste-material-duuring-media-replacement.mp4",
        thumbnail: "images/gallery/media-replacement-nayabazar.jpeg",
        tag: "Media Replacement"
    },
    {
        id: 130,
        title: "Apartment - Water Filter Media Replacement by SWT",
        location: "Apartment",
        category: "water-treatment",
        mediaType: "video",
        video: "images/gallery/videos/sunrise-apartment-water-filter-media-repalcement-by-swt.mp4",
        thumbnail: "images/gallery/wtp-plant-sunrise-apartment-kathmandu.jpeg",
        tag: "Media Replacement"
    },
    {
        id: 131,
        title: "Government Office Water Filter Media Replacement",
        location: "Government Office",
        category: "water-treatment",
        mediaType: "video",
        video: "images/gallery/videos/nea-water-filter-media-replacement.mp4",
        thumbnail: "images/gallery/filter-media-replacement-gwarko.jpeg",
        tag: "Media Replacement"
    },
    {
        id: 132,
        title: "WTP Media Replacement Work",
        location: "Service Site",
        category: "water-treatment",
        mediaType: "video",
        video: "images/gallery/videos/wtp-media-replacement-work.mp4",
        thumbnail: "images/gallery/media-replacement-nayabazar.jpeg",
        tag: "Media Replacement"
    },
    {
        id: 133,
        title: "Thimi Water Treatment Plant for Drinking Water - Explanation",
        location: "Thimi",
        category: "water-treatment",
        mediaType: "video",
        video: "images/gallery/videos/thimi-water-treatment-plant-for-drinking-water-explaing.mp4",
        thumbnail: "images/gallery/wtp-replacement-thimi.jpeg",
        tag: "WTP"
    },
    {
        id: 134,
        title: "Water Filter Plant - Status Apartment",
        location: "Status Apartment",
        category: "water-treatment",
        mediaType: "video",
        video: "images/gallery/videos/water-filter-plant-status-apartment.mp4",
        thumbnail: "images/gallery/status-enclave-aaprtment-wtp-plant-kathmandu.jpeg",
        tag: "WTP"
    },
    {
        id: 135,
        title: "FRP Vessel Deep Cleaning",
        location: "Service Site",
        category: "water-treatment",
        mediaType: "video",
        video: "images/gallery/videos/frp-vessel-deep-cleaning.mp4",
        thumbnail: "images/gallery/filter-media-replacement-gwarko.jpeg",
        tag: "Vessel Cleaning"
    },
    {
        id: 136,
        title: "Water Vessel Cleaning for Replacement - Drala Resort",
        location: "Drala Resort",
        category: "water-treatment",
        mediaType: "video",
        video: "images/gallery/videos/water-vessel-cleaining-for-replacement-drala resort.mp4",
        thumbnail: "images/gallery/filter-media-replacement-gwarko.jpeg",
        tag: "Vessel Cleaning"
    },
    {
        id: 137,
        title: "5 KLD STP Plant - Patanjali Yogpeeth Dhulikhel",
        location: "Dhulikhel",
        category: "sewage",
        mediaType: "video",
        video: "images/gallery/videos/stp-plant-5kld-patanjali-yogpeeth-dhulikhel.mp4",
        thumbnail: "images/gallery/5-kld-stp-plant-install-patanjali.jpeg",
        tag: "STP"
    },
    {
        id: 138,
        title: "SWT MBR Technology",
        location: "Technology Showcase",
        category: "sewage",
        mediaType: "video",
        video: "images/gallery/videos/swt-mbr-technology.mp4",
        thumbnail: "images/gallery/10kld-stp-plant-installation.jpeg",
        tag: "MBR Technology"
    },
    {
        id: 139,
        title: "50 LPH RO Plant Installation",
        location: "Installation Site",
        category: "ro-system",
        mediaType: "video",
        video: "images/gallery/videos/50lph-ro-plant.mp4",
        thumbnail: "images/gallery/50LPH-RO-with-tank.jpeg",
        tag: "RO Plant"
    },
    {
        id: 140,
        title: "Manual Scrubbing - Water Tank Cleaning",
        location: "Service Site",
        category: "tank-cleaning",
        mediaType: "video",
        video: "images/gallery/videos/mannual-scrubbing-water-tank-cleaning.mp4",
        thumbnail: "images/gallery/filter-media-replacement-gwarko.jpeg",
        tag: "Tank Cleaning"
    },
    {
        id: 141,
        title: "High Pressure Tank Cleaning",
        location: "Service Site",
        category: "tank-cleaning",
        mediaType: "video",
        video: "images/gallery/videos/high-pressure-tank-cleaning.mp4",
        thumbnail: "images/gallery/filter-media-replacement-gwarko.jpeg",
        tag: "Tank Cleaning"
    },
    {
        id: 142,
        title: "Water Tank Cleaning at NEA",
        location: "NEA",
        category: "tank-cleaning",
        mediaType: "video",
        video: "images/gallery/videos/water-tank-cleaning-at-nea.mp4",
        thumbnail: "images/gallery/filter-media-replacement-gwarko.jpeg",
        tag: "Tank Cleaning"
    },
    {
        id: 143,
        title: "Water Tank Cleaning - Sunrise Apartment by Supriya Water Technology",
        location: "Sunrise Apartment",
        category: "tank-cleaning",
        mediaType: "video",
        video: "images/gallery/videos/water-tank-cleaning-by-supriya-water-technology-in-sunrise-apartment.mp4",
        thumbnail: "images/gallery/wtp-plant-sunrise-apartment-kathmandu.jpeg",
        tag: "Tank Cleaning"
    },
    {
        id: 144,
        title: "Water Tank Cleaning - Sunrise Apartment by Supriya Water Technology",
        location: "Sunrise Apartment",
        category: "tank-cleaning",
        mediaType: "video",
        video: "images/gallery/videos/water-tank-cleaning-sunrise-apartment-by-supriyawatertechnology.mp4",
        thumbnail: "images/gallery/wtp-plant-sunrise-apartment-kathmandu.jpeg",
        tag: "Tank Cleaning"
    },
    {
        id: 145,
        title: "Water Tank Cleaning Promo - SWT",
        location: "Service Promo",
        category: "tank-cleaning",
        mediaType: "video",
        video: "images/gallery/videos/water-tankc-cleaning-promo-swt.mp4",
        thumbnail: "images/gallery/filter-media-replacement-gwarko.jpeg",
        tag: "Tank Cleaning",
        pinned: true
    },
    {
        id: 146,
        title: "Flavia RO Promo",
        location: "Product Showcase",
        category: "products",
        mediaType: "video",
        video: "images/gallery/videos/flavia-ro-promo.mp4",
        thumbnail: "images/gallery/flavia-ro-swt-showcase-to-public-kathmandu.jpeg",
        tag: "Flavia RO"
    }
];

// ========================================
// BLOG POSTS (23 items)
// ========================================
const blog = [
    {
        id: 23,
        title: "Featured in Online Khabar - NEA Decoration Project Recognition",
        date: "2026-06-18",
        author: "Media Team",
        category: "Media Coverage",
        image: "images/blog/featured-in-online-khabar-page-nea-decoraation.png",
        excerpt: "Supriya Water Technology featured in Online Khabar for our exceptional NEA decoration project, bringing recognition to our Digital Lighting Decoration Nepal brand.",
        content: "We are thrilled to announce that Supriya Water Technology has been featured in Online Khabar, one of Nepal's leading news portals, for our outstanding work on the NEA decoration project. This media recognition highlights our commitment to excellence in both water treatment and innovative illumination solutions through our sister brand, Digital Lighting Decoration Nepal. The feature showcases our technical expertise, creative vision, and dedication to delivering world-class projects that transform public spaces across Nepal."
    },
    {
        id: 1,
        title: "KT-20 Launch in Nepal by Supriya Water Technology",
        date: "2026-05-20",
        author: "Product Team",
        category: "Product Launch",
        image: "images/blog/KT-20-launch-in-nepal-by-supriya-water-technology.png",
        excerpt: "Introducing KT-20, our latest innovative water treatment solution launched exclusively in Nepal by Supriya Water Technology.",
        content: "We are excited to announce the launch of KT-20, a groundbreaking water treatment product that marks a new chapter in Nepal's water purification industry. This advanced system combines cutting-edge technology with local expertise..."
    },
    {
        id: 2,
        title: "Always Use Professional Water Filter Media for Long Life of Plant and Pure Water",
        date: "2018-08-20",
        author: "Technical Team",
        category: "Maintenance",
        image: "images/blog/always-use-professional-water-filter-media-for-long-lifee-of--plant-and-pure-water.jpeg",
        excerpt: "Understanding the importance of professional-grade water filter media for maintaining plant efficiency and ensuring pure water output.",
        content: "Using professional water filter media is crucial for the longevity of your water treatment plant and ensuring consistently pure water. Quality filter media directly impacts the performance and lifespan of your entire water purification system..."
    },
    {
        id: 3,
        title: "Award of Recognition from Supreme Associates Traders Partner Meet",
        date: "2022-11-18",
        author: "Supriya Water Team",
        category: "Awards",
        image: "images/blog/award-of-recognistion-from-supreme-associates-traders-partner-meet.jpg",
        excerpt: "Honored to receive the Award of Recognition from Supreme Associates Traders at their annual partner meet, acknowledging our excellence in water solutions.",
        content: "Supriya Water Technology is proud to receive the Award of Recognition from Supreme Associates Traders at their prestigious partner meet. This award recognizes our commitment to excellence, innovation, and outstanding service in the water treatment industry..."
    },
    {
        id: 4,
        title: "Meeting with BATAS Organisation Founder Director Aanand Raj Batas",
        date: "2021-09-25",
        author: "Supriya Water Team",
        category: "Partnership",
        image: "images/blog/batas-organisation-founder-director-aanand-raj-batas-meeting.jpeg",
        excerpt: "Honored to meet with Mr. Aanand Raj Batas, Founder Director of BATAS Organisation, discussing collaboration opportunities for community water solutions.",
        content: "We are proud to share our recent meeting with Mr. Aanand Raj Batas, the esteemed Founder Director of BATAS Organisation. This meaningful discussion centered around potential collaboration opportunities and innovative approaches to providing sustainable water solutions for communities across Nepal..."
    },
    {
        id: 5,
        title: "Best Vendor Award from Aloft Thamel",
        date: "2023-06-08",
        author: "Supriya Water Team",
        category: "Awards",
        image: "images/blog/best-vendor-award-aloft-thamel.jpeg",
        excerpt: "Proud recipients of the Best Vendor Award from Aloft Thamel, recognizing our exceptional service and quality water treatment solutions.",
        content: "Supriya Water Technology has been honored with the Best Vendor Award from Aloft Thamel, one of Kathmandu's premium hotels. This recognition reflects our dedication to providing top-quality water treatment solutions and exceptional customer service..."
    },
    {
        id: 6,
        title: "Dasarath Rangasala Decoration for South Asian Games - First Time in Nepal by Digital Lighting Decoration Nepal",
        date: "2019-12-24",
        author: "Innovation Team",
        category: "Projects",
        image: "images/blog/dasarath-rangsala-decoration-south-asian-games-first-time-in-nepal-by-digital-lighting-decoration-nepal-a-sister-brand-of-supriya-water-technology.jpeg",
        excerpt: "Historic achievement: Digital Lighting Decoration Nepal, a sister brand of Supriya Water Technology, lights up Dasarath Rangasala for South Asian Games.",
        content: "In a groundbreaking achievement, Digital Lighting Decoration Nepal, our sister brand, successfully illuminated Dasarath Rangasala for the South Asian Games. This marked the first time in Nepal's history that such advanced digital lighting decoration was implemented for a major sporting event..."
    },
    {
        id: 7,
        title: "Flavia SWT Presence in Kathmandu Shop",
        date: "2020-07-12",
        author: "Sales Team",
        category: "Business",
        image: "images/blog/falvia-swt-presence inkathmandu shop.jpeg",
        excerpt: "Expanding our reach: Flavia RO products now available in multiple retail outlets across Kathmandu for customer convenience.",
        content: "We are delighted to announce the expanded presence of Flavia products by Supriya Water Technology in retail shops throughout Kathmandu. This strategic expansion ensures that customers can easily access our premium water purification solutions..."
    },
    {
        id: 8,
        title: "First Time in Nepal: Digital Lighting Decoration at NEA Headquarter",
        date: "2019-10-27",
        author: "Innovation Team",
        category: "Innovation",
        image: "images/blog/first-time-in-nepal-digital-lighting-decoration-nepal-nea-headquater.jpeg",
        excerpt: "Proud to be the first company in Nepal to install digital lighting decoration at Nepal Electricity Authority Headquarter, showcasing innovation in illumination technology.",
        content: "Supriya Water Technology has achieved a historic milestone by becoming the first company in Nepal to install state-of-the-art digital lighting decoration at the Nepal Electricity Authority (NEA) Headquarter. This groundbreaking project demonstrates our commitment to innovation and excellence in both water treatment and advanced illumination technologies..."
    },
    {
        id: 9,
        title: "Innovative Product by Supriya Water Technology: 100 LPH Covered Body RO Plant",
        date: "2017-05-30",
        author: "Product Team",
        category: "Innovation",
        image: "images/blog/innovative-product-byb-supriya-water-technology-100-lph-covered-body-ro-plant.jpeg",
        excerpt: "Introducing our innovative 100 LPH covered body RO plant, combining efficiency, aesthetics, and advanced water purification technology.",
        content: "Supriya Water Technology proudly presents our latest innovation: the 100 LPH Covered Body RO Plant. This cutting-edge system combines sleek design with powerful purification capabilities, setting new standards in commercial water treatment..."
    },
    {
        id: 10,
        title: "Launch of Supriya Water Technology Website",
        date: "2026-06-18",
        author: "Digital Team",
        category: "Company News",
        image: "images/blog/launch-of-website-swt.jpeg",
        excerpt: "Celebrating the launch of our official website, bringing our water solutions closer to customers across Nepal through digital innovation.",
        content: "We are thrilled to announce the official launch of the Supriya Water Technology website. This new digital platform represents our commitment to making quality water solutions more accessible to customers throughout Nepal..."
    },
    {
        id: 11,
        title: "RO Dispensing Unit 250-500 LPH: Innovating Product",
        date: "2016-03-22",
        author: "Product Team",
        category: "Product Launch",
        image: "images/blog/ro-dispensing-unit-250:500lph-innovating-product.jpeg",
        excerpt: "Revolutionizing water dispensing with our new 250-500 LPH RO Dispensing Unit, perfect for high-demand commercial applications.",
        content: "Introducing our revolutionary RO Dispensing Unit with 250-500 LPH capacity, designed to meet the demands of large commercial establishments, offices, and institutions. This innovative product sets new benchmarks in water dispensing technology..."
    },
    {
        id: 12,
        title: "Supriya Water Technology Chitwan Shop Opening",
        date: "2015-04-10",
        author: "Expansion Team",
        category: "Business",
        image: "images/blog/supriya-water-technology-in-chitwan-shop.jpeg",
        excerpt: "Expanding our network: New Supriya Water Technology shop opens in Chitwan, bringing quality water solutions to more communities.",
        content: "We are excited to announce the opening of our new shop in Chitwan, extending our reach and making our premium water treatment solutions more accessible to the people of this vibrant region..."
    },
    {
        id: 13,
        title: "Team Water Fountain Installation at Narayanghat Resort",
        date: "2014-09-05",
        author: "Installation Team",
        category: "Projects",
        image: "images/blog/team-water-fountain-installation-narayanghat-resort.jpeg",
        excerpt: "Our expert team successfully completes stunning water fountain installation at a premium resort in Narayanghat, showcasing our technical excellence.",
        content: "Our skilled installation team has successfully completed a magnificent water fountain project at a prestigious resort in Narayanghat. This project showcases our expertise in designing and installing complex water features..."
    },
    {
        id: 14,
        title: "Trust Gained from Mr. Kulman Ghising - Former MD of Nepal Electricity Authority",
        date: "2022-03-14",
        author: "Supriya Water Team",
        category: "Recognition",
        image: "images/blog/trust-gained-from-mr-kulman-ghising-former-managing-director-of-nepal-electricity-authority-for-purification-work-treatment-of-their-plant.jpg",
        excerpt: "Honored to gain the trust of Mr. Kulman Ghising, Former Managing Director of NEA, for water purification and treatment work at their facilities.",
        content: "We are deeply honored to have gained the trust and confidence of Mr. Kulman Ghising, the highly respected former Managing Director of Nepal Electricity Authority. His trust in our capabilities for water purification and treatment work at NEA facilities is a testament to our commitment to excellence..."
    },
    {
        id: 15,
        title: "Water Filter Association Meet 2023",
        date: "2023-02-18",
        author: "Supriya Water Team",
        category: "Events",
        image: "images/blog/water-filter-assosiation-meet-2023.jpeg",
        excerpt: "Active participation in Water Filter Association Meet 2023, strengthening industry connections and sharing insights on water treatment innovations.",
        content: "Supriya Water Technology actively participated in the Water Filter Association Meet 2023, joining industry leaders and experts to discuss the latest trends, challenges, and innovations in water treatment technology. This valuable gathering strengthened our industry connections and provided insights into the future of water purification in Nepal..."
    },
    {
        id: 16,
        title: "Magnificent Water Fountain Installation at Birgunj Hotel",
        date: "2026-04-10",
        author: "Fountain Team",
        category: "Projects",
        image: "images/blog/water-fountain-birgunj-hotel copy.jpeg",
        excerpt: "Stunning digital water fountain installation at a premium hotel in Birgunj, featuring advanced LED lighting and synchronized water choreography.",
        content: "Supriya Water Technology proudly presents our magnificent water fountain installation at a prestigious hotel in Birgunj. This project showcases our expertise in designing and installing state-of-the-art digital fountains with programmable LED lighting, music synchronization, and captivating water choreography. The fountain has become a landmark attraction, delighting guests and visitors with its mesmerizing displays. Our team's dedication to excellence and attention to detail has once again transformed a space into a spectacular visual experience..."
    },
    {
        date: "2023-04-15",
        title: "KT-20 Testing at Aloft Hotel Thamel",
        author: "Technical Team",
        category: "Technical",
        image: "images/blog/kt-20-testing-aloft-hotel-thamel.jpeg",
        excerpt: "Successful field testing of KT-20 water filter media at Aloft Hotel Thamel, demonstrating exceptional performance and efficiency in real-world hospitality applications.",
        content: "Our technical team conducted comprehensive field testing of KT-20 water filter media at the prestigious Aloft Hotel Thamel. The testing phase demonstrated outstanding performance in removing impurities, maintaining consistent water quality, and extending filter life. This real-world validation at a high-demand hospitality venue confirms KT-20's reliability and efficiency for commercial applications. The hotel management was extremely satisfied with the results, noting improved water quality and reduced maintenance requirements..."
    },
    {
        date: "2019-12-30",
        title: "Letter of Appreciation from Sports & Youth Minister - South Asian Games 2019",
        author: "Supriya Water Team",
        category: "Recognition",
        image: "images/blog/letter-of-appreciation-by-sports&youth-minister-south-asian-games-2019.jpeg",
        excerpt: "Honored to receive a Letter of Appreciation from the Ministry of Youth and Sports for our outstanding digital lighting decoration work during South Asian Games 2019.",
        content: "We are immensely proud to have received a Letter of Appreciation from the Honorable Minister of Youth and Sports for our exceptional contribution to the South Asian Games 2019. Our Digital Lighting Decoration Nepal team, a sister brand of Supriya Water Technology, illuminated Dasarath Rangasala with cutting-edge digital lighting displays that captivated audiences and enhanced the grandeur of this historic sporting event. This recognition from the Ministry acknowledges our commitment to excellence and innovation in bringing international-standard lighting technology to Nepal for the first time..."
    },
    {
        date: "2023-03-20",
        title: "Lifetime Membership - Water Filter Association Nepal",
        author: "Supriya Water Team",
        category: "Recognition",
        image: "images/blog/life-time-membership-water-filter-associaation-nepal.jpeg",
        excerpt: "Proud to receive Lifetime Membership from Water Filter Association Nepal, recognizing our enduring contribution to the water treatment industry.",
        content: "Supriya Water Technology has been honored with Lifetime Membership from the Water Filter Association of Nepal, a prestigious recognition of our sustained excellence and significant contributions to Nepal's water treatment industry. This membership acknowledges our role as industry leaders, our commitment to quality standards, and our continuous efforts in advancing water purification technology across the nation. We remain dedicated to collaborating with industry partners to ensure access to safe, clean drinking water for all communities in Nepal..."
    },
    {
        date: "2019-12-18",
        title: "Online Public Craze of Digital Lighting Decoration at NEA",
        author: "Digital Team",
        category: "Events",
        image: "images/blog/online-public-craze-of-our-work-digital-lighting-decoration-nepal-nea.jpg",
        excerpt: "Our digital lighting decoration at Nepal Electricity Authority headquarters went viral on social media, capturing the public's imagination with stunning visual displays.",
        content: "The digital lighting decoration installed by Digital Lighting Decoration Nepal at the Nepal Electricity Authority (NEA) headquarters became an overnight social media sensation, with thousands of people sharing photos and videos online. This unprecedented public response showcased the power of innovative illumination technology in transforming public spaces. The project featured programmable RGB pixel lighting with custom content display capabilities, creating mesmerizing patterns and animations that had never been seen before in Nepal. The overwhelming positive feedback from the public validated our vision of bringing world-class digital lighting to Nepal..."
    },
    {
        date: "2023-02-15",
        title: "Pashupatinath Shivratri Digital Lighting Decoration",
        author: "Digital Team",
        category: "Events",
        image: "images/blog/pashupatinath-shivratri-digital-lighting-decoration-nepal.jpeg",
        excerpt: "Illuminating Nepal's most sacred Hindu temple during Maha Shivaratri with respectful and enchanting digital lighting displays, creating a divine atmosphere for millions of devotees.",
        content: "Digital Lighting Decoration Nepal, our sister company, had the sacred honor of illuminating the Pashupatinath Temple complex during Maha Shivaratri celebrations. For four consecutive years, we have provided digital lighting decoration that enhances the spiritual atmosphere while respecting the sanctity of this UNESCO World Heritage Site. Our custom RGB pixel lighting system was carefully designed to create an ethereal ambiance that complemented the divine festivities. The project required meticulous planning, technical expertise, and deep cultural sensitivity. Millions of devotees and visitors experienced the enhanced spiritual environment, and the lighting became an integral part of Nepal's largest Hindu festival celebration..."
    }
];

// ========================================
// WATER FOUNTAIN DESIGNS (21 items)
// ========================================
// WATER FOUNTAIN DESIGNS (24 items)
// ========================================
const fountains = [
    {
        id: 1,
        name: "Digital Lighting Fountain",
        page: 1,
        price: "Contact for Price",
        image: "https://s.alicdn.com/@sc04/kf/H8f785fdf22f5408e9efad745c4296c1ac/DEWY-Commercial-Grade-Dryland-Outdoor-Fountain-Dance-Fountain-Colorful-Light-Water-Fountain-for-Scenic-Spot-Garden.jpg_300x300.jpg",
        description: "Advanced digital lighting fountain with programmable LED colors and patterns synchronized with water jets.",
        features: ["Programmable LED", "Color patterns", "DMX control", "Remote operation"]
    },
    {
        id: 2,
        name: "Dancing Fountain",
        page: 1,
        price: "Contact for Price",
        image: "https://static.wixstatic.com/media/da27e7_89ef6a12316940339dc697cee5d9d325~mv2.jpg/v1/fill/w_480,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/da27e7_89ef6a12316940339dc697cee5d9d325~mv2.jpg",
        description: "Dynamic dancing fountain with choreographed water movements creating spectacular shows.",
        features: ["Choreographed movements", "Multiple jets", "Show programming", "Synchronized water dance"]
    },
    {
        id: 3,
        name: "Vertical Jet Fountain",
        page: 1,
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/ANDROID/Default/2021/10/OJ/YA/BZ/59180918/product-jpeg.jpg",
        description: "Classic vertical jet fountain with powerful upward water streams reaching impressive heights.",
        features: ["High vertical jets", "Adjustable height", "Single/multiple jets", "Impressive water reach"]
    },
    {
        id: 4,
        name: "Cascade Sheet Fountain",
        page: 1,
        price: "Contact for Price",
        image: "https://cpimg.tistatic.com/01067310/b/5/Sheet-Fall-Cascade.jpg",
        description: "Elegant cascade sheet fountain creating smooth flowing water sheets for a tranquil effect.",
        features: ["Smooth water sheets", "Cascading effect", "Peaceful ambiance", "Elegant design"]
    },
    {
        id: 5,
        name: "Flower Jet Fountain",
        page: 1,
        price: "Contact for Price",
        image: "https://aceintegrated.com/color/wp-content/uploads/2025/01/flower-jet-nozzles-2.webp",
        description: "Beautiful flower jet fountain with water streams creating blooming flower patterns.",
        features: ["Flower pattern", "Decorative design", "Aesthetic appeal", "Garden centerpiece"]
    },
    {
        id: 6,
        name: "Foam Jet Fountain",
        page: 2,
        price: "Contact for Price",
        image: "https://img3.exportersindia.com/product_images/bc-full/2020/7/7419267/foam-with-bubble-jet-fountain-1595564673-5530970.jpeg",
        description: "Unique foam jet fountain producing aerated foamy water jets with a soft, white appearance.",
        features: ["Foamy water jets", "Aerated streams", "Soft appearance", "Unique visual effect"]
    },
    {
        id: 7,
        name: "Bell Jet Fountain",
        page: 2,
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2022/7/ZK/JD/KW/38137902/new-product-500x500.jpeg",
        description: "Classic bell jet fountain creating beautiful bell-shaped water formations.",
        features: ["Bell-shaped water", "Classic design", "Smooth formation", "Elegant appearance"]
    },
    {
        id: 8,
        name: "Crown Jet Fountain",
        page: 2,
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2025/3/493784362/ZY/ZH/TA/11868443/crown-jet-fountains.jpg",
        description: "Majestic crown jet fountain with water jets forming a royal crown pattern.",
        features: ["Crown pattern", "Multiple jets", "Majestic appearance", "Royal design"]
    },
    {
        id: 9,
        name: "Musical Fountain",
        page: 2,
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/1/AS/SM/AG/59590424/fountain-jpg.jpg",
        description: "Spectacular musical fountain with water jets synchronized to music creating mesmerizing shows.",
        features: ["Music synchronization", "Choreographed show", "LED lighting", "Entertainment feature"]
    },
    {
        id: 10,
        name: "Geyser Jet",
        page: 2,
        price: "Contact for Price",
        image: "https://2.wlimg.com/product_images/bc-full/dir_113/3388091/geyser-jet-fountain-1505719980-3336341.jpeg",
        description: "Powerful geyser jet fountain mimicking natural geysers with explosive water bursts.",
        features: ["Explosive bursts", "High power", "Natural geyser effect", "Dramatic display"]
    },
    {
        id: 11,
        name: "Water Curtain Jet Fountain",
        page: 3,
        price: "Contact for Price",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPUNf0o3-QGrSb_Hw5ihiCo8te2fmjqRmug&s",
        description: "Impressive water curtain jet fountain creating vertical water walls for stunning visual effects.",
        features: ["Vertical water walls", "Curtain effect", "Impressive height", "Visual barrier"]
    },
    {
        id: 12,
        name: "Floating Fountain",
        page: 3,
        price: "Contact for Price",
        image: "https://cdn11.bigcommerce.com/s-06d69/images/stencil/1280x1280/products/1520/7520/Gemini_Generated_Image_ln8c4cln8c4cln8c_1_1__23558.1775147914.jpg?c=2?imbypass=on",
        description: "Large floating fountain system designed for lakes, ponds, and water bodies.",
        features: ["Lake/pond installation", "Floating platform", "High capacity", "Multiple patterns"]
    },
    {
        id: 13,
        name: "Lighting Fountain",
        page: 3,
        price: "Contact for Price",
        image: "https://www.fountainmountain.com/cdn/shop/products/RGBWLEDmulticolor.jpg?v=1677609302",
        description: "Illuminated fountain with integrated lighting system creating stunning nighttime displays.",
        features: ["Integrated lighting", "Night display", "Color options", "Ambient illumination"]
    },
    {
        id: 14,
        name: "Water Screen Fountain",
        page: 4,
        price: "Contact for Price",
        image: "https://chinamusicfountain.com/wp-content/uploads/2023/08/water-screen-projection-for-music-fountain.webp",
        description: "Advanced water screen fountain projecting images and videos on water curtain screens.",
        features: ["Projection screen", "Video display", "Image projection", "Multimedia feature"]
    },
    {
        id: 15,
        name: "Dandelion Jet Fountain",
        page: 4,
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/12/469675817/UF/YC/DC/38169450/dandelion-jet-fountain.jpg",
        description: "Beautiful dandelion jet fountain with water sprays resembling dandelion seeds dispersing in the wind.",
        features: ["Dandelion pattern", "Delicate sprays", "Natural aesthetics", "Multiple nozzles"]
    },
    {
        id: 16,
        name: "Pyramid Jet Fountain",
        page: 4,
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/FM/DA/OD/SELLER-49688527/outdoor-pyramid-fountain-500x500.png",
        description: "Geometric pyramid jet fountain with water jets forming a perfect pyramid shape.",
        features: ["Pyramid formation", "Geometric design", "Symmetrical pattern", "Architectural appeal"]
    },
    {
        id: 17,
        name: "Fan Jet Fountain",
        page: 5,
        price: "Contact for Price",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTES5B9LgJO0DA4pPbsO85SQpqRO2CFXCYrZA&s",
        description: "Elegant fan jet fountain creating wide fan-shaped water displays with graceful arcs.",
        features: ["Fan-shaped spray", "Wide coverage", "Graceful arcs", "Elegant display"]
    },
    {
        id: 18,
        name: "Cluster Arch Jet Fountain",
        page: 5,
        price: "Contact for Price",
        image: "https://everbluepond.com/cdn/shop/products/Cluster_Arch_Nozzle_for_Aqua_Control_Evolution_Series_1_2_HP_Fountain_-_On_Water_Display_at_Night_with_Led_Light_384x384.png?v=1700703823",
        description: "Spectacular arch jet fountain with water jets forming beautiful arching pathways.",
        features: ["Arching water jets", "Multiple arches", "Pathway effect", "Elegant curves"]
    },
    {
        id: 19,
        name: "Ring Jet Fountain",
        page: 5,
        price: "Contact for Price",
        image: "https://3.imimg.com/data3/QU/WC/MY-2925138/1318065743fountain_purple-jpg.jpg",
        description: "Circular ring jet fountain with water jets arranged in perfect ring formations.",
        features: ["Ring formation", "Circular pattern", "Symmetrical design", "360° display"]
    },
    {
        id: 20,
        name: "Flame Fountain (Fire & Water Combination)",
        page: 5,
        price: "Contact for Price",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeTuYUkMHriyOlV979OitvsHDwwADPcOidA&s",
        description: "Dramatic flame fountain combining fire and water elements for spectacular visual effects.",
        features: ["Fire & water combo", "Dramatic effect", "Safety features", "Night spectacle"]
    },
    {
        id: 21,
        name: "Mist / Fog Fountain",
        page: 5,
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2025/2/489678222/XZ/OO/IA/10612811/mist-fog-fountain-500x500.jpg",
        description: "Mystical mist and fog fountain creating atmospheric effects with ultra-fine water particles.",
        features: ["Ultra-fine mist", "Fog effect", "Atmospheric ambiance", "Cooling effect"]
    },
    {
        id: 22,
        name: "Laser Fountain",
        page: 6,
        price: "Contact for Price",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_KUT8A8GiuAhBEnNlRMFbnvFCgYFEL5few&s",
        description: "High-tech laser fountain with laser light shows integrated with water displays.",
        features: ["Laser light show", "Synchronized effects", "High-tech display", "Night entertainment"]
    },
    {
        id: 23,
        name: "Dome Shape Fountain",
        page: 6,
        price: "Contact for Price",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/12/469678205/VL/TN/TB/38169450/s-l1200.jpg",
        description: "Advanced digital lighing fountain combining water, lights in dome shape",
        features: ["Complete Digital", "RGB lights", "Programmable", "Ultimate experience"]
    },
    {
        id: 24,
        name: "Jumping Jet Fountain",
        page: 6,
        price: "Contact for Price",
        image: "https://chinamusicfountain.com/wp-content/uploads/2023/07/jumpingfountain.webp",
        description: "Interactive jumping jet fountain with water streams that leap and arc through the air creating playful displays.",
        features: ["Jumping water streams", "Interactive display", "Playful effect", "Programmable patterns"]
    }
];

// ========================================
// ACHIEVEMENTS/TRUST GAINED (21 items)
// ========================================
// ACHIEVEMENTS/TRUST GAINED (5 items)
// ========================================
const achievements = [
    {
        id: 1,
        title: "Building Trust Through Excellence @Mr. Kulman Ghising, Former Director of Nepal Electricity Authority",
        image: "https://i.postimg.cc/V6HDpVfm/kulman.png",
        description: "Meeting with the former Director of NEA, symbolizing the trust and reputation earned through commitment and professional service."
    },
    {
        id: 2,
        title: "Lifetime Member @Water Filter Association of Nepal",
        image: "https://i.postimg.cc/DZXFcMbG/PXL-20250206-064637268.jpg",
        description: "Proud Lifetime Member of the Water Filter Association of Nepal, demonstrating our commitment to industry standards, professional excellence, and the promotion of safe drinking water solutions across the country."
    },
    {
        id: 3,
        title: "Best Vendor/Service Award by Aloft Hotel Thamel",
        image: "https://i.postimg.cc/t4MLmzb6/alof-award.jpg",
        description: "Recognized for excellence in water treatment serivce & overall guiding of their staffs regarding water treatment & RO Plant Service."
    },
    {
        id: 4,
        title: "Water Filter Association of Nepal Awareness Campaign on Water Purity",
        image: "https://i.postimg.cc/2j7gfYm6/wafean-awareness.jpg",
        description: "As part of the Water Filter Association of Nepal's Awareness Campaign on Water Purity, we actively support initiatives that educate communities about the importance of safe drinking water, proper water treatment, and healthy water consumption practices to promote a healthier Nepal."
    },
    {
        id: 5,
        title: "Water Filter Association Nepal Meet 2026",
        image: "https://i.postimg.cc/8cXHPttb/water-filter-association-nepal-meet.jpg",
        description: "Participated in the Water Filter Association of Nepal meeting, collaborating with industry professionals to discuss water quality standards, innovation, and safe drinking water initiatives."
    },
    {
        id: 6,
        title: "Meeting with BATAS Organisation Founder Director Aanand Raj Batas",
        image: "images/blog/batas-organisation-founder-director-aanand-raj-batas-meeting.jpeg",
        description: "Honored to meet with Mr. Aanand Raj Batas, Founder Director of BATAS Organisation, discussing collaboration opportunities and community water solutions."
    },
    {
        id: 7,
        title: "First Time in Nepal - Digital Lighting Decoration at NEA Headquarter",
        image: "images/blog/first-time-in-nepal-digital-lighting-decoration-nepal-nea-headquater.jpeg",
        description: "Proud to be the first company in Nepal to install digital lighting decoration at Nepal Electricity Authority (NEA) Headquarter, showcasing innovation in illumination technology."
    }
];

// ========================================
// RESOURCES/DOWNLOADS (21 items)
// ========================================
// HOW TO ADD PDFs:
// 1. Put your PDF files in the 'pdfs/' folder
// 2. Update the 'url' field below with: "pdfs/your-filename.pdf"
// 3. Update title, fileSize, and category as needed
// See HOW_TO_ADD_PDF_RESOURCES.md for detailed instructions

const resources = [
    {
        id: 1,
        title: "Supriya Water Technology - Company Profile",
        icon: "fa-file-pdf",
        fileType: "PDF",
        fileSize: "1.2 MB",
        url: "pdfs/swt-company-profile.pdf",
        category: "Brochures",
        description: "Complete company profile showcasing our expertise, services, and achievements in water treatment solutions across Nepal."
    },
    {
        id: 2,
        title: "Fountain Design Catalog - SWT",
        icon: "fa-file-pdf",
        fileType: "PDF",
        fileSize: "4.8 MB",
        url: "pdfs/fountain-design-swt.pdf",
        category: "Catalogs",
        description: "Comprehensive catalog featuring our water fountain designs including musical fountains, decorative fountains, and custom installations."
    },
    {
        id: 3,
        title: "Green Sand KT Media Brochure",
        icon: "fa-book",
        fileType: "PDF",
        fileSize: "1.5 MB",
        url: "pdfs/green-sand-kt-media.pdf",
        category: "Brochures",
        description: "Technical brochure for Green Sand KT filter media used for iron and manganese removal in water treatment systems."
    },
    {
        id: 4,
        title: "KT Anthracite Media Specifications",
        icon: "fa-file-alt",
        fileType: "PDF",
        fileSize: "1.6 MB",
        url: "pdfs/kt-anthracite-media.pdf",
        category: "Technical",
        description: "Detailed specifications for KT Anthracite filter media, ideal for multi-media filtration in water treatment plants."
    },
    {
        id: 5,
        title: "KT MnO₂ Media - SWT Brochure",
        icon: "fa-file-pdf",
        fileType: "PDF",
        fileSize: "1.4 MB",
        url: "pdfs/kt-mn02-swt-brochure.pdf",
        category: "Brochures",
        description: "Product brochure for Manganese Dioxide (MnO₂) filter media for iron, manganese, and hydrogen sulfide removal."
    },
    {
        id: 6,
        title: "RO Water Dispenser Specifications",
        icon: "fa-certificate",
        fileType: "PDF",
        fileSize: "130 KB",
        url: "pdfs/ro-water-dispenser-specs.pdf",
        category: "Technical",
        description: "Technical specifications for our RO water dispensing units suitable for commercial and institutional use."
    },
    {
        id: 7,
        title: "SWT Book of Balance",
        icon: "fa-calendar-alt",
        fileType: "PDF",
        fileSize: "1.7 MB",
        url: "pdfs/swt-book-of-balance.pdf",
        category: "Guides",
        description: "Comprehensive guide on water balance, quality parameters, and treatment methodologies for optimal water systems."
    },
    {
        id: 8,
        title: "SWT Expertise Portfolio",
        icon: "fa-file-pdf",
        fileType: "PDF",
        fileSize: "3.2 MB",
        url: "pdfs/swt-expertise.pdf",
        category: "Brochures",
        description: "Portfolio showcasing our expertise, completed projects, and success stories across various water treatment sectors."
    },
    {
        id: 9,
        title: "SWT Visiting Card",
        icon: "fa-file-alt",
        fileType: "PDF",
        fileSize: "1.3 MB",
        url: "pdfs/swt-visiting-card.pdf",
        category: "Documents",
        description: "Digital visiting card with complete contact information and company details for easy reference."
    }
];

// ========================================
// PLEASURE TO SERVE / CLIENT LOGOS (21 items)
// ========================================
const pleasureServe = [
    {
        id: 1,
        name: "Aloft Hotel",
        logo: "https://media-cdn.tripadvisor.com/media/photo-s/18/7e/d2/3a/hotel-s-logo.jpg"
    },
    {
        id: 2,
        name: "Patanjali Ayurved",
        logo: "https://divyayoga.com/wp-content/uploads/2022/03/Logo.webp"
    },
    {
        id: 3,
        name: "KIST College",
        logo: "https://www.kist.edu.np/resources/assets/img/logo_small.jpg"
    },
    {
        id: 4,
        name: "Nepal Police",
        logo: "https://upload.wikimedia.org/wikipedia/en/0/06/Nepal_Police_logo.png"
    },
    {
        id: 5,
        name: "Embassy of India Kathmandu",
        logo: "https://www.sparrowjob.com/wp-content/uploads/2016/08/Screen-Shot-2016-08-25-at-8.48.50-PM.png"
    },
    {
        id: 6,
        name: "Kathmandu University",
        logo: "https://ifip94.ku.edu.np/assets/ku%20logo.png"
    },
    {
        id: 7,
        name: "NEA",
        logo: "https://sarkarijagir.com/wp-content/uploads/2021/07/NEA-Logo.png"
    },
    {
        id: 8,
        name: "Chhaya Center",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsu4_HgdSoAL-8B-4Nla0Agj8DZI3sR23xeg&s"
    },
    {
        id: 9,
        name: "British Embassy",
        logo: "https://logodix.com/logo/2100310.jpg"
    },
    {
        id: 10,
        name: "CG Landmark",
        logo: "https://yt3.googleusercontent.com/ytc/AIdro_kWW9EfB4joYDCU5TYqiuT2HGJeaFyNHkDj1trq1eJsFg=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id: 11,
        name: "Pashupatinath Area Development Trust",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ju2dQ6UIofHdDThJ-3nljZfmKUQApDa81w&s"
    },
    {
        id: 12,
        name: "Nepal Bank",
        logo: "https://media.licdn.com/dms/image/v2/C4E0BAQG5kINAfRYWsg/company-logo_200_200/company-logo_200_200/0/1630621392878/nepal_bank_logo?e=2147483647&v=beta&t=55jgubOhjgg1GL-uhi0q5kBIRZczfYuZ5gST9pgMGlA"
    },
    {
        id: 13,
        name: "Norvic Hospital",
        logo: "https://kantipurjob.com/media/cache/company_profile_pic_large/uploads/employers/b169af81e6c2bf9ddbfaea222795d1bd375caa20.jpg"
    },
    {
        id: 14,
        name: "DAV",
        logo: "https://play-lh.googleusercontent.com/--_cgUm0J1JcUbsbyIHG6IRX5OFdahJtUmOnppOw93K-xqtCR3sznFEyMog68znoTjweLYt88svrc1jqU1w8"
    },
    {
        id: 15,
        name: "Aanand Hotel",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6eZShw5GhJRdLyfOIc12srHV5HUCO3IJQ0A&s"
    },
    {
        id: 16,
        name: "Vayodha Hospital",
        logo: "https://www.policyparlor.com/images/clients/vayodha.png"
    },
    {
        id: 17,
        name: "QFX Cineams",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/QFX_Cinemas_logo.jpg"
    },
    {
        id: 18,
        name: "Waldo Hotel",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzGftN7B7tV8SAMmp2WzEJDnIKTPi87YEeg&s"
    },
    {
        id: 19,
        name: "KVS",
        logo: "https://kv1afa.wordpress.com/wp-content/uploads/2017/11/kvs-logo-colour.jpg"
    },
    {
        id: 20,
        name: "KMC",
        logo: "https://www.careermarg.com/uploads/college-logo/1739342110-kathmandu-medical-college-kmc-kathmandu-kathmandu-logo.webp"
    },
    {
        id: 21,
        name: "Om Sai Hospital",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuGiCnebjj_TjIUBZA0rm-mU2jqlorSNeiQ&s"
    },
    {
        id: 22,
        name: "Hotel Mechi Crown",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJKoIHfUR2nGHN-2h5j9orI_-vRrre87RKLg&s"
    },
    {
        id: 23,
        name: "Siddarath Hotel",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfGJKiLTkJr0qzxzf6W0cP7geoFpZc-1NHQ&s"
    },
    {
        id: 24,
        name: "Batas",
        logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHDUphkT58MrQ/company-logo_200_200/company-logo_200_200/0/1692028029743?e=2147483647&v=beta&t=J5LlJtfGNAaLdhIw-TvUayTtgbt5Di01-EcCF-RQJ_Q"
    },
    {
        id: 25,
        name: "Maniigram Batika",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvaUyhZ-Pl5_WwYlkWTtzK4Z8JqRPs3XBlSw&s"
    },
    {
        id: 26,
        name: "Grande Hospital",
        logo: "https://grandehospital.com/_next/image?url=https%3A%2F%2Fcms.grandehospital.com%2Fstorage%2FSetting%2FLogo%2F4705_LogoofGIH.png&w=640&q=75"
    },
    {
        id: 27,
        name: "Casino Vegas",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJJpfYM0E3W3iNkoeYgIOxrHBHc8oQ5T_wA&s"
    },
    {
        id: 28,
        name: "Sunrise Apartment",
        logo: "https://sunriseapartment.com.np/wp-content/uploads/2018/05/logo-500x500-01.jpg"
    },
    {
        id: 29,
        name: "Pathao",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Pathao_-_Here_with_You.png"
    },
    {
        id: 30,
        name: "TU",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGune0z2b89f3ux5XW7toxbAMKLB7v2S19Rw&s"
    },
    {
        id: 31,
        name: "Narayanhiti Royal Palace",
        logo: "https://cdn.dribbble.com/userupload/23509367/file/original-f8529aacec61a17fdea87495aa7363f7.png"
    }
];

// ========================================
// GLOBAL DATA MANAGER
// ========================================
const DataManager = {
    // Products
    getProducts: () => products,
    getDefaultProducts: () => products,
    
    // Gallery
    getGallery: () => gallery,
    getDefaultGallery: () => gallery,
    
    // Blog
    getBlog: () => [...blog].sort((a, b) => new Date(b.date) - new Date(a.date)),
    getDefaultBlog: () => blog,
    
    // Fountains
    getFountains: () => fountains,
    getDefaultFountains: () => fountains,
    
    // Dealers
    getDealers: () => dealers,
    getDefaultDealers: () => dealers,
    
    // Achievements
    getAchievements: () => achievements,
    getDefaultAchievements: () => achievements,
    
    // Resources
    getResources: () => resources,
    getDefaultResources: () => resources,
    
    // Pleasure to Serve
    getPleasureServe: () => pleasureServe,
    getDefaultPleasureServe: () => pleasureServe,
    
    // Inquiries (empty for now, form submissions can be added)
    getInquiries: () => [],
    
    // Copyright settings
    getCopyright: () => ({
        year: new Date().getFullYear().toString(),
        text: "All rights reserved"
    })
};

// Make everything globally available
window.products = products;
window.gallery = gallery;
window.blog = blog;
window.fountains = fountains;
window.dealers = dealers;
window.achievements = achievements;
window.resources = resources;
window.pleasureServe = pleasureServe;
window.DataManager = DataManager;

console.log('========================================');
console.log('✅ DATA LOADED SUCCESSFULLY');
console.log('========================================');
console.log('📦 Products:', products.length);
console.log('🖼️  Gallery:', gallery.length);
console.log('📝 Blog Posts:', blog.length);
console.log('⛲ Fountains:', fountains.length);
console.log('📍 Dealers:', dealers.length);
console.log('🏆 Achievements:', achievements.length);
console.log('📄 Resources:', resources.length);
console.log('🤝 Client Logos:', pleasureServe.length);
console.log('========================================');
console.log('💡 Edit data.js to update content!');
console.log('========================================');
