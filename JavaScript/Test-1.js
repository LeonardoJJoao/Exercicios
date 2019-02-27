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
var filmtitlearray = [];

request.open('GET', 'https://ghibliapi.herokuapp.com/films?limit=4', false);

request.onload = function () {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            filmtitlearray.push(movie.title);
            console.log(movie.title);
            console.log(filmtitlearray);
        });
    } else {
        console.log('error');
    }
}

request.send();

function getTitle(){
   return filmtitlearray[Math.floor(Math.random() * filmtitlearray.length)];
}

function onClick(){
    getTitle();

    document.getElementById("selected-sentence").innerHTML = getTitle();
}

document.getElementById("selected-sentence").innerHTML = getTitle();