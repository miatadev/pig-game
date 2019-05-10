
var scores , roundScore , activePlayer , gamePlaying ; 
initStartFunction();

document.querySelector('.btn-roll').addEventListener('click', function() { 

    if(gamePlaying) { 
        
        // 1.random number
     var dice1 = Math.floor(Math.random()* 6) + 1; 
     var dice2 = Math.floor(Math.random()* 6) + 1; 

    // 2. display the result
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';    
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

    // 3.  update the round score If the rolled number was NOt 1 
    if (dice1 !== 1 && dice2 !== 1) {
        //add score
        roundScore += dice1+dice2 ;  
        
        document.querySelector('#current-' + activePlayer).textContent = roundScore;  
        
    } else { 
         nextPlayer(); 
    }   
}
 });   

document.querySelector('.btn-hold').addEventListener('click' , function () {
  if(gamePlaying) {
    // 1. add CURRENT score to GLOBAL score 
    scores[activePlayer] += roundScore;
    // 2. update the user interface 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  var inputScore = document.querySelector('.final-score').value; var winingScore;
    if(inputScore) {    
        winingScore = inputScore;
    } else {
         winingScore = 100;
    }
    // 3. check if player won the game
    if(scores[activePlayer] >= winingScore) {
     document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

     document.getElementById('dice-1').style.display = 'none';
     document.getElementById('dice-2').style.display = 'none'; 

    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

     gamePlaying = false;
    } else {
         nextPlayer();
    };
    }
});

function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;  

  roundScore = 0; // reset if dice 1

  document.getElementById ('current-0').textContent = '0';
  document.getElementById ('current-1').textContent = '0';
  
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active'); 

  document.getElementById('dice-1').style.display = 'none'; //task3
  document.getElementById('dice-2').style.display = 'none'; //task3

};

document.querySelector('.btn-new').addEventListener('click' , initStartFunction);

 function initStartFunction() {
     //reset all indicators
    scores = [0, 0]; 
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1'; 
    document.getElementById('name-1').textContent = 'Player 2'; 

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
 };
