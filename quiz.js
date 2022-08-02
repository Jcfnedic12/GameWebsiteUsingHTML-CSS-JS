const QuestionHeading = document.querySelector('.QuestionHeading')
const questionIndicationProgress = document.querySelector('.questionIndicationProgress')
const questionprogressText = document.querySelector('.questionprogressText')


const questionnaire = document.querySelector('.questionnaire')
const AnswersText = document.querySelectorAll('.AnswersText')
const AnswerchooserContainer = document.querySelectorAll('.AnswerchooserContainer')
const AnswersContainers = document.querySelectorAll('.AnswersContainers')


// score page
// const scoreResult = document.querySelector('.scoreResult') 

// end of score page oistering

let ChoicesIncrementer = 0
let j = 0;
let k = 0;
let h = 0;
let n = 0;
let gottenScore = 0;

let arrtester = [12 , 11, 14, 13, 13, 13, 13, 13, 13, 13]
let arranswerrandomizer = [11, 11, 11, 11];
let answersrandomir = Math.floor(Math.random()*arranswerrandomizer.length)
// scoreResult.innerText = "Your score is walaa, talunan ka kase !!"
do{
  let answersrandomir = Math.floor(Math.random()*arranswerrandomizer.length)

  if(arranswerrandomizer.some((num) => num==answersrandomir) == true){

  }else{
    arranswerrandomizer[n] = answersrandomir;
    n++
  }

}while(n != arranswerrandomizer.length)


let random = Math.floor(Math.random()* arrtester.length)
do{
  
  random = Math.floor(Math.random()* arrtester.length)
  
  if(arrtester.some((x)=>x == random) == true) {

   
  }else{
    arrtester[j] = random;
    // console.log(`j array has a value of ${arrtester[j]}`)
    j++
  }


 
}while(arrtester[j] != arrtester[10])
// arrtester[3] = random


let QuizRandomizer = [{question: 'Largest shark that live in earth?',
answer: ['Megalodon','Bullshark','Great White shark','Hammerhead shark'],  
correctanswer: 'Megalodon'},

{question: 'Programming language primarily used in Arduino?',
answer: ['Javascript','HTML','Java','C++'],
correctanswer: 'C++'},

{question: 'Called as "christmas capital of the Philippines"?',
answer: ['Manila','Cagayan','Baguio','Cebu'],
correctanswer: 'Baguio'},

{question: 'In the game "Genshin Impact" Mora is known as?',
answer: ['Pyro Archon','Hydro Archon','Geo Archon','Cryo Archon'],
correctanswer: 'Geo Archon'},

{question: 'First President of the Philippines?',
answer: ['Emillio Aguinaldo','Manuel Quezon','Diosdado Macapagal','Gloria Arroyo'],
correctanswer: 'Emillio Aguinaldo'},

{question: 'Capital of Philippines?',
answer: ['Taguig','Las Piñas','Manila','Cavite'],
correctanswer: 'Manila'},

{question: "What is the meaning of 'Vi' in the term 'LuzVIMinda'",
answer: ['Vigan','Victoria','Vico','Visayas'],
correctanswer: 'Visayas'},

{question: 'Animal that has always been treated as an insect but was not?',
answer: ['Fruitfly','Bee','Spider','Gecko'],
correctanswer: 'Spider'},

{question: 'In the movie Avengers:Infinity War, who died after using the infinity gauntlet?',
answer: ['Captain America','Dr. Strange','Iron Mon','Iron Man'],
correctanswer: 'Iron Man'},

{question: 'Before being called as Russia, what was it called?',
answer: ['Western Union','Onion Union','Russian Union','Soviet Union'],
correctanswer: 'Soviet Union'}
]



function gamechangingMomentum(){
    
  let progressWidth = (k /QuizRandomizer.length) * 100;



  
  if (k==10) {
    location.replace("score.html");
  }else{
    QuestionHeading.innerText = `Question ${k+1}`
  questionprogressText.innerText = `question ${k+1} out of 10`
 
  questionIndicationProgress.style.width = `${progressWidth}%`
    AnswersText.forEach(answers =>{
      answers.innerText = QuizRandomizer[arrtester[k]].answer[arranswerrandomizer[h]]
      questionnaire.innerText=QuizRandomizer[arrtester[k]].question
      ChoicesIncrementer+=1
      h++
     
    })
  }
  

  AnswerchooserContainer.forEach(elems => {
    elems.parentElement.style.backgroundColor = '#207303'
  });

  if(k <= arrtester.length){
    k++
    h=0
  }else{
    
  }
  
}

gamechangingMomentum()
AnswerchooserContainer.forEach(click=>{
  click.addEventListener('click',()=>{
    if (click.innerText == QuizRandomizer[arrtester[k-1]].correctanswer) {
     click.parentElement.style.backgroundColor = '#59E728'
     setTimeout(() => {
      gamechangingMomentum()
     }, 1000);
     
     gottenScore+=1
     console.log(`the final score you got is ${gottenScore}`)
     let vartoString = gottenScore.toString();

     localStorage.setItem("score", vartoString);
    console.log(`the local storaged storeed ${localStorage.getItem('score')}`)
    }else{
      click.parentElement.style.backgroundColor = '#FC254C'
      setTimeout(() => {
        gamechangingMomentum()
       }, 1000);
    }

  })
})


let vartoString = gottenScore.toString();

localStorage.setItem("score", vartoString);
console.log(localStorage.getItem('score'))


