const priceAnnually = [199.99, 249.99, 399.99];
const priceMonthly = [19.99, 24.99, 39.99];

let priceEl = document.querySelectorAll('.price b');
let checkBox = document.getElementById('checkBox');

let checkVisibility = checkBox.checkVisibility();

checkBox.addEventListener('click', () => {
    if (checkVisibility) {
        priceAnnually.forEach( function(value, index) {
            priceEl[index].textContent = value;
            console.log(checkVisibility);
            checkVisibility = false;
        });
    } 
    else {
        priceMonthly.forEach( function(value, index) {
            priceEl[index].textContent = value;
            console.log(checkVisibility);
            checkVisibility = true;
        });
    } 
});