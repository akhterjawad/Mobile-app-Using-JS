let getitem = JSON.parse(localStorage.getItem('getdata'));
console.log(getitem);
let div = document.querySelector('.products');
const totalAmount = document.querySelector('#total-amount');
function randerscreen() {
    let total = 0;

    if (getitem != null && getitem.length > 0) {
        for (let i = 0; i < getitem.length; i++) {
            total += getitem[i].price * getitem[i].quantity
            div.innerHTML += `
            
    <div class="rounded  card-width  p-2 ">
    <div class=" text-center  p-2"><img src="${getitem[i].img}" class="card-img-width "
            alt="no image">
    </div>
    <p class="mt-1 mb-2"> ${getitem[i].brand} ${getitem[i].model}</p>
    <h4>Price: ${getitem[i].price * getitem[i].quantity}</h4>
    <h5>Quantity:
            <button class="btn btn-primary" onclick="addQuantity(${i})">+</button>
            ${getitem[i].quantity}
            <button class="btn btn-primary" onclick="lessQuantity(${i})">-</button>
            </h5>
    <div class=" fw-lighter wrap1 d-flex align-items-center justify-content-between">
        <div class="">
            <p><strike class="strike1 mt-3">
                    <sup class="strike2">RS</sup>
                    <span class="strike2">8,000</span>
                </strike>
            </p>
        </div>
        <div><button type="button" onclick="deleteItem(${i})" class="btn card-button-font-size btn-outline-success mb-2">Delete</button></div>
    </div>
</div>
    `
        }
        totalAmount.innerHTML = `Total Amount = ${total}`
    } else {
        div.innerHTML = '<h1>No any items found...</h1>';
    }
}
randerscreen()


function addQuantity(i) {
    // div.innerHTML = '';
    getitem[i].quantity += 1
    // renderItems()
    console.log(getitem);
}
function lessQuantity(i) {
    // div.innerHTML = ''
    if (getitem[i].quantity <= 1) {
        getitem.splice(i, 1);

    } else {
        getitem[i].quantity -= 1
    }
    renderItems()

}

function deleteItem(i) {
    div.innerHTML = ''
    getitem.splice(i, 1);
    totalAmount.innerHTML = ''
    renderItems()
}