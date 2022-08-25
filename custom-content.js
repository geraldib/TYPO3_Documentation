document.addEventListener('DOMContentLoaded', function(){ 
    let prevBtns =  Array.from(document.getElementsByClassName('button-prev'));
    let timer = null;
    document.addEventListener('scroll', (event) => {
        prevBtns.forEach(prevBtn => {
            prevBtn.classList.add('button-fade');
        });
        if(timer !== null) {
            clearTimeout(timer);        
        }
        timer = setTimeout(function () {
            prevBtns.forEach(prevBtn => {
                prevBtn.classList.remove('button-fade');
            });
        }, 250);
    });
});