const tags = document.getElementsByTagName('span');
console.log(tags[0].innerHTML)

tags[0].innerHTML = 'demoman is dead ?'

const li = document.querySelectorAll('li');

li.forEach(item => {
    console.log(item.innerHTML);
    item.innerHTML = "changed";
});

const spe = document.getElementById('spe');
spe.innerHTML = `<h1> ⛏ ⛏ ROCK AND STONE ⛏ ⛏ </h1>`;

const fill_me = document.getElementById('fill_me');
const lyrics = [
    '⛏ ⛏ ROCK AND STONE ⛏ ⛏',
    '⛏ ⛏ TO THE BONE ⛏ ⛏',
    '⛏ ⛏ FOR KARL ⛏ ⛏'
];
lyrics.forEach(string => {
    fill_me.innerHTML += `<li>${string}</li>`
});