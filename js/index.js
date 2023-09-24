const input = document.querySelector('.form__search');
const searchBtn = document.querySelector('.form__btn');
const imageBlock = document.querySelector('.image-wrapper');

input.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        loadImg();
    }
})

function loadImg() {
    removeImg();

    const url = `https://api.unsplash.com/search/photos/?query=${input.value}&per_page=9&client_id=FfaI2EBGXhKz9mkCeSpDpWNf9i0MDyy8PUEUBlhGtA8`;
    fetch(url)

    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            alert(response.status);
        }
    })
    .then(data => {
        console.log(data);
        const imagesNodes = [];
        for (let i = 0; i < data.results.length; i++) {
            imagesNodes[i] = document.createElement('div');
            imagesNodes[i].className = 'img';
            imagesNodes[i].style.backgroundImage = `url(${data.results[i].urls.raw})`;
            console.log(imagesNodes[i].style.backgroundImage = `url(${data.results[i].urls.raw})`);
            imageBlock.appendChild(imagesNodes[i]);
        }
    })
}


function removeImg() {
    imageBlock.innerHTML = '';
}
