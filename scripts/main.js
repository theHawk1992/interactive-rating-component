

const submitButtonElement = document.getElementById('submit-btn');
const oneStarButtonElement = document.getElementById('one-star');
const twoStarButtonElement = document.getElementById('two-star');
const threeStarButtonElement = document.getElementById('three-star');
const fourStarButtonElement = document.getElementById('four-star');
const fiveStarButtonElement = document.getElementById('five-star');

const ratingSentenceElement = document.getElementById('stars-rating');


function fiveRatingStar(){
    fiveStarButtonElement.style.color = 'white';
    fiveStarButtonElement.style.backgroundColor = 'darkgrey';
}

fiveStarButtonElement.addEventListener('click', fiveRatingStar);


function oneRatingStar(){
    oneStarButtonElement.style.color = 'white';
    oneStarButtonElement.style.backgroundColor = 'darkgrey';

}

oneStarButtonElement.addEventListener('click', oneRatingStar);

function twoRatingStar(){
    twoStarButtonElement.style.color = 'white';
    twoStarButtonElement.style.backgroundColor = 'darkgrey';
}

twoStarButtonElement.addEventListener('click', twoRatingStar);

function threeRatingStar(){
    threeStarButtonElement.style.color = 'white';
    threeStarButtonElement.style.backgroundColor = 'darkgrey';
}

threeStarButtonElement.addEventListener('click', threeRatingStar);

function fourRatingStar(){
    fourStarButtonElement.style.color = 'white';
    fourStarButtonElement.style.backgroundColor = 'darkgrey';
}

fourStarButtonElement.addEventListener('click', fourRatingStar);





