const mode = document.querySelector('.mode-button');
const modeContainer = document.querySelector('.mode-container');
const icon = document.querySelector('.fa-solid');
const body = document.querySelector('body');
const rightCol = document.querySelector('.right-col');
const title = document.querySelector('.name');
const link = document.querySelector('.link');
const repo = document.querySelector('.repo');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const details = [{
        name: 'Eshop Website',
        link: 'https://iyanuxn.github.io/Landing-page/',
        repo: 'https://github.com/iyanuxn/Landing-page',
    },
    {
        name: 'Base Apparel',
        link: 'https://iyanuxn.github.io/base-apparel-coming-soon-form/',
        repo: 'https://github.com/iyanuxn/base-apparel-coming-soon-form',
    },
    {
        name: 'Expense Chart',
        link: 'https://iyanuxn.github.io/charts/',
        repo: 'https://github.com/iyanuxn/charts',
    },
    {
        name: 'Article Card',
        link: 'https://iyanuxn.github.io/article/',
        repo: 'https://github.com/iyanuxn/article',
    },
    {
        name: 'Calculator App',
        link: 'https://iyanuxn.github.io/calculator/',
        repo: 'https://github.com/iyanuxn/calculator',
    },
    {
        name: 'Ratings Card',
        link: 'https://iyanuxn.github.io/Rating/',
        repo: 'https://github.com/iyanuxn/Rating',
    },
    {
        name: 'NFT Preview Card',
        link: 'https://iyanuxn.github.io/NFT-preview-card/',
        repo: 'https://github.com/iyanuxn/NFT-preview-card',
    },
]

modeContainer.addEventListener('click', function () {
    mode.classList.toggle('light');
    modeContainer.classList.toggle('back');
    icon.classList.toggle('fa-sun');
    body.classList.toggle('bdlight');
    rightCol.classList.toggle('right-col-light');
})
let i = 0
title.textContent = details[i].name;
link.textContent = details[i].link;
repo.textContent = details[i].repo;
document.getElementById("link").href = details[i].link;
document.getElementById("repo").href = details[i].repo;

next.addEventListener('click', function (){
    i++;
    if(i >= details.length){
        i = 0;
    }
    title.textContent = details[i].name;
    link.textContent = details[i].link;
    repo.textContent = details[i].repo;
    document.getElementById("link").href = details[i].link;
    document.getElementById("repo").href = details[i].repo;
})

prev.addEventListener('click', function (){
    i--;
    if(i < 0){
        i = details.length - 1;
    }
    title.textContent = details[i].name;
    link.textContent = details[i].link;
    repo.textContent = details[i].repo;
    document.getElementById("link").href = details[i].link;
    document.getElementById("repo").href = details[i].repo;
})
