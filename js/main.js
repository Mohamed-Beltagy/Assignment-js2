var qouteArrayAuthor = ['Jim Rohn', 'Epictetus', 'Frank Sinatra', 'Wayne Gretzy', 'Nelson Mandela', 'Elbert Hubbard'];
var qouteArrayText = ['Beware of what you become in pursuit of what you want.',
    'It\'s not what happens to you, but how you react to it that matters.',
    'The best revenge is massive success.',
    'You miss 100% of the shots you don\'t take.',
    'Resentment is like drinking poison and waiting for your enemies to die.',
    'Do not take life too seriously. You will not get out alive.'
];

function qouteAdd() {
    var num = Math.floor(Math.random() * qouteArrayAuthor.length);
    document.getElementById('text').textContent=`${qouteArrayText[num]}`;
    document.getElementById('author').textContent=`${qouteArrayAuthor[num]}`;
}