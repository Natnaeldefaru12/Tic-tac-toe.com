function openPlayerConfig(event){
editedPlayer=+ event.target.dataset.playerid;
playerConfigOverLayElement.style.display='block';
backdropElement.style.display='block';
}

function closePlayerConfig(){
    playerConfigOverLayElement.style.display='none';
    backdropElement.style.display='none';  
    formElement.firstElementChild.classList.remove('error') ; 
    errorOutputElement.textContent=''

}

function savePlayerConfig(event){
    event.preventDefault();
    const formData=new FormData(event.target);
    const enteredPlayerName=formData.get('playername').trim();
    console.log(enteredPlayerName)

    if(!enteredPlayerName){
        event.target.firstElementChild.classList.add('error');
        errorOutputElement.textContent='Please enter a valid name!'
        return;
    }
    console.log(editedPlayer);

    const updatedPlayerDataElement =document.getElementById('player-'+ editedPlayer +'-data' )
    updatedPlayerDataElement.children[1].textContent=enteredPlayerName;
    players[editedPlayer-1].name=enteredPlayerName;
    closePlayerConfig();
}
