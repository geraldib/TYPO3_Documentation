document.addEventListener('DOMContentLoaded', function(){ 
    let prevBtns =  Array.from(document.getElementsByClassName('button-prev'));
    let footers =  Array.from(document.getElementsByClassName('footer'));
    let timer = null;
    document.addEventListener('scroll', (event) => {
        prevBtns.forEach(prevBtn => {
            prevBtn.classList.add('button-fade');
        });
        footers.forEach(footer => {
            footer.classList.add('footer-fade');
        });
        if(timer !== null) {
            clearTimeout(timer);        
        }
        timer = setTimeout(function () {
            prevBtns.forEach(prevBtn => {
                prevBtn.classList.remove('button-fade');
            });
            footers.forEach(footer => {
                footer.classList.remove('footer-fade');
            });
        }, 250);
    });
});