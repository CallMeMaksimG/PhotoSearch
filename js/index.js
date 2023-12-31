const input = document.querySelector('.form__search');
const searchBtn = document.querySelector('.form__btn');
const imageBlock = document.querySelector('.image-wrapper');
const errorBlock = document.querySelector('error');

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
            console.log(response.status);
        }
    })
    .then(data => {
        const imagesNodes = [];
        for (let i = 0; i < data.results.length; i++) {
            imagesNodes[i] = document.createElement('div');
            imagesNodes[i].className = 'img';
            imagesNodes[i].style.backgroundImage = `url(${data.results[i].urls.raw})`;
            imageBlock.appendChild(imagesNodes[i]);
        }
    })
    .catch(error => {
        showError();
    })
}


function removeImg() {
    imageBlock.innerHTML = '';
}

function showError() {
    const div = document.createElement('div');
    div.className = 'error';
    div.innerHTML = `<p class="error__text">Возникла ошибка.<br>Повторите запрос</p>`;
    document.body.append(div);
    setTimeout(() => div.remove(), 3000);
}