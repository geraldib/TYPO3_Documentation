document.addEventListener('DOMContentLoaded', function(){ 
    let topicCards =  Array.from(document.getElementsByClassName('container-card'));
    topicCards.forEach(topicCard => {
        topicCard.addEventListener('mouseover', (event) => {
            topicCard.classList.add('active-card');
        });
    
        topicCard.addEventListener('mouseout', (event) => {
            topicCard.classList.remove('active-card');
        });
    });

});
