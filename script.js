var prefix = 'https://cors-anywhere.herokuapp.com/';
var url = 'https://swapi.co/api/people';
var starWarsCharacters = document.getElementById('sWC');

var section = document.getElementById('section');
var div = document.createElement('div');
section.insertAdjacentElement('beforeend', div);


document.addEventListener('DOMContentLoaded', (e) => {
    showSWCharacters();

});

function showSWCharacters() {
    get(prefix + url, renderCharacters);

};

function get(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', callback);
    xhr.send();
}

function renderCharacters(e) {
    var response = JSON.parse(event.target.response);

    var html = response.results.map((person) => {
        return '<li data-url="' + person.url + '">' + person.name + '</li>';
    }).join('');

    document.getElementById("spinner").remove();

    starWarsCharacters.innerHTML = html;

    starWarsCharacters.addEventListener('click', function (e) {
        if (!event.target.matches('li'));
        get(event.target.dataset.url, showDetails)
    });

}

function showDetails() {
    var response = JSON.parse(event.target.response);
    div.innerHTML = "";
    div.insertAdjacentHTML('afterbegin', `Gender: ${response.gender} <br>`);
    div.insertAdjacentHTML('afterbegin', `Eye color: ${response.eye_color} <br>`);
    div.insertAdjacentHTML('afterbegin', `Hair color: ${response.hair_color} <br>`);
    div.insertAdjacentHTML('afterbegin', `Height: ${response.height} <br>`);
    div.insertAdjacentHTML('afterbegin', `Name: ${response.name} <br>`);
}