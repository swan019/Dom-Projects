const btn = document.querySelector('button');
const iStatus = document.querySelector('h2');

var flag = 0;

btn.addEventListener('click', function(){
    if(flag === 0){
        iStatus.innerText = 'Freinds';
        btn.innerText = 'Remove Freind';
        iStatus.style.color = 'green';
        flag = 1;
    }else{
        iStatus.innerText = 'Stranger';
        btn.innerText = 'Add Freind';
        iStatus.style.color = 'Red';
        flag = 0;
    }
});