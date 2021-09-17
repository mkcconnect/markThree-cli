/**
 * Set score.
 * Ask the user their name.
 * Welcome the user. 
 * Top scores.
 * What is the homeground of Livepool FC?
 * When was LFC constituted?
 * When was the last time LFC won the league?
 */

 var readlineSync = require("readline-sync");
 var score = 0;
 
 function welcomeUser() {
   var userName = readlineSync.question("What is your name? ");
   console.log("Hello " + userName + ". Welcome to the Liverpool football club quiz!");
 }
 
 var qna = [
   {
     question: "What is the homeground of Livepool FC? ",
     answer: "anfield"
   },
   {
     question: "When was Liverpool football club founded? ",
     answer: 1892
   },
   {
     question: "When was the last time LFC won the league? ",
     answer: 2020
   }
 ];
 
 function play(question, answer){
   var userAnswer = readlineSync.question(question);
   
   if(userAnswer == answer){
     console.log("Correct answer. :)))")
     score = score + 1;
   } else {
     console.log("Sorry incorrect answer. :(");
     score = score - 1;
   }
   console.log("Your current score is: " + score + "!");
 };
 
 function quiz (){
   for (var i = 0; i < qna.length; i++){
     var currentQuestion = qna[i];
     play(currentQuestion.question, currentQuestion.answer);
   }
 }
 
 var topScores = [
   {
     Name: "Gerard",
     Score: 3
   },
   {
     Name: "Kenny",
     Score: 3
   }
 ];
 
 welcomeUser();
 quiz();
 console.log(topScores);
 