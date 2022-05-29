console.log('University assignment');

const icon = document.querySelector('#icon');
const dropDown = document.querySelector('.dropdown');
dropDown.style.display='none';
icon.addEventListener('click',function(){
    if(dropDown.style.display=='none'){
        dropDown.style.display='block';
    }
    else{
        dropDown.style.display='none';
    }
});
