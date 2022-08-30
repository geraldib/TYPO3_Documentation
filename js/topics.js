document.addEventListener('DOMContentLoaded', function(){ 
    let prevBtns =  Array.from(document.getElementsByClassName('button-prev'));
    let footers =  Array.from(document.getElementsByClassName('footer'));
    let timer = null;
    let clbImgs =  Array.from(document.getElementsByClassName('clipboard-img'));
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
    clbImgs.forEach(clbImg => {
        clbImg.addEventListener('click', (event) => {
            let clickedClb = event.target;
            clickedClb.classList.add('clicked-clip');
            let copiedText = clickedClb.parentElement.nextElementSibling.firstElementChild.textContent;
            navigator.clipboard.writeText(copiedText);
            setTimeout(function () {
                clickedClb.classList.remove('clicked-clip');
            }, 150);
        });
    });

});
