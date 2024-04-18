const inc = document.querySelector('.inc');
const result = document.querySelector('.result');
const dec = document.querySelector('.dec');
const reset = document.querySelector('.reset');

result.textContent = localStorage.getItem('result') || 0;

inc.addEventListener('click', function () {
    result.textContent = +result.textContent + 1;
    localStorage.setItem('result', result.textContent);
});

dec.addEventListener('click', function () {
    result.textContent = +result.textContent - 1;
    localStorage.setItem('result', result.textContent);
});

reset.addEventListener('click', function () {
    result.textContent = 0;
    localStorage.setItem('result', result.textContent);
});