const body = document.body;

const clickButton = document.querySelector('.button');
clickButton.addEventListener("click", function () {
    let random1 = parseInt(Math.random() * 256);
    let random2 = parseInt(Math.random() * 256);
    let random3 = parseInt(Math.random() * 256);
    const str = `rgb(${random1}, ${random2}, ${random3})`;
    body.style.backgroundColor = str;
});
