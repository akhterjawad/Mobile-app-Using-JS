let getdata = JSON.parse(localStorage.getItem('carditems'));
console.log(getdata);
let div = document.querySelector('.products');
let h1 = document.querySelector('h1');
function randerscreen() {
    if (getdata != null && getdata.length > 0) {
        for (let i = 0; i < getdata.length; i++) {
            div.innerHTML += `
    <div class="card" style="width: 18rem;">
          <div class="card-body">
          <h5 class="card-title">${getdata[i].name}</h5>
          <h6 class="card-title">${getdata[i].price}</h6>
          <p class="card-text">${getdata[i].description}</p>
          <button class="card-link bg-primary rounded" onclick="addtocard(${i})">Add To Card</button>
        </div>
    </div>`
        }
    } else {
        h1.innerHTML = 'No any items found';
    }
}
randerscreen()