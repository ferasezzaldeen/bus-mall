'use-strict';


let imagear=['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];

const imageshow=document.getElementById('imageshow');
const leftimage=document.getElementById('left');
const middleimage=document.getElementById('middle');
const rightimage=document.getElementById('right');
imageshow.addEventListener('click',eventClicker);
const resultButton=document.getElementById('result-button');
resultButton.addEventListener('click',eventButton);
const resultElement=document.getElementById('results');
let ulElement=document.createElement('ul');
resultElement.appendChild(ulElement);

let clickNumber=0;
let leftImageIndex=0;
let middleImageIndex=0;
let rightImageIndex=0;

function Images(name){
  this.name=name.split('.')[0];
  this.img='assets/'+name;
  this.shown=0;
  this.clicks=0;
  Images.all.push(this);
}

Images.all=[];
for(let i=0;i<imagear.length;i++){
  new Images(imagear[i]);

}

function eventClicker(e){
  if((e.target.id === 'left'|| e.target.id ==='middle' ||e.target.id === 'right')&& clickNumber<25){

    if(e.target.id === 'left') {
      Images.all[leftImageIndex].clicks++;
    }
    if(e.target.id === 'middle') {
      Images.all[middleImageIndex].clicks++;
    }
    if(e.target.id === 'right') {
      Images.all[rightImageIndex].clicks++;
    }

    clickNumber++;
    

    rendur();
  }

}

function eventButton(){
  if(clickNumber>=25){
    for(let i=0;i<imagear.length;i++){
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=Images.all[i].name+' had '+Images.all[i].clicks+' votes, and was seen '+Images.all[i].shown+' times.';

    }

  }else{
    alert('please finish the voting first');
  }

}

function rendur() {
  let leftindex= randomNumber(0,imagear.length-1);
  let rightindex;
  let middleindex;
  do{
    rightindex=randomNumber(0,imagear.length-1);
    middleindex=randomNumber(0,imagear.length-1);

  }
  while(leftindex === rightindex || leftindex === middleindex || rightindex === middleindex);

  leftimage.src= Images.all[leftindex].img;
  rightimage.src= Images.all[rightindex].img;
  middleimage.src=Images.all[middleindex].img;
  leftImageIndex=leftindex;
  middleImageIndex=middleindex;
  rightImageIndex=rightindex;
  Images.all[leftindex].shown++;
  Images.all[rightindex].shown++;

  console.log(Images.all);
}





rendur();







































function randomNumber( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

