console.log ('Testing external JavaScript');

var score;
var activePlayer;
var roundScore ;
var diceone;
var gamePlaying ;

init();
var DOMdice = document.querySelector('.dice');
DOMdice.style.display = 'none';
if (gamePlaying == true)
{
document.querySelector('.btn-roll').addEventListener('click',function()
	{
	var dice = Math.floor(Math.random()*6)+1;
	DOMdice.style.display = 'block';
	DOMdice.src ="https://s3-us-west-2.amazonaws.com/s.cdpn.io/243004/dice-" + dice +".png";
	

	if(dice !== 1)
		{
			roundScore = roundScore + dice;			
			document.getElementById('current-'+activePlayer).innerHTML = roundScore;
			diceone =0;
		}
	else 
		{
			diceone = 1;
			nextPlayer();
			//activePlayer === 0 ? activePlayer =1 : activePlayer =0;						
			//document.querySelector('.player-0-panel').classList.toggle('active');
			
		}
	})
	
document.querySelector('.btn-hold').addEventListener('click',function()
	{
		if (diceone !== 1)
		{
		document.getElementById('score-'+activePlayer).innerHTML = Number(document.getElementById('score-'+activePlayer).innerHTML) + roundScore;
		score[activePlayer] = document.getElementById('score-'+activePlayer).innerHTML;
		console.log(score[activePlayer]);
		}
		
		if (score[activePlayer] >= 10)
		{
		gamePlaying = false;
		document.getElementById("name-" + activePlayer).innerHTML = 'WINNER!!'		
		document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');	
		DOMdice.style.display = 'none';		
		document.getElementById('current-'+activePlayer).innerHTML = 0;
		document.querySelector('.btn-hold').setAttribute('disabled',true);		
		document.querySelector('.btn-roll').setAttribute('disabled',true);
		}
		else {nextPlayer();};
	})
	
	console.log(score[activePlayer]);
	
	
	
function nextPlayer()
{		
		DOMdice.style.display = 'none';
		document.getElementById('current-'+activePlayer).innerHTML = 0;
		roundScore =0;
		
			if(activePlayer == 0)
			{
				activePlayer =1;
				document.querySelector('.player-0-panel').classList.remove('active');
				document.querySelector('.player-1-panel').classList.add('active');
			}
			else
			{
				activePlayer = 0;				
				document.querySelector('.player-1-panel').classList.remove('active');
				document.querySelector('.player-0-panel').classList.add('active');
			}
}

}
	
function init()
{
score = [0,0];
activePlayer = 0;
roundScore = 0;
diceone =0;
gamePlaying = true;

	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	document.getElementById('current-0').innerHTML =0;	
	document.getElementById('current-1').innerHTML =0;
	document.getElementById('score-0').innerHTML =0;	
	document.getElementById('score-1').innerHTML =0;	
	document.getElementById('name-0').innerHTML = 'Player1';		
	document.getElementById('name-1').innerHTML = 'Player2';	
	document.querySelector('.btn-hold').removeAttribute('disabled');		
	document.querySelector('.btn-roll').removeAttribute('disabled');
	
}


document.querySelector('.btn-new').addEventListener('click',init);