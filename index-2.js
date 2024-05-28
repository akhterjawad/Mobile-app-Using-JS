let getitem = JSON.parse(localStorage.getItem('getdata'));
console.log(getitem);
let div = document.querySelector('.products');
let h1 = document.querySelector('h1');
function randerscreen() {
    if (getitem != null && getitem.length > 0) {
        for (let i = 0; i < getitem.length; i++) {
            div.innerHTML += `
            <div class="card" style="width: 18rem;">
    <img class="card-img-top" src=${getitem[i].img} alt="">
  <div class="card-body">
    <h5 class="card-title">${getitem[i].model}</h5>
    <h6 class="card-title">${getitem[i].price}</h6>
    <button class="card-link bg-primary rounded" onclick="addtocard(${i})">Add To Card</button>
  </div>
</div>
    `
        }
    } else {
        h1.innerHTML = 'No any items found';
    }
}
randerscreen()