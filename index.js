const readlineSync = require("readline-sync")

const ch = require('chalk');

var userName = readlineSync.question("Please enter your name: ")

console.log(ch.blueBright("Welcome " + userName + ",lets see if your really know about Indian history"))
 
console.log(ch.magentaBright("-------------------------------------------"));


console.log('\n');
console.log('Rules & Instructions: ');
console.log(ch.bold.blueBright('1.',userName + ', There are 5 Questions on Indian history and all are Compulsory.'));
console.log(ch.bold.blueBright('2. You will get 2 points on each Right Answer.'));
console.log(ch.bold.blueBright('3. One Point will be deducted if the Answer is Wrong.'));
console.log(ch.bold.blueBright('4. In MCQ based questions you have to type the Serial Number / Index Value.'));
console.log('\n');
 

var score = 0, min = 10; 

const highScore = [
  {
    name: "Elon",
    score: 10
  },
  {
    name: "Jeff",
    score: 9
  },
  {
    name: "Mark",
    score: 7
  }
]

var mcqList = [

  {
    array : ["Isa", "Katha", "Brihadaranyaka", "Svetasvatara"],
    question : "Which of the following Upanishads is written in prose?",
    answer : "Brihadaranyaka"
  },
  {
    array : ["Pushyamitra Sunga", "Pravarasena I", "Samudragupta", "Nandivarman Pallavamalla"],
    question : "Who among the following is known to have performed four Asvamedha sacrifices?",
    answer : "Pravarasena I"
  },
  {
    array : ["Mah-a kassapa" , "Mahinda Milinda", "Moggaliputta", "Tissa"],
    question : "Who among the following was the author of Abhidhamma treatise Kathavatthu? ",
    answer : "Moggaliputta Tissa"
  },
  {
    array : ["Rajaraja", "Rajendra I", "Rajadhiraja", "Rajendra II"],
    question : "Which of the following Chola kings was the first to capture Maldives?",
    answer :  "Rajaraja"
  },
  {
    array : ["Jamali", "Jamvant", "Jamval", "Can't say"],
    question :  "According to some Jain traditions, who was son-in-law and first disciple of Tirthankara Mahavira?",
    answer :"Jamali"
  },
  {
    array : ["Bharavi",  "Dandin",  "Varahmihira", "Kalidasa"],
    question : "Who among the following was the author of Kiratarjuniya?",
    answer : "Bharavi"
  },
  {
    array : ["Pulakesin II",  "Vikramaditya II",  "Yajnavarman", "Pulakesin I"],
    question : "Who defeated Pallava King Mahendravarman-I?",
    answer : "Pulakesin II"
  },
  {
    array : ["Major Rock Edict XI", "Major Rock Edict XII", "Major Rock Edict X", "Major Rock Edict XIII"],
    question : "Which Ashokan inscription mentions five contemporary Hellenic Kings?",
    answer : "Major Rock Edict XIII"
  }
];


function quizMcq(listOfAnswers,question,answer){
  let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
  console.log('\n');
  if(listOfAnswers[userAnswer] === answer){
     console.log(ch.green.bold("Awesome!u r right!!"))
    score = score + 2;
  } else{
     console.log(ch.red.bold("Oops!u r wrong!!"))
      console.log(ch.red.bold('The Correct Answer is: ', answer))
      console.log(ch.bold.bgYellow.magentaBright("Do not Worry. Stay and Play ahead"));
    score = score - 1;
  }

  if(score < 0){
    score = 0;
  }
  console.log(ch.yellow.bold('Score is: ',score));
}

for(var i = 0;i < mcqList.length; i++){
  console.log('\n');
  quizMcq(mcqList[i].array,mcqList[i].question,mcqList[i].answer);
  console.log(ch.magentaBright("-------------------------------------------"));
}

console.log(ch.bold.bgMagentaBright.white("Your score is " + score + "!!!"));

console.log(ch.bold.magentaBright("Show Leaderboard:"));

for( i=0  ;i <highScore.length ;i++){
  let player = highScore[i];
  if(player.score >= min) {
      min = player.score;
  }
  console.log(ch.bold.magenta(player.name));
  console.log(ch.bold.magenta(player.score));
}

console.log('\n');
console.log('Congratulations,',userName,'your Total Score is: ',score);
