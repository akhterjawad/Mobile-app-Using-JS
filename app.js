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
        price: 	379.99,
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

let div = document.querySelector('#products')

for (let i = 0; i < phones.length; i++) {
    div.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src=${phones[i].img} alt="">
  <div class="card-body">
    <h5 class="card-title">${phones[i].model}</h5>
    <h6 class="card-title">${phones[i].price}</h6>
    <button class="card-link bg-primary rounded" onclick="addtocard(${i})">Add To Card</button>
  </div>
</div>`
}

let array;
let items = JSON.parse(localStorage.getItem('getdata'));
if(items === null){
    array = [];
}else{
    array = items;
    console.log(array)
}
// let array = []
function addtocard(Click) {
    // console.log('add to card',phones[Click].name);
    if (array.includes(phones[Click])) {
        phones[Click].quantity += 1;
    } else {
        phones[Click].quantity = 1
        array.push(phones[Click]);
    }
    console.log(array);
}


function gotocart() {
    console.log('index-2.html');
    localStorage.setItem('getdata',JSON.stringify(array))
    window.location = 'index-2.html'
}
