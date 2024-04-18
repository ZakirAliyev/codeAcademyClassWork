import products from "./data.js";

const cardWrapper = document.querySelector('.card-wrapper .row');

products.forEach(element => {
    cardWrapper.innerHTML += `
    <div class="col-3 col-md-4 col-sm-6 col-xs-12">
        <div class="card">
            <img src="${element.imgSrc}">
            <div class="title">
                <h2>${element.name}</h2>
                <h3>${element.salePrice} $</h3>
            </div>
            <div class="actions">
                <i class="fa-solid fa-basket-shopping"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
    </div>
    `   
});