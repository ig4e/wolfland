const products = [
    {
        picture: ["ClassicCaesarSalad.png"],
        title: { en: "Classic Caesar Salad", ar: "سلطة السيزر" },
        price: 38,
        description: {
            en: "our famous caesar salad mixed with\ngrilled romaine and iceberg lettuce\n,parmesan cheeses",
            ar: "سلطة السيزر الشهيرة\nممزوجة بالخس العربي المشوي\nوخس آيس بيرج وجبنة البارميزان",
        },
        categories: ["appetizersAndSalads"],
    },
    {
        picture: ["Mac&cheese.png"],
        title: { en: "Mac & cheese", ar: "ماك & تشيز" },
        price: 32,
        description: {
            en: "crispy macaroni balls,creamy marinara sauce",
            ar: "كرات المكرونة المقرمشة, صوص المارينارا",
        },
        categories: ["appetizersAndSalads"],
    },
    {
        picture: ["Phipatata.png"],
        title: { en: "Phi patata", ar: "فاي بتاتا" },
        price: 38,
        description: {
            en: "roasted potato, filled with specialsauce and sourcream.",
            ar: "بطاطس محمرة محشوة بصلصة خاصة وكريمة حامضة.",
        },
        categories: ["appetizersAndSalads"],
    },
    {
        picture: ["Triohummus.png"],
        title: { en: "Trio hummus(classic,cherry, avocado)", ar: "تريو حمص" },
        price: 32,
        description: {
            en: "three kind of home made mashed chickpea with cherry, and avocado, plain",
            ar: "تقليدي ،واألفوكادو، الكرز ",
        },
        categories: ["appetizersAndSalads"],
    },
    {
        picture: ["Aranchiniballs.png"],
        title: { en: "Aranchini balls", ar: "أرانشيني بولز" },
        price: 43,
        description: {
            en: "fried crispy rice balls marinara sauce",
            ar: "كرات الأرز المقرمشة المقلية بصلصة المارينارا",
        },
        categories: ["appetizersAndSalads"],
    },
    {
        picture: ["BoutiqueFries.png"],
        title: { en: "Boutique Fries", ar: "بوتيك فرايز" },
        price: 37,
        description: {
            en: "roasted potato, filled with specialsauce and sourcream.",
            ar: "بطاطس, بريسكت مطبوخ ببطء ,سيراتشا ,وصوص جبن",
        },
        categories: ["appetizersAndSalads"],
    },
    {
        picture: ["Redshrimp.png"],
        title: { en: "Red shrimp", ar: "ريد شريمب" },
        price: 37,
        description: {
            en: "fried shrimpscoated with buffalo ranch sauc",
            ar: "روبيان مقلي مغطى بصوص بافلو و رانش",
        },
        categories: ["appetizersAndSalads"],
    },
    //////////// burger and slider
    {
        picture: ["Crispychickenslider.png"],
        title: { en: "Crispy chicken slider", ar: "سلايدر الدجاج" },
        price: 29,
        description: {
            en: "Crispy chicken with american cheese special home made sauce",
            ar: "دجاج مقرمش بالجبنة الأمريكية, صلصة خاصة",
        },
        categories: ["burgerAndSlider"],
    },
    {
        picture: ["PhiBeefburger.png"],
        title: { en: "Phi Beef burger", ar: "فاي برجر" },
        price: 47,
        description: {
            en: "grilled angus beef, melted american truffle cheese, moemade sauce",
            ar: "لحم الأنجوس المشوي,يقدم مع جبنة الترافل",
        },
        categories: ["burgerAndSlider"],
    },
    {
        picture: ["CrispyChicken.png"],
        title: { en: "Crispy Chicken", ar: "كريسبي تشيكن" },
        price: 43,
        description: {
            en: "Crispy chicken with american cheese special home made sauce",
            ar: "دجاج مقرمش بالجبنة الأمريكية، صلصة الشف الخاصه",
        },
        categories: ["burgerAndSlider"],
    },
    {
        picture: ["Classicburger.png"],
        title: { en: "Classic burger", ar: "كلاسيك برجر" },
        price: 43,
        description: {
            en: "Grilled angus beef burger,cucumber, lettuce, mayonnaise",
            ar: "برجر لحم أنجوس مشوي ، خيار ، خس ،مايونيز",
        },
        categories: ["burgerAndSlider"],
    },
    {
        picture: ["Pulledbeefslider.png"],
        title: { en: "Pulled beefslider", ar: "سلايدر لحم" },
        price: 33,
        description: {
            en: "Angus brisket,slow cooked 12 hours, Caramelized onions,smoky barbecue sauce",
            ar: "انجوس بريسكيت مطبوخ ببطء لمدة 12 ساعة، بصل مكرمل ، صلصة باربيكيو المدخن",
        },
        categories: ["burgerAndSlider"],
    },
    //// pizza
    {
        picture: ["Pizzamargarita.png"],
        title: { en: "Pizza margarita", ar: "مارغريتا بيتزا" },
        price: 33,
        description: {
            en: "served with buffalo mozarella, parmesan cheese, fresh tomato sauce, basil",
            ar: "تقدم مع بوفالو موزاريلا ، جبنة بارميزان ، صلصة طماطم طازجة، ريحان",
        },
        categories: ["pizza"],
    },
    {
        picture: ["Chickenspicy.png"],
        title: { en: "Chicken spicy", ar: "بيتزا الدجاج" },
        price: 39,
        description: {
            en: "served with marinated chicken breast, onion, jalapenos, fresh tomato sauce",
            ar: "يقدم مع صدردجاج متبل ، بصل ، هالبينو، صلصة طماطم طازجة.",
        },
        categories: ["pizza"],
    },
    {
        picture: ["Phaipizza.png"],
        title: { en: "Phai pizza", ar: "فاي بيتزا" },
        price: 47,
        description: {
            en: "our signature pizza served with truffle, beef pepperoni, fresh tomato sauce",
            ar: "البيتزا المميزة لدينا تقدم مع الترافل والبيبروني البقري وصلصة الطماطم الطازجة",
        },
        categories: ["pizza"],
    },
    {
        picture: ["Zatarhaloumipie.png"],
        title: { en: "Zatar haloumi pie", ar: "زعتر مع جبنة حلوم" },
        price: 31,
        description: {
            en: "served with fresh oregano and sesame , topped with haloumicheese , baby arugula",
            ar: "تقدم مع الزعتر الطازج والسمسم ،مغطاة بجبنة الحلوم وجرجير صغير",
        },
        categories: ["pizza"],
    },
];
