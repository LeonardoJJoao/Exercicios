/* var sentenceArray = ["This is my fisrt sentence", "This is my second sentence", "This is my third sentence"];

function getSentence() {
    if (document.getElementById("insert-sentence").value === "Add a sentence") {
        var sentArraySize = sentenceArray.length;
    }
    else {
        console.log("test");
        sentenceArray.push(document.getElementById("insert-sentence").value);
        var sentArraySize = sentenceArray.length;
        document.getElementById("insert-sentence").value = "Add a sentence";
    }

    console.log(sentArraySize);
    return sentenceArray[Math.floor(Math.random() * sentArraySize)];
};

function onClick() {
    getSentence();

    document.getElementById("selected-sentence").innerHTML = getSentence();
}

document.getElementById("selected-sentence").innerHTML = getSentence(sentenceArray);
console.log(getSentence()); */

//API Stuff

var request = new XMLHttpRequest();
var filmTitleArray = [];

var favouriteMovie = document.getElementById("favouriteMovies");
var favouriteFilmsNumber = 0;
var favouriteFilms = [];
var index;

request.open('GET', 'https://ghibliapi.herokuapp.com/films', false); // adicionar ?limit=4 pra ter um limite de 4 -- Exercicio 1 da API

request.onload = function () 
{
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) 
    {
        data.forEach(movie => 
        {
            filmTitleArray.push(movie.title);
            console.log(movie.title);
            console.log(filmTitleArray);
        });
    } else {
        console.log('error');
    }
}

request.send();

document.getElementById("selected-sentence").innerHTML = filmTitleArray[Math.floor(Math.random() * filmTitleArray.length)];

function getIndex() 
{
    index = filmTitleArray.indexOf(document.getElementById("selected-sentence").innerHTML);
    return index;
}

function newSentence() 
{
    if (filmTitleArray.length <= 0) 
    {
        document.getElementById("selected-sentence").innerHTML = "End of list";
    }
    else if (favouriteFilms.includes(document.getElementById("selected-sentence").innerHTML)) 
    {
        getIndex()

        filmTitleArray.splice(index, 1);
        console.log(filmTitleArray);

        document.getElementById("selected-sentence").innerHTML = filmTitleArray[Math.floor(Math.random() * filmTitleArray.length)];
        console.log(filmTitleArray.length);
    }

    document.getElementById("selected-sentence").innerHTML = filmTitleArray[Math.floor(Math.random() * filmTitleArray.length)];
}

function addSentenceTable() 
{
    if (favouriteFilms.includes(document.getElementById("selected-sentence").innerHTML)) 
    {
        console.log("alredy in array");
    } else{
        favouriteFilms.push(document.getElementById("selected-sentence").innerHTML);
        console.log(favouriteFilms);

        favouriteFilmsNumber++;

        const tr = document.createElement('tr');

        td_number = document.createElement('td');
        td_number.setAttribute('id', 'listnumber' + favouriteFilmsNumber);

        const td_name = document.createElement('td');
        td_name.textContent = favouriteFilms[favouriteFilms.length - 1];

        favouriteMovie.appendChild(tr);
        tr.appendChild(td_number);
        tr.appendChild(td_name);

        document.getElementById("listnumber" + favouriteFilmsNumber).innerHTML = favouriteFilmsNumber;
    }
}
