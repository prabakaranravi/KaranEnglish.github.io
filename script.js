let questions = [

{q:"1. Identify the noun: She bought a book.",a:["She","bought","book"],correct:2},

{q:"2. Choose the correct pronoun: John is my friend. ___ is kind.",a:["He","She","It"],correct:0},

{q:"3. Which is a verb?",a:["run","happy","quick"],correct:0},

{q:"4. Choose the adjective.",a:["beautiful","run","eat"],correct:0},

{q:"5. Which word is an adverb?",a:["slowly","table","teacher"],correct:0}

];

let current = 0;
let score = 0;

function loadQuestion(){

let q = questions[current];

document.getElementById("question").innerText = q.q;

let answersHTML="";

q.a.forEach((ans,i)=>{
answersHTML += `<button onclick="checkAnswer(${i})">${ans}</button><br><br>`;
});

document.getElementById("answers").innerHTML = answersHTML;

}

function checkAnswer(i){

if(i === questions[current].correct){
score++;
}

}

function nextQuestion(){

current++;

if(current < questions.length){
loadQuestion();
}
else{
document.getElementById("score").innerText = "Your Score: " + score + "/" + questions.length;
}

}

loadQuestion();
