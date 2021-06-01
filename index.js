var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.red.bgGreenBright.bold('Welcome to the Quiz'));
var userName = readlineSync.question(chalk.cyan("What's your Name: \n"));
console.log(chalk.cyan('Hello',userName,", Let's Play the Quiz!!"));

console.log('\n');
console.log(chalk.white.bgRedBright.bold.underline('Rules & Instructions: '));
console.log(chalk.yellow('1.',userName + ', There are 10 Questions on Technology and all are Compulsory.'));
console.log(chalk.yellow('2. You will get 2 points on each Right Answer.'));
console.log(chalk.yellow('3. One Point will be penalty if you give the Wrong Answer.'));
console.log(chalk.yellow('4. In Objective based questions you have to input the value given.'));
console.log('\n');

var leaderboard = [
  {name:'Michael',score: ' 7'},
  {name:'Francis',score: ' 10'},
  {name:'Abhishek',score:'12'},
  {name:'Sanjeev',score: ' 20'},
  {name:'Neha',score: '    15'},
  {name:'Yaman',score: '   12'},
  {name:'Francis',score: ' 17'},
  {name:'Rocky',score: '   14'}
];

console.log(chalk.yellowBright.underline('LeaderBoard:'));
console.log(chalk.cyanBright('Name       Score'));
for(var i = 0;i<leaderboard.length;i++){
  console.log(chalk.greenBright(leaderboard[i].name,'   ',leaderboard[i].score));
}

var score = 0;
function quizGame(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase() == answer.toLowerCase()){
    console.log(chalk.green('You are Right.'));
    score = score + 2;
  }else{
    console.log(chalk.red('You are Wrong.'));
    console.log(chalk.blue('The Correct Answer is:',answer));
    score = score - 1;
  }

  if(score < 0){
    score = 0;
  }
  console.log(chalk.cyan('Score is: ',score));
}

function quizQuest(listOfAnswers,question,answer){
  var userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
  console.log('\n');
  if(listOfAnswers[userAnswer] === answer){
    console.log(chalk.green('You are Right.'));
    score = score + 2;
  }else{
    console.log(chalk.red('You are Wrong.'));
    console.log(chalk.blue('The Correct Answer is: ',answer));
    score = score - 1;
  }
  
  if(score < 0){
    score = 0;
  }
  console.log(chalk.cyan('Score is: ',score));
}

var questionsList = [
  {
    question : 'Which city is India\'s Silicon Valley:  ',
    answer : 'Bangalore',
  },
  {
    question : 'What is the full form of NIC: ',
    answer : 'National Informatic Center',
  }, 
  {
    question : 'Who is the CEO of Google: ',
    answer : 'Sundar Pichai',
  }, 
  {
    question : 'Who is the CEO of Microsoft: ',
    answer : 'Satya Nadella',
  },
];

var objList = [

  {
    array : ['Mumbai', 'Hyderabad', 'Guragon', 'Bangalore'],
    question : 'Which City is known as "Electronic City of India"? ',
    answer : 'Bangalore'
  },
  {
    array : ['Language Processor', 'Operating System', 'MS-DOS', 'Data representation'],
    question : ' Which of the following is also called translator? ',
    answer : 'Language Processor'
  },
  {
    array : ['Alphabet per strike', 'Dots per Inch', 'Words per Inch', 'Strike per Inch'],
    question : 'How the quality of printer is measured? ',
    answer : 'Dots per Inch'
  },
  {
    array : ['JP Eckert', 'Jack Dorsey', 'Alan Turing', 'John Brunner'],
    question : 'Who among the following used the term computer worm for the first time? ',
    answer : 'John Brunner'
  },
  {
    array : ['Sundar Pichai', 'Abacus', 'Blaise Pascal', 'GRahul Gandhi'],
    question : 'Who invented mechanical calculator called Pascaline? ',
    answer : 'Blaise Pascal'
  },
  {
    array : ['Facebook', 'Microsoft', 'Twitter', 'Google'],
    question : 'Which global technology company recently announced a $1 million grant to promote news literacy in India? ',
    answer : 'Google'
  },
];

for(var i = 0;i<questionsList.length;i++){
  console.log('\n');
  console.log(chalk.cyanBright('Question',i+1));
  quizGame(questionsList[i].question,questionsList[i].answer);
  console.log('############################################');
}

var j = 5;
for(var i = 0;i < objList.length; i++){
  console.log('\n');
  console.log(chalk.cyanBright('Question',j++));
  quizQuest(objList[i].array,objList[i].question,objList[i].answer);

  console.log('############################################');
}

console.log('\n');
console.log(chalk.cyanBright.italic.underline('Congratulations,',userName,'your Total Score is: ',score));
console.log('\n');
console.log(chalk.whiteBright.italic('Thanks for Solving the Quiz,if you want to see your name on the Leader Board then Please take the Screenshot of the Score and Contact Santos from the Contact section.'));