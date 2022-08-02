const container = document.querySelector('.container');
const nameCont = document.querySelector('.nameCont')
const scoreCont = document.querySelector('.scorecont')
const Rankmastercontainer = document.querySelector('.Rankmastercontainer')



function nameDisplay({name, score}){
   let namedisplays = document.createElement('h2'); 
   namedisplays.classList.add('nameCont')
   let scoreDisplays = document.createElement('p'); 
   scoreDisplays.classList.add('scoreCont')
   let container = document.createElement('div')
   container.classList.add('container')


   namedisplays.innerText = name;
   scoreDisplays.innerText = score;
   Rankmastercontainer.appendChild(container)

   container.append(namedisplays, scoreDisplays);
  

}



let dataParsed = JSON.parse(localStorage.getItem("localData"))

dataParsed.sort((a,b) => b.score - a.score)
if(dataParsed.length > 5){
  
  do{
    dataParsed.pop();
  
  }while(dataParsed.length > 5)
}

dataParsed.forEach((e)=>{
  nameDisplay(e)
})
