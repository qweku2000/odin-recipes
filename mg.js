
//array

const cardarrays = [
    {
        name:'fries',
        img: '../memory game/pics/fries.png',
    },
    {
        name:'hotdog',
        img:'../memory game/pics/hotdog.png',
    },
    {
        name:'cheeseburger',
        img:'../memory game/pics/cheeseburger.png',
    },
    {
        name:'icecream',
        img:'../memory game/pics/ice-cream.png',
    },
    {
        name:'pizza',
        img:'../memory game/pics/pizza.png',
    },
    {
        name:'milkshake',
        img:'../memory game/pics/milkshake.png',
    },
    {
        name:'fries',
        img: '../memory game/pics/fries.png',
    },
    {
        name:'hotdog',
        img:'../memory game/pics/hotdog.png',
    },
    {
        name:'cheeseburger',
        img:'../memory game/pics/cheeseburger.png',
    },
    {
        name:'icecream',
        img:'../memory game/pics/ice-cream.png',
    },
    {
        name:'pizza',
        img:'../memory game/pics/pizza.png',
    },
    {
        name:'milkshake',
        img:'../memory game/pics/milkshake.png',
    }
]

cardarrays.sort(()=> 0.5 - Math.random())


const griddisplay = document.getElementById('grid')
const results = document.querySelector('#result')

function createboard(){
    for(let i=0;i<cardarrays.length;i++){
        const card = document.createElement('img')
        card.setAttribute('src','./pics/blank.png')
        card.setAttribute('data-id',i)
        griddisplay.appendChild(card)
        card.addEventListener('click',flip)
       
       
    }
}
createboard()

let cardchosen = []
let cardschosenids = []
const cardswon = []

function flip(){
    console.log(cardarrays)
    let cardid = this.getAttribute('data-id')
    cardchosen.push(cardarrays[cardid].name)
    cardschosenids.push(cardid)
    console.log(cardchosen)
    console.log(cardschosenids)
    this.setAttribute('src', cardarrays[cardid].img)
    if(cardchosen.length === 2){
       setTimeout( checkmatch , 500)
   }

  
   
}


function checkmatch(){
    const cards = document.querySelectorAll('img')
    console.log(cards)
   if(cardchosen[0] == cardchosen[1]){
    const cards =   document.querySelectorAll('img')
     alert( 'you have found a match')
      cards[cardschosenids[0]].setAttribute('src', '../memory game/pics/white.png')
      cards[cardschosenids[1]].setAttribute('src', '../memory game/pics/white.png')
      cards[cardschosenids[0]].removeEventListener('click', flip)
      cards[cardschosenids[1]].removeEventListener('click', flip)
      cardswon.push(cardchosen)
   } else{
        
        cards[cardschosenids[0]].setAttribute('src', '../memory game/pics/blank.png')
        cards[cardschosenids[1]].setAttribute('src', '../memory game/pics/blank.png')
        alert('Sorry Try again')
   }
   cardchosen = []
   cardschosenids = []

   if ( cardswon.length == cardarrays.length/2){
       results.innerHTML = 'CONGRATS!! U HAVE WON'
   }

}



