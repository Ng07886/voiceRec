const btn = document.querySelector('.talk');
const content= document.querySelector('.content');


const greeting = ['I am doing good', 'Doing good homie','leave me alone']
const bye = ['See you soon', 'Finally, I am tired of talking to you', 'Adios']

const fact = [
    'North Korea and Cuba are the only places you can not buy Coca-Cola.',
    'The entire world population could fit inside Los Angeles',
    'More people visit France than any other country.',
    'Indonesia is home to some of the shortest people in the world.',
    'Four babies are born every second.'
];
const riddle = [
    'The more you take, the more you leave behind. What am I?',
    'I can fly but have no wings. I can cry but I have no eyes. Wherever I go, darkness follows me. What am I?',
    'I am tall when I am young, I am short when I am old. What am I?',
    'What kind of tree can you carry in your hand?',
    'People buy me to eat, but never eat me. What am I?'
];
const joke = [
    'What do you call a boomerang that doesn’t work? You call it a stick L O L',
    'What do you call four bullfighters in quicksand? You call them Quattro sinko. L O L',
    'What happened to the guy who sued over his missing luggage? well he lost his case    L M A O',
    'What do you call a guy who’s had too much to drink? You call him a cab  L O L',
    'What do you call a penguin in the desert?    LOST   L M F A O',
    'Hear about the two guys who stole a calendar?  yeah they both got six mothns '
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition= new SpeechRecognition();

recognition.onstart = function (){
    console.log('voice is activated');
};

recognition.onresult = function(event){
 const current = event.resultIndex;

 const transcript = event.results[current][0].transcript;
 content.textContent = transcript;
 readOutLoud(transcript);
};

//add the listener to the btn 

btn.addEventListener('click',() => {
recognition.start();
});


function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'What did you say';

    if(message.includes('how are you')){
       const final = greeting[Math.floor(Math.random() * greeting.length)];
       speech.text = final;
    }

    else if (message.includes('bye')){
        const final = bye[Math.floor(Math.random() * bye.length)];
        speech.text = final;
     }

     else if (message.includes('fact')){
        const final = fact[Math.floor(Math.random() * fact.length)];
        speech.text = final;
     }

     else if (message.includes('joke')){
        const final = joke[Math.floor(Math.random() * joke.length)];
        speech.text = final;
     }

     else if (message.includes('riddle')){
        const final = riddle[Math.floor(Math.random() * riddle.length)];
        speech.text = final;
     }

    
    speech.volume = 1;
    speech.rate = .8;
    speech.pitch = 1.3;
    window.speechSynthesis.speak(speech);
}

