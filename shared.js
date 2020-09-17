var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (var i=0; i<selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click', function(){
        //modal.style.display = 'block';
        //backdrop.style.display = 'block';
        //modal.className='open';  //this will actually overwrite the complete class
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
} //loop to make an action whenever one of the buttons is clicked on

/* DUDA
   Por que es necesario realizar el eventListener para selectPlanButtons si en realidad
   la acción únicamente se va a ejecutar una vez?
   
   en el ciclo cómo se define cual es la iteración del botón que estoy clickeando?

   cuándo para en realidad el ciclo? es correcto un for o más bien
*/

backdrop.addEventListener('click', function(){
    mobileNav.classList.remove('open');
    closeModal();
});

if(modalNoButton){
    modalNoButton.addEventListener('click', closeModal);
}

/*
selectPlanButtons.addEventListener('click', openModal);

function openModal(){
    modal.style.display = 'block';
    backdrop.style.display = 'block';
};
*/

toggleButton.addEventListener('click', function(){
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})

function closeModal() {
    if(modal){
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
};