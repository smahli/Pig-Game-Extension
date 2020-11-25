/**
 * 3 CHALLAGE
 * Change the game to follow these rules 
 * 1.A player looses his entire score when he rolls two 6 in a row. after that. its the next players turn
 * (HINT: always save the previous dice roll in a separate variable)
 * 
 * 2. Add an input field to the HTML where players can set their winning score, So that they
 * can change the predefined score of 100.(HINT: you can read that  value with the .value property
 * in javascript this is good oportunity to use google to figure this out) :
 * 3. Add another dice to the game, so that there are two devices now. The player looses his 
 * entire score one of them is a 1 (HINT: you will need CSS to position the second dice
 *  so take a look at the  CSS code for the first one ).
 */
var scores,roundScore,activePlayer,gamePlaying;
init();


document.querySelector('.btn-roll').addEventListener('click',function(){
	if(gamePlaying){
		// 1. Generate random number
	var dice = Math.floor(Math.random() * 6 )+ 1;

	// 2. Display the result 
	var diceDOM = document.querySelector('.dice');

	diceDOM.style.display ='block';
	diceDOM.src='dice-'+ dice +'.png';


	//3. Update the round score IF the rolled number was NOT a 1.
	if(dice!==1){
		//add score
		roundScore = roundScore + dice;
		document.querySelector('#current-'+ activePlayer).textContent = roundScore;
	}else{
		// next player
		nextPlayer();
		
	}
		
	}
	
});

document.querySelector('.btn-hold').addEventListener('click',function(){
	if(gamePlaying){
		//1. add current score to global score
	scores[activePlayer]+= roundScore; // same AS score[activeplayer]= score[activePlayer]+ roundScore;

	//2.update the user interface
	document.querySelector('#score-'+activePlayer).textContent =scores[activePlayer];
	//3. Check if the player won the game
	if(scores[activePlayer] >= 100){
		document.querySelector('#name-'+ activePlayer).textContent='WINNER!';
		document.querySelector('.dice').style.display='none';
		document.querySelector('.player-'+ activePlayer+'-panel').classList.add('winner');
		document.querySelector('.player-'+ activePlayer+'-panel').classList.remove('active');
		gamePlaying=false;

	}else{
		nextPlayer();
	}

	// nextPlayer
	


	}
	
});

function nextPlayer(){
	activePlayer === 0 ? activePlayer = 1 : activePlayer=0;  //ternary opeartor
			/*  above line iss similar to this code
			if(activePlayer===0){
				activePlayer=1;
			}else{
				activePlayer=0;
			}  */	

			roundScore =0; // when a player stops rolling the dice we should start
							// the secend player with zero
			document.getElementById('current-0').textContent='0';
			document.getElementById('current-1').textContent='0';
			
			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');
			//document.querySelector('.player-0-panel').classList.remove('active');
			//document.querySelector('.player-1-panel').classList.add('active');

			document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',init) ;

function init(){
scores = [0,0];
activePlayer=0;
roundScore=0;
gamePlaying=true;

//document.querySelector('#current-'+ activePlayer).textContent = dice;
//document.querySelector('#current'+ activePlayer).innerHTML ='<em>' + '</em>'
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');




}







/*  read a value using query selector//
 var x = document.querySelector('#score-0').textContent;
 console.log(x);*/
 
