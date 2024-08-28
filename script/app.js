// Array of phone objects with details like brand, model, RAM, ROM, camera, quantity, price, and image URL
const phones = [
    {
        brand: "Apple",
        model: "iPhone 15 Pro Max",
        ram: 8,
        rom: 256,
        camera: "48 megapixel",
        price: 1099.00,
        img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg"
    }, {
        brand: 'Samsung ',
        model: 'Galaxy A55',
        ram: 12,
        rom: 256,
        camera: '50 megapixel',
        price: 370.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg'
    },
    {
        brand: 'Apple ',
        model: 'iPhone XS Max',
        ram: 4,
        rom: 128,
        camera: '12 megapixel',
        price: 202.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-max-new1.jpg'
    },
    {
        brand: 'Apple ',
        model: 'iPhone 11',
        ram: 4,
        rom: 128,
        camera: '12 megapixel',
        price: 252.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg'
    },
    {
        brand: 'Samsung ',
        model: 'Galaxy S24 Ultra',
        ram: 12,
        rom: 512,
        camera: '200 megapixel',
        price: 999.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg'
    },
    {
        brand: 'Sony ',
        model: 'Xperia 1V',
        ram: 12,
        rom: 256,
        camera: '48 megapixel',
        price: 858.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg'
    },
    {
        brand: 'Xiaomi ',
        model: 'Poco F5',
        ram: 8,
        rom: 256,
        camera: '48 megapixel',
        price: 379.99,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f5-2.jpg'
    },
    {
        brand: 'Google ',
        model: 'Pixel 8 Pro',
        ram: 12,
        rom: 512,
        camera: '50 megapixel',
        price: 999.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg'
    },
];

const phones2 = [
    {
        brand: "Samsung",
        model: "Galaxy Z Fold 5",
        ram: 12,
        rom: 512,
        camera: "50 megapixel",
        price: 1799.00,
        img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg"
    },
    {
        brand: "OnePlus",
        model: "OnePlus 10 Pro",
        ram: 8,
        rom: 256,
        camera: "48 megapixel",
        price: 899.00,
        img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-10-pro.jpg"
    },
    {
        brand: 'Samsung ',
        model: 'Galaxy A55',
        ram: 12,
        rom: 256,
        camera: '50 megapixel',
        price: 370.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg'
    },
    {
        brand: 'Apple ',
        model: 'iPhone XS Max',
        ram: 4,
        rom: 128,
        camera: '12 megapixel',
        price: 202.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-max-new1.jpg'
    },
    {
        brand: 'Apple ',
        model: 'iPhone 11',
        ram: 4,
        rom: 128,
        camera: '12 megapixel',
        price: 252.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg'
    },
    {
        brand: 'Samsung ',
        model: 'Galaxy S24 Ultra',
        ram: 12,
        rom: 512,
        camera: '200 megapixel',
        price: 999.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg'
    },
    {
        brand: 'Sony ',
        model: 'Xperia 1V',
        ram: 12,
        rom: 256,
        camera: '48 megapixel',
        price: 858.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg'
    },
    {
        brand: "Oppo",
        model: "Find X5 Pro",
        ram: 12,
        rom: 256,
        camera: "50 megapixel",
        price: 999.00,
        img: "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x5-pro.jpg"
    },
];


// Select the first div element where products will be displayed
let div = document.querySelector('.products');
// Select the second div element where products will be displayed
let div2 = document.querySelector('.products2');

// Loop through the phones array and dynamically create HTML for each product
phones.map((updateArrayItems, index) => {
    div.innerHTML += `
   <div class="product-card rounded p-2">
        <div class="text-center p-2">
            <img src="${updateArrayItems.img}" class="card-img-width img-fluid" alt="no image">
        </div>
        <p class="mt-1 mb-2">${updateArrayItems.brand} ${updateArrayItems.model}</p>
        <h4 class="mt-5 R-mt"><sup>RS</sup> ${updateArrayItems.price}</h4>
        <div class="fw-lighter d-flex align-items-center justify-content-between">
            <div>
                <p>
                    <strike class="text-muted"><sup>RS</sup>8,000</strike>
                </p>
            </div>
            <div>
                <button type="button" onclick="addtocard(${index})" class="btn btn-sm btn-outline-success responsive-btn">Add To Cart</button>
            </div>
        </div>
    </div>`;
});

// Use map to iterate over the phones array and create HTML for each product in the second div
phones2.map((updateArrayItems, index) => {
    div2.innerHTML += `
   <div class="product-card rounded p-2">
        <div class="text-center p-2">
            <img src="${updateArrayItems.img}" class="card-img-width img-fluid" alt="no image">
        </div>
        <p class="mt-1 mb-2">${updateArrayItems.brand} ${updateArrayItems.model}</p>
        <h4 class="mt-5 R-mt"><sup>RS</sup> ${updateArrayItems.price}</h4>
        <div class="fw-lighter d-flex align-items-center justify-content-between">
            <div>
                <p>
                    <strike class="text-muted"><sup>RS</sup>8,000</strike>
                </p>
            </div>
            <div>
                <button type="button" onclick="addtocard(${index})" class="btn btn-sm btn-outline-success responsive-btn">Add To Cart</button>
            </div>
        </div>
    </div>` ;
});

// Initialize an array to store selected products
let array;
let updateArrayItems = JSON.parse(localStorage.getItem('getdata'));

// Check if there is existing data in localStorage
if (updateArrayItems === null) {
    array = []; // If not, create an empty array
} else {
    array = updateArrayItems; // If yes, use the existing data
    console.log(array);
}

// Function to add a selected product to the cart
function addtocard(card) {
    if (array.includes(phones[card])) {
        phones[card].quantity += 1; // If the product is already in the cart, increase the quantity
    } else {
        phones[card].quantity = 1; // If the product is not in the cart, set quantity to 1
        array.push(phones[card]); // Add the product to the cart array
    }
    console.log(array);
}

// Function to navigate to the cart page and save cart data to localStorage
function gotocart() {
    console.log('index-2.html');
    localStorage.setItem('getdata', JSON.stringify(array));
    Swal.fire({
        title: 'Success!',
        text: 'You mobile is added successfully',
        icon: 'success',
        confirmButtonText: 'Add to card'
    })
        .then((result) => {
            if (result.isConfirmed) {
                window.location = '../index-2.html';
            }
        });
    // window.location = '../index-2.html';
}

// Commented out Owl Carousel settings for future use
// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     responsive: {
//         0: {
//             items: 3
//         },
//         320: {
//             items: 3
//         },
//         600: {
//             items: 4
//         },
//         1000: {
//             items: 8
//         }
//     }
// })
