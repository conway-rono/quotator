const quoteCard=document.querySelector('#quote');
const quoteBy=document.querySelector('#sayer');
const nxtBtn=document.querySelector('button');

let allQuotes=[
    {   
        quote:"The only way to do great work is to love what you do.",
        sayer:" Steve Jobs"
    },
    {   
        quote:"In the middle of difficulty lies opportunity.",
        sayer:" Albert Einstein"
    },
    {   
        quote:"Success is not final, failure is not fatal: It is the courage to continue that counts.",
        sayer:" Winston Churchill"
    },
    {   
        quote:"Believe you can and you're halfway there.",
        sayer:" Theodore Roosevelt"
    },
    {   
        quote:"The best revenge is massive success.",
        sayer:" Frank Sinatra"
    },
    {   
        quote:"Don't watch the clock; do what it does. Keep going.",
        sayer:" Sam Levenson"
    },
    {   
        quote:"You miss 100% of the shots you don't take.",
        sayer:" Wayne Gretzky"
    },
    {   
        quote:"The future belongs to those who believe in the beauty of their dreams.",
        sayer:" Eleanor Roosevelt"
    },
    {   
        quote:"Every strike brings me closer to the next home run.",
        sayer:" Babe Ruth"
    },
    {   
        quote: "Don't wait. The time will never be just right.",
        sayer:" Napoleon Hill"
    },
    {
        quote: "Don't count the days, make the days count.",
        sayer: "Muhammad Ali"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        sayer: "Franklin D. Roosevelt"
    },
    {
        quote: "The best way to predict the future is to create it.",
        sayer: "Peter Drucker"
    },
    {
        quote: "Success is not in what you have, but who you are.",
        sayer: "Bo Bennett"
    },
    {
        quote: "Happiness is not something ready-made. It comes from your own actions.",
        sayer: "Dalai Lama"
    },
    {
        quote: "The only person you should try to be better than is the person you were yesterday.",
        sayer: "Unknown"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        sayer: "Confucius"
    },
    {
        quote: "The future depends on what you do today.",
        sayer: "Mahatma Gandhi"
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        sayer: "Winston Churchill"
    },
    {
        quote: "The harder I work, the luckier I get.",
        sayer: "Gary Player"
    },
    {
        quote: "Your time is limited, don't waste it living someone else's life.",
        sayer: "Steve Jobs"
    },
    {
        quote: "Dream big and dare to fail.",
        sayer: "Norman Vaughan"
    },
    {
        quote: "It's not about ideas. It's about making ideas happen.",
        sayer: "Scott Belsky"
    },
    {
        quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        sayer: "Christian D. Larson"
    },
    {
        quote: "You must be the change you wish to see in the world.",
        sayer: "Mahatma Gandhi"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        sayer: "Henry David Thoreau"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        sayer: "Steve Jobs"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        sayer: "Sam Levenson"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        sayer: "Wayne Gretzky"
    },
    {
        quote: "Every strike brings me closer to the next home run.",
        sayer: "Babe Ruth"
    }
]

nxtBtn.addEventListener('click',function(){
    let i=Math.floor(Math.random()*28);
    quoteCard.textContent=allQuotes[i].quote;
    quoteBy.textContent=allQuotes[i].sayer;
});
