// || ========= Appending Speakers ========== ||

const arrCards = [
  {
    no: 1, name: 'Sundar', dsgn: 'Managing Director,Mansun Consultancy Pvt Ltd', details: 'He is wealth Management ,Financial Analysis and Financial Advisory', photo: 'images/pr-sundar.jpg',
  },
  {
    no: 2, name: 'Vikram ', dsgn: 'Founder, Pivot call', details: 'My path of a Salesman to successful Trader & online Entreprenuer', photo: 'images/vikram.jpg',
  },
  {
    no: 3, name: 'Rachana ', dsgn: 'Founder, Rachana Ranade and Associates', details: 'She is a Chartered Accountant as well as Financial Advisor', photo: 'images/rachana.jpg',
  },
  {
    no: 4, name: 'Asmita ', dsgn: 'Managing Director', details: 'Her Mission is to trade & spreadstock market education,breaking the myths & making a living out of', photo: 'images/Asmita.jpg',
  },
];

function compileCards(card) {
  const article = document.createElement('article');
  article.className = 'cards';
  if (card.no > 2) article.classList.add('dtp-card', 'col-f');
  article.id = `card-${card.no}`;
  article.innerHTML = `<div class="img-ph">
  <img src="${card.photo}" alt="feature-speaker-1" class="card-img" id="img-c1">
</div>
<div class="card-details" id="card${card.no}">
  <h4 class="card-titles" id="title-c${card.no}">
  ${card.name}
  </h4>
  <p class="designation" id="dsgn-fs${card.no}">${card.dsgn}
  </p>
  <p class="fs-intro" id="intro-fs${card.no}">${card.details}
  </p>
</div>`;
  return article;
}

const cardsContainer = document.createElement('div'); // 3rd child of 'feature-speaker' and parent to cards
cardsContainer.id = 'cards-container';
cardsContainer.className = 'container-main';

for (let i = 0; i < arrCards.length; i += 1) {
  cardsContainer.appendChild(compileCards(arrCards[i]));
}

const speakers = document.createElement('section');
speakers.id = 'feature-speaker'; // parent section

const fsHeading = document.createElement('h3'); // first child 'feature-speaker'
fsHeading.id = 'FS-head';
fsHeading.className = 'head3';
fsHeading.textContent = 'Featured Speaker';

const hr = document.createElement('hr'); // 2nd child of 'feature-speaker'

const more = document.createElement('button'); // 4th child
more.id = 'more';
more.classList.add('btn', 'mob', 'mob-toggle', 'container-main');
more.type = 'button';

speakers.append(fsHeading, hr, cardsContainer, more);

const secPrograms = document.getElementById('programs');

secPrograms.parentNode.appendChild(speakers);

document.getElementById('more').addEventListener('click', (event) => {
  const cards = Array.from(document.getElementsByClassName('dtp-card'));
  cards.forEach((card) => {
    card.classList.toggle('col-f');
  });
  document.getElementById('more').classList.toggle('btn-less');
  event.stopPropagation();
});

// =====================================end of appending speakers
// ============ Mob Menu ============

const mobMenu = document.createElement('div');
mobMenu.className = 'overlay-container';
mobMenu.id = 'mobMenu';

function addItem(item, itemId, iTarget, iText) {
  if (item === 'div') {
    item = document.createElement('div');
    item.textContent = '\u2715';
    item.id = 'close';
    item.className = 'dyn';
  } else {
    item = document.createElement('a');
    item.id = itemId;
    item.href = iTarget;
    item.textContent = iText;
    item.classList.add('overlay', 'dyn');
  }
  return item;
}

function hideMobMenu() {
  mobMenu.innerHTML = '';
  document.body.removeChild(mobMenu);
}

document.getElementById('mobile-menu').addEventListener('click', () => {
  mobMenu.appendChild(addItem('div'));
  mobMenu.appendChild(addItem('a', 'link1', 'about.html', 'About'));
  mobMenu.appendChild(addItem('a', 'link2', '#', 'Program'));
  mobMenu.appendChild(addItem('a', 'link3', '#', 'Join'));
  mobMenu.appendChild(addItem('a', 'link4', '#', 'Sponsor'));
  mobMenu.appendChild(addItem('a', 'link5', '#', 'News'));
  mobMenu.appendChild(addItem('a', 'link6', '#', 'DW Campaign'));
  document.body.appendChild(mobMenu);
  const linkss = Array.from(document.getElementsByClassName('dyn'));
  linkss.forEach((btn) => {
    btn.addEventListener('click', hideMobMenu);
  });
});

// || =========== Menu Ends ==============||