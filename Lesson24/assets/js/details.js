import { BASE_URL } from "./constant.js";

const id = new URLSearchParams(window.location.search).get('id');
const loadingOverlay = document.querySelector('.loading-overlay');

async function getData(endpoint, id) {
    try {
        loadingOverlay.classList.remove('d-none');
        const response = await fetch(BASE_URL + '/' + endpoint + '/' + id);
        const data = await response.json();
        drawElement(data);
    } catch {

    } finally {
        loadingOverlay.classList.add('d-none');
    }
}

function drawElement(data) {
    const element = document.querySelector('.element');
    element.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${data.companyName}</h5>
                <p class="card-text">${data.contactName}</p>
                <p class="card-text">${data.contactTitle}</p>
                <a href="index.html" class="btn btn-success">GO BACK</a>
            </div>
        </div>
        `
}

getData("suppliers", id).then((data) => {
    drawElement(data);
});