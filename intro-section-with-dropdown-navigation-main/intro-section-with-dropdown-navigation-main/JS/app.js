//Navbar Elements
const closeBtn = document.querySelector('.close-btn'),
      menuBtn = document.querySelector('.menu-btn'),
      navbar = document.querySelector('.navbar');

//Drop-Down elements
const dropdownBtn = document.querySelectorAll('.dropwon'),
      dropdownList = document.querySelectorAll('.dropdown-list'),
      angleIcon = document.querySelectorAll('.dropdown-btn i');

//Close and Menu Btn
closeBtn.addEventListener('click', function() {
    this.classList.toggle('hidden');
    navbar.classList.toggle('hidden');
    menuBtn.classList.toggle('hidden');
});

menuBtn.addEventListener('click', function() {
    this.classList.toggle('hidden');
    navbar.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
});


//Drop Down list toggle
dropdownBtn.forEach(function(btn, index) {
    btn.addEventListener('click', function() {
        dropdownList[index].classList.toggle('hidden');
        angleIcon[index].classList.toggle('fa-angle-up');
    });


    //Icon toggle
    angleIcon[index].addEventListener('click', function() {
        dropdownList[index].classList.toggle('hidden');
        angleIcon[index].classList.toggle('fa-angle-up');
    });
    

    //Toggle with document
    document.addEventListener('click', function(event) {
        if (!dropdownList[index].contains(event.target)
            && !dropdownBtn[index].contains(event.target)) {
                dropdownList[index].classList.add('hidden');
                angleIcon[index].classList.remove('fa-angle-up');
        }
    })
});
