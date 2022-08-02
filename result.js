const scoreResult = document.querySelector('.scoreResult')
const nameinpt = document.querySelector('.nameinpt')
const submitbtn = document.querySelector('.submitbtn')

let scoreCheckifUndefined = localStorage.getItem('score')
if(scoreCheckifUndefined == "undefined"){
  location.replace("index.html");
}
scoreResult.innerText = `Your score is ${localStorage.getItem('score')} out of 10!`


function ResultScore(name, score){
  if (localStorage.getItem('score') == "undefined") {
    return;
  }
  let resultScore = {}
  resultScore.name = name
  resultScore.score = score
  
  let myData =JSON.parse(localStorage.getItem("localData"))
  if (myData == null) {
    myData =[]
  }
  myData.push(resultScore)
  
  localStorage.setItem("localData",JSON.stringify(myData))
}
submitbtn.addEventListener ('click', () =>{
  let gottenName = nameinpt.value;
  let gottenScore = localStorage.getItem('score')
  if(gottenName != ""){
    ResultScore(gottenName, gottenScore)
  }
  nameinpt.value = ""
  location.replace("rankingpage.html")
})