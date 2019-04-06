var prefix = 'https://cors-anywhere.herokuapp.com/';
var url = 'https://swapi.co/api/people';
var starWarsCharacters = document.getElementById('sWC');


document.addEventListener('DOMContentLoaded', (e) => {
    showSWCharacters();

});



function showSWCharacters() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', prefix + 'https://swapi.co/api/people');
    xhr.addEventListener('load', function () {
        document.getElementById("spinner").remove();

        var response = JSON.parse(xhr.response);
        console.log(response.results)
        starWarsCharacters.innerHtml = '';

        for (var i = 0; i < response.results.length; i++) {
            var liEl = document.createElement('li');
            liEl.innerText = response.results[i].name;
            starWarsCharacters.append(liEl);
            id = i;
            liEl.addEventListener('click', function () {
                var div = document.createElement('div');
                div.innerText = response.results[id].height;
                liEl.append(div);
            })
        }


    });
    xhr.send();
};