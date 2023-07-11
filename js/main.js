var quotes = [
    quote1 = {
        quote: '“Be yourself; everyone else is already taken.”',
        author: '― Oscar Wilde'
    },
    quote2 = {
        quote: '“I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.”',
        author: '― Marilyn Monroe'
    },
    quote3 = {
        quote: '“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”',
        author: '― Albert Einstein'
    },
    quote4 = {
        quote: '“So many books, so little time.”',
        author: '― Frank Zappa'
    },
    quote5 = {
        quote: '“A room without books is like a body without a soul.”',
        author: '― Marcus Tullius Cicero'
    },
    quote6 = {
        quote: '“Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.”',
        author: '― Bernard M. Baruch'
    },
    quote7 = {
        quote: `“You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
        Sing like there's nobody listening,
        And live like it's heaven on earth.”`,
        author: '― William W. Purkey'
    },
    quote8 = {
        quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
        author: '― Dr. Seuss'
    },
    quote9 = {
        quote: `“You only live once, but if you do it right, once is enough.”`,
        author: '― Mae West'
    },
    quote10 = {
        quote: `“Be the change that you wish to see in the world.”`,
        author: '― Mahatma Gandhi'
    },
    quote11 = {
        quote: `“In three words I can sum up everything I've learned about life: it goes on.”`,
        author: '― Robert Frost'
    },
]

var randomNum = ''
generateQuote = function () {
    var x = Math.floor(Math.random() * 11);

    if (randomNum !== x) {
        randomNum = x;
        console.log('yes');
    } else {
        randomNum = x + 1;
        console.log('no');
    }
    console.log(randomNum);
    document.getElementById('qouteOutput').innerHTML = quotes[randomNum].quote
    document.getElementById('authorOutput').innerHTML = quotes[randomNum].author
}

console.log(generateQuote());
