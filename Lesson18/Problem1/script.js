const body = document.body;

const card = document.createElement('div');
card.classList.add('card');
card.style.width = '15%';
card.style.border = '1px solid black';

const cardImgTop = document.createElement('img');
cardImgTop.classList.add('card-img-top');
const imgPath = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP5b6hkCnHQ7w1sMm-W_NmkgVRUBsUMaUtag0UJJ7BDnPOA6hUMsLh_JQuel5LKy5YQq0&usqp=CAU'
cardImgTop.setAttribute('src', imgPath);
cardImgTop.setAttribute('alt', 'Koala');
cardImgTop.style.width = '100%';

const cardBody = document.createElement('div');
cardBody.classList.add('card-body');
cardBody.style.padding = '20px';

const cardTitle = document.createElement('h5');
cardTitle.classList.add('card-title');
cardTitle.textContent = 'Card title';

const cardText = document.createElement('p');
cardText.classList.add('card-text');
cardText.textContent = 'Some quick example text to build on the card title and make up the bulk of the card content.';

const goLink = document.createElement('a');
goLink.classList.add('btn', 'btn-primary');
goLink.setAttribute('href', '#')
goLink.textContent = 'Go somewhere';

cardBody.append(cardTitle, cardText, goLink);
card.append(cardImgTop, cardBody);
body.append(card);