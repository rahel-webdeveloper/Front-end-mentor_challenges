let ratingCard = document.querySelector('.rating__card');
let thankYouCard = document.querySelector('.thankYou__card');
let submintRating = document.querySelector('.submit__rating');
let tryAgain = document.querySelector('.tryAgain__rating');

let ratingNumber = document.querySelectorAll('.btn');
let outSelect = document.querySelector('.selected');

submintRating.addEventListener('click', () => {
    ratingCard.classList.add('hidden');
    thankYouCard.style.display = 'flex';
})

tryAgain.addEventListener('click', () => {
    ratingCard.classList.remove('hidden');
    thankYouCard.style.display = 'none';
})

ratingNumber.forEach(rates => {
    rates.addEventListener('click', () => {
        outSelect.innerHTML = rates.innerHTML;
    })
})