const ramenMenu = document.getElementById('ramen-menu');
const ramenDetailDiv = document.querySelector('#ramen-detail');
const ramenDetailImage = document.querySelector('.detail-image');
const ramenDetailH2 = document.querySelector('.name');
const ramenDetailRestaurant = document.querySelector('.restaurant');
const ramenRating = document.querySelector('#rating-display');
const ramenComment = document.querySelector('#comment-display');

fetch('http://localhost:3000/ramens')
.then(response => response.json())
.then(data => {

    data.forEach(ramen => {
        const image = document.createElement('img');
        image.setAttribute('class', 'ramen-image');
        image.src = ramen.image;
        
        ramenMenu.appendChild(image);
        
        image.addEventListener('click', e => {
            const addImage = e.target.src;

            ramenDetailH2.textContent = ramen.name;
            ramenDetailRestaurant.textContent = ramen.restaurant;
            ramenRating.textContent = ramen.rating;
            ramenComment.textContent = ramen.comment;

            ramenDetailImage.src = addImage;
        })
    });
})
.catch(error => {
    console.log(error);
})
