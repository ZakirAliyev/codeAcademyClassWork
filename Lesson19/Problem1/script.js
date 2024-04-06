class User {

    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    generateId() {
        return this.userId = Date.now();
    }
}

const userArr = [];

const form1 = document.querySelector('.form1');
form1.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.querySelector('.textInput').value;
    const email = document.querySelector('.textEmail').value;
    const password = document.querySelector('.textPassword').value;

    userArr.push(new User(username, email, password));

    createRow(userArr);
});

const form2 = document.querySelector('.form2');
form2.addEventListener('submit', function (event) {
    event.preventDefault();
    const filterInput = document.querySelector('.filter');
    filterUsername = filterInput.value;
    if (filterUsername !== "") {
        let arr = userArr.filter((element) => element.username === filterUsername);
        createRow(arr);
    } else {
        createRow(userArr);
    }

});

function createRow(array) {
    const tbody = document.querySelector('.tbody');

    tbody.innerHTML = '';

    array.forEach(user => {
        const tableRow = document.createElement('tr');

        const tableDataUsername = document.createElement('td');
        const tableDataEmail = document.createElement('td');
        const tableDataPassword = document.createElement('td');
        const tableDataDelete = document.createElement('button');
        const tableDataUpdate = document.createElement('button');
        tableDataDelete.textContent = 'DELETE';
        tableDataUpdate.textContent = 'UPDATE';

        tableDataUsername.textContent = user.username;
        tableDataEmail.textContent = user.email;
        tableDataPassword.textContent = user.password;

        tableRow.append(tableDataUsername, tableDataEmail, tableDataPassword,
            tableDataDelete, tableDataUpdate);
        tbody.appendChild(tableRow);
    });
}