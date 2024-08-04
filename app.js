console.log(phones);
const phones = [
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
    {
        brand: 'Xiaomi ',
        model: 'Redmi Note 13 Pro+',
        ram: 16,
        rom: 512,
        camera: '108 megapixel',
        price: 329.00,
        img: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-13-pro-plus-int.jpg'
    },
]

let div = document.querySelector('.products')
let div2 = document.querySelector('.products2')

for (let i = 0; i < phones.length; i++) {
    div.innerHTML += `
    <div class="rounded  card-width  p-2 ">
                    <div class=" text-center  p-2"><img src="${phones[i].img}" class="card-img-width "
                            alt="no image">
                    </div>
                    <p class="mt-1 mb-2"> ${phones[i].brand} ${phones[i].model}</p>
                    <h4 class="mt-5"><sup>RS</sup> ${phones[i].price}</h4>
                    <div class=" fw-lighter wrap1 d-flex align-items-center justify-content-between">
                        <div class="">
                            <p><strike class="strike1 mt-3">
                                    <sup class="strike2">RS</sup>
                                    <span class="strike2">8,000</span>
                                </strike>
                            </p>
                        </div>
                        <div><button type="button" onclick="addtocard(${i})" class="btn card-button-font-size btn-outline-success mb-2">Add To Card</button></div>
                    </div>
                </div>`
}
phones.map((items, index) => {

    div2.innerHTML += `
    <div class="rounded  card-width  p-2 ">
    <div class=" text-center  p-2"><img src="${items.img}" class="card-img-width "
                            alt="no image">
                    </div>
                    <p class="mt-1 mb-2"> ${items.brand} ${items.model}</p>
                    <h4 class="mt-5"><sup>RS</sup> ${items.price}</h4>
                    <div class=" fw-lighter wrap1 d-flex align-items-center justify-content-between">
                    <div class="">
                    <p><strike class="strike1 mt-3">
                    <sup class="strike2">RS</sup>
                    <span class="strike2">8,000</span>
                    </strike>
                    </p>
                    </div>
                    <div><button type="button" onclick="addtocard(${index})" class="btn card-button-font-size btn-outline-success mb-2">Add To Card</button></div>
                    </div>
                    </div>`
})


let array;
let items = JSON.parse(localStorage.getItem('getdata'));
if (items === null) {
    array = [];
} else {
    array = items;
    console.log(array)
}

function addtocard(card) {
    if (array.includes(phones[card])) {
        phones[card].quantity += 1;
    } else {
        phones[card].quantity = 1
        array.push(phones[card]);
    }
    console.log(array);
}


function gotocart() {
    console.log('index-2.html');
    localStorage.setItem('getdata', JSON.stringify(array))
    window.location = 'index-2.html'
}


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




