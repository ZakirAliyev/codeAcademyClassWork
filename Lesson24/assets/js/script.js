import { BASE_URL } from "./constant.js"

async function getData(endpoint) {
    const response = await fetch(BASE_URL + '/' + endpoint);
    const data = await response.json();
    return data;
}

function drawSuppliers(arr) {
    const suppliers = document.querySelector('tbody');
    arr.forEach((element) => {
        suppliers.innerHTML += `
            <tr>
                <td>${element.id}</td>
                <td>${element.companyName}</td>
                <td>${element.contactName}</td>
                <td>${element.contactTitle}</td>
                <td>
                    <a class="btn btn-primary editBtn"
                    href="details.html?id=${element.id}">DETAILS</a>
                </td>
                <td>
                    <a class="btn btn-success editBtn">EDIT</a>
                </td>
                <td>
                    <a class="btn btn-danger deleteBtn">DELETE</a>
                </td>
            </tr>
        `
    });
}

getData("suppliers").then((data) => {
    drawSuppliers(data);
});

const searchInp = document.querySelector('.searchInp');
searchInp.addEventListener('keyup', function () {
    const searchTerm = searchInp.value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach((row) => {
        const companyName = row.querySelector('td:nth-child(2)').textContent.toLowerCase();

        if (companyName.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});