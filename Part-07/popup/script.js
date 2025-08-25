const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpenModal);
const openModal = function(){
        console.log('btn click');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');

    }
    const closeModal = function(){
         modal.classList.add('hidden');
        overlay.classList.add('hidden');
    };

for(let i = 0; i< btnsOpenModal.length; i++){
    // console.log(btnsOpenModal[i].textContent);
   btnsOpenModal[i].addEventListener('click' ,openModal) ;


    // btnCloseModal.addEventListener('click',function(){
    //     console.log('close btn click');
    //     modal.classList.add('hidden');
    //     overlay.classList.add('hidden');
    // });
    // overlay.addEventListener('click',function(){
    //      modal.classList.add('hidden');
    //     overlay.classList.add('hidden');
    // });

    btnCloseModal.addEventListener('click',closeModal);
    overlay.addEventListener('click',closeModal);

    document.addEventListener('keydown',function(e){
        console.log(e.key);
        if(e.key === 'Escape' && !modal.classList.contains('hidden')){
            closeModal();   
            }   
    });
}