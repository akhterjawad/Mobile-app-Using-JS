let getitem = JSON.parse(localStorage.getItem('getdata'));
console.log(getitem);
let div = document.querySelector('.products');
const totalAmount = document.querySelector('#total-amount');

function renderScreen() {
    let total = 0;
    div.innerHTML = '';

    if (getitem && getitem.length > 0) {
        getitem.forEach((item, i) => {
            total += item.price * item.quantity;
            div.innerHTML += `
            <div class="rounded card-width p-2">
                <div class="text-center p-2">
                    <img src="${item.img}" class="card-img-width" alt="no image">
                </div>
                <p class="mt-1 mb-2">${item.brand} ${item.model}</p>
                <h4>Price: ${item.price * item.quantity}</h4>
                <h5>Quantity:
                    <button class="btn btn-primary" onclick="addQuantity(${i})">+</button>
                    ${item.quantity}
                    <button class="btn btn-primary" onclick="lessQuantity(${i})">-</button>
                </h5>
                <div class="fw-lighter wrap1 d-flex align-items-center justify-content-between">
                    <div>
                        <p><strike class="strike1 mt-3">
                            <sup class="strike2">RS</sup>
                            <span class="strike2">8,000</span>
                        </strike></p>
                    </div>
                    <div>
                        <button type="button" onclick="deleteItem(${i})" class="btn card-button-font-size btn-outline-success mb-2">Delete</button>
                    </div>
                </div>
            </div>`;
        });
        totalAmount.innerHTML = `Total Amount = ${total}`;
    } else {
        div.innerHTML = '<h1>No items found...</h1>';
        totalAmount.innerHTML=``;
    }
}

renderScreen();

function addQuantity(i) {
    getitem[i].quantity += 1;
    updateLocalStorage();
    renderScreen();
}

function lessQuantity(i) {
    if (getitem[i].quantity > 1) {
        getitem[i].quantity -= 1;
    } else {
        getitem.splice(i, 1);
    }
    updateLocalStorage();
    renderScreen();
}

function deleteItem(i) {
    getitem.splice(i, 1);
    updateLocalStorage();
    renderScreen();
}

function updateLocalStorage() {
    localStorage.setItem('getdata', JSON.stringify(getitem));
}
