// Retrieve the cart items from localStorage
let getitem = JSON.parse(localStorage.getItem('getdata'));
console.log(getitem);

// Select the div element where products will be displayed
let div = document.querySelector('.products');

// Select the element where the total amount will be displayed
const totalAmount = document.querySelector('#total-amount');

// Function to render the cart items on the screen
function renderScreen() {
    let total = 0;
    div.innerHTML = ''; // Clear the previous content

    // Check if there are items in the cart
    if (getitem && getitem.length > 0) {
        // Loop through each item in the cart and create HTML content
        getitem.forEach((item, i) => {
            total += item.price * item.quantity; // Calculate the total amount
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

        // Display the total amount
        totalAmount.innerHTML = `Total Amount = ${total}`;
    } else {
        // Display a message if no items are found
        div.innerHTML = '<h1>No items found...</h1>';
        totalAmount.innerHTML = ''; // Clear total amount if no items
    }
}

// Initial call to render the screen when the page loads
renderScreen();

// Function to increase the quantity of an item in the cart
function addQuantity(i) {
    getitem[i].quantity += 1; // Increment quantity by 1
    updateLocalStorage(); // Update the localStorage with the new quantity
    renderScreen(); // Re-render the screen to reflect changes
}

// Function to decrease the quantity of an item in the cart
function lessQuantity(i) {
    if (getitem[i].quantity > 1) {
        getitem[i].quantity -= 1; // Decrement quantity by 1 if it's greater than 1
    } else {
        getitem.splice(i, 1); // Remove the item from the cart if quantity is 1
    }
    updateLocalStorage(); // Update the localStorage with the new quantity or removed item
    renderScreen(); // Re-render the screen to reflect changes
}

// Function to delete an item from the cart
function deleteItem(i) {
    getitem.splice(i, 1); // Remove the item from the cart
    updateLocalStorage(); // Update the localStorage with the removed item
    renderScreen(); // Re-render the screen to reflect changes
}

// Function to update localStorage with the current cart items
function updateLocalStorage() {
    localStorage.setItem('getdata', JSON.stringify(getitem)); // Save the updated cart to localStorage
}
