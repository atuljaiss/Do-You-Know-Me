var readlinesync=require('readline-sync')
var chalk= require("chalk")
var userName=readlinesync.question('Enter your Name:')
console.log("Hy "+chalk.green(userName.toUpperCase())+" TO : Do you know ATUL??")
var score=0
function play(question,answer)
{
  console.log(chalk.green(question))
  var userAnswer= readlinesync.question("Enter you answer: ").toUpperCase()
  if(userAnswer== answer){
    console.log(chalk.green('Right!!'))
    score++
    
    
  }
  else{
    console.log(chalk.red('Wrong!!'))
  }
  console.log('Current Score : '+ chalk.yellow(score))
    console.log("************")
 }
 questions=[{question:"Which State Do I Belong To?",
 answer:"BIHAR"},
 {question: "What do I love to do the most?",
 answer:"SLEEPING"},
 {question:"What is more important to me: Money/Friends",
 answer:"MONEY"}]
  for(var i=0;i<questions.length;i++)
  {
    play(questions[i].question,questions[i].answer)
  }
 
