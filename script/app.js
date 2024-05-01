const gameData=[
    [0,0,0],
    [0,0,0],
    [0,0,0],

];
let editedPlayer =0;
let activePlayer =0;
let currentRound =0;
let gameIsOver =false;
const players =[
{
    name:'',
    symbol:'X',
    color:'white',
    textColor:'black',
},
{
    name:'',
    symbol:'O',
    color:'black',
    textColor:'white',
},
];

const playerConfigOverLayElement=document.getElementById('config-overlay');
const backdropElement =document.getElementById('backdrop');
const formElement=document.querySelector('form')
const errorOutputElement =document.getElementById('config-errors')
const gameAreaElement=document.getElementById('active-game')
const activePlayerNameElement=document.getElementById('active-player-name');
const gameOverElement =document.getElementById('game-over');
const gameBoardElement =document.getElementById('game-board');

const editPlayer1BtnElement=document.getElementById('editPlayer-1-btn');
const editPlayer2BtnElement=document.getElementById('editPlayer-2-btn');
const cancelConfigButton=document.getElementById('cancel-config-button');
const startNewGameBtnElement=document.getElementById('start-game-btn');
const gameFieldElements =document.querySelectorAll('#game-board li');
console.log(gameFieldElements);

editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

cancelConfigButton.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig )

startNewGameBtnElement.addEventListener('click',startNewGame)

for (const gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener('click',selectGameField)
}
function changeListItemsColor() {
    const listItems = gameBoardElement.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.backgroundColor = 'rgba(105, 66, 46, 0.425)';
    }
}
