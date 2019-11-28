let backdrop = document.querySelector('.backdrop');
let selectPlanButtons = document.querySelectorAll('.btn');
let  modal = document.querySelector('.modal');
let modalNoButton = document.querySelector('.modal__action--negative');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click',function(){
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

function closeModal() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none'; 

    if (modal) {
        modal.classList.remove('open');
    }
    
    backdrop.classList.remove('open');
}

backdrop.addEventListener('click', function () {
    mobileNav.style.display = 'none';
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click',closeModal);
}


toggleButton.addEventListener('click', function () {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})
