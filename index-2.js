let getitem = JSON.parse(localStorage.getItem('getdata'));
console.log(getitem);
let div = document.querySelector('.products');
let h1 = document.querySelector('h1');
function randerscreen() {
    if (getitem != null && getitem.length > 0) {
        for (let i = 0; i < getitem.length; i++) {
            div.innerHTML += `
            
    <div class="rounded  card-width  p-2 ">
    <div class=" text-center  p-2"><img src="${getitem[i].img}" class="card-img-width "
            alt="no image">
    </div>
    <p class="mt-1 mb-2"> ${getitem[i].brand} ${getitem[i].model}</p>
    <h4 class="mt-5"><sup>RS</sup> ${getitem[i].price}</h4>
    <div class=" fw-lighter wrap1 d-flex align-items-center justify-content-between">
        <div class="">
            <p><strike class="strike1 mt-3">
                    <sup class="strike2">RS</sup>
                    <span class="strike2">8,000</span>
                </strike>
            </p>
        </div>
        <div><button type="button" onclick="delete()" class="btn card-button-font-size btn-outline-success mb-2">Delete</button></div>
    </div>
</div>
    `
        }
    } else {
        h1.innerHTML = 'No any items found';
    }
}
randerscreen()