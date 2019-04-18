var quotes = ["I'm with you 'till the end of the line. - Captain America", "the price of freedom is high; it always has been. And it's a price I'm willing to pay. And if I'm the only one, then so be it. But I'm willing to bet I'm not. - Captain America", "I am Ironman - Tony Stark", "Puny god - Hulk"]

var myVar = setInterval(newQuote, 20000);

var randomNumber;


function displayCurrentQoutes(qoute) {
    document.getElementById('quoteDisplay').innerHTML = qoute;
}

function newQuote() {
    randomNumber = Math.floor(Math.random() * (quotes.length));
    displayCurrentQoutes(quotes[randomNumber])
}

function prev() {
    randomNumber = randomNumber + 1;
    randomNumber = randomNumber % quotes.length;
    displayCurrentQoutes(quotes[randomNumber])
}
function next() {
    if (randomNumber === 0) {
        randomNumber = quotes.length;
    }
    randomNumber = randomNumber - 1;
    displayCurrentQoutes(quotes[randomNumber])
}


