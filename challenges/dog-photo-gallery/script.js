const btn = document.getElementById('btn');
let li = document.createElement('li')
let img = document.createElement('img')


function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random').then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let ul = document.getElementById('list');
        img.classList = "img";
        img.src = data.message;
        li.appendChild(img);
        ul.appendChild(li);
        console.log(img);
    })
    .catch(function (error) {
        console.log(error);
    });
}