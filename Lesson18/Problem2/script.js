const body = document.body;

const header = document.createElement('header');

const container = document.createElement('div');
container.classList.add('container');

const nav = document.createElement('nav');

const leftDiv = document.createElement('div');
leftDiv.classList.add('left');
leftDiv.textContent = 'Start Bootstrap';

const rightDiv = document.createElement('div');
rightDiv.classList.add('right');

const ul = document.createElement('ul');

const li1 = document.createElement('li');

const a1 = document.createElement('a');
a1.setAttribute('href', '#');
a1.textContent = 'Features';

const li2 = document.createElement('li');

const a2 = document.createElement('a');
a2.setAttribute('href', '#');
a2.textContent = 'Download';

const li3 = document.createElement('li');
li3.classList.add('last-li');

const i = document.createElement('i');
i.classList.add('fa-solid', 'fa-message');

const a3 = document.createElement('a');
a3.setAttribute('href', '#');
a3.textContent = 'Send Feedback';

li1.append(a1);
li2.append(a2);
li3.append(i, a3);
ul.append(li1, li2, li3);
rightDiv.append(ul);
nav.append(leftDiv, rightDiv);
container.append(nav);
header.append(container);
body.append(header);