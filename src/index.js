const ramenMenu = document.getElementById('ramen-menu');
const ramenDetailDiv = document.querySelector('#ramen-detail');
const ramenDetailImage = document.querySelector('.detail-image');
const ramenDetailHeader = document.querySelector('.name');
const ramenDetailRestaurant = document.querySelector('.restaurant');
const ramenRating = document.querySelector('#rating-display');
const ramenComment = document.querySelector('#comment-display');
const newRamen = document.querySelector('#new-ramen');

fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(data => {
    ramenDetailImage.src = data[0].image;
    ramenDetailHeader.textContent = data[0].name;
    ramenDetailRestaurant.textContent = data[0].restaurant;
    ramenRating.textContent = data[0].rating;
    ramenComment.textContent = data[0].comment;

    data.forEach(ramen => {
        const image = document.createElement('img');
        image.setAttribute('class', 'ramen-image');
        image.src = ramen.image;
        
        image.addEventListener('click', () => {
            ramenDetailImage.src = ramen.image;
            ramenDetailHeader.textContent = ramen.name;
            ramenDetailRestaurant.textContent = ramen.restaurant;
            ramenRating.textContent = ramen.rating;
            ramenComment.textContent = ramen.comment;
        })
        ramenMenu.appendChild(image);
    });
})

newRamen.addEventListener('submit', e => {
    e.preventDefault();

    const newName = document.querySelector('#new-name').value;
    const newRestaurant = document.querySelector('#new-restaurant').value;
    const newImage = document.querySelector('#new-image').value;
    const newRating = document.querySelector('#new-rating').value;
    const newComment= document.querySelector('#new-comment').value;
    const image = document.createElement('img');
    const newRamen = {newName, newRestaurant, newImage, newRating, newComment};

    image.src = newImage;
    image.alt = newName;

    image.addEventListener('click', () => {
        ramenDetailImage.src = newRamen.newImage;
        ramenDetailHeader.textContent = newRamen.newName;
        ramenDetailRestaurant.textContent = newRamen.newRestaurant;
        ramenRating.textContent = newRamen.newRating;
        ramenComment.textContent = newRamen.newComment;

    })
    ramenMenu.appendChild(image);
})
