

var score,roundScore,activePlayer,GameOver=true,wicket;
 //funtion to start the game
startGame();
// if you press throw ball
document.querySelector('.btn-roll').addEventListener('click' , function(){   
        if(GameOver){    
              //create a random number
              var dice= Math.floor(Math.random()*6 + 1);
              //Display it On the Image
              document.querySelector('.dice').style.display='block';
              document.querySelector('.dice').src = 'cricket-'+dice+'.png';
              //update the total score
              document.querySelector('#score-'+activePlayer).textContent =dice;
              console.log(activePlayer);
              
              //here 5 is actually wicket
              if(dice != 5)
              { 
                  //update score
              score[activePlayer] = score[activePlayer] + dice;
              document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
              }
              else{ //increase the wickets
                  roundScore=roundScore+1;
                  document.querySelector("#current-"+activePlayer).textContent=roundScore;
                  if(roundScore == wicket){
                      changePlayerTurn();
                  } //update
                  else{
                    score[activePlayer] = score[activePlayer] + dice;
                    document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
                  }
                 
                }//checking if the player 2 makes more runs than player 1
                if(score[1] > score[0]){
                    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
                    document.querySelector('#name-'+activePlayer).textContent='Winner';
                    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
                    document.querySelector('.dice').style.display='none';
                    GameOver=false;}
                 
                 
                
                    
        }        
  
});

//if you press new game button
document.querySelector('.btn-new').addEventListener('click' , startGame);
//New Game Fuction

function startGame(){
    GameOver=true;
    if(GameOver){    score=[0,0];
        roundScore=0;
        activePlayer=0;
        wicket=10;
        //setting everything to zero or startup
       document.getElementById('score-0').textContent='0';
       document.getElementById('score-1').textContent='0';
       document.getElementById('current-0').innerHTML='0';
       document.getElementById('current-1').innerHTML='0';
       document.querySelector('#name-0').textContent='ZEALAND';
       document.querySelector('#name-1').textContent='ENGLAND';
       
       document.querySelector('.dice').style.display='none';
       document.querySelector('.player-0-panel').classList.remove('winner');
       document.querySelector('.player-1-panel').classList.remove('winner');
       document.querySelector('.player-0-panel').classList.add('active');
       document.querySelector('.player-1-panel').classList.remove('active');
       }


}
//funtion to turn the player turn :)
function changePlayerTurn(){
    document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
    document.querySelector('#current-'+activePlayer).textContent = roundScore;
    //check if the winner is second player after making less score than player 1
    if (activePlayer==1 && score[0] > score[1] && roundScore == wicket )               
    {
        document.querySelector('.player-0-panel').classList.add('winner');
        document.querySelector('#name-0').textContent='Winner';
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.dice').style.display='none';
        GameOver=false;
        }
        //check if match is tie as its final so no tie:)
        if (activePlayer==1 && score[0] == score[1] && roundScore == wicket )               
        {
            startGame();
            GameOver=false;
            };
            //changing the active player
        if(GameOver){
            activePlayer === 0 ? activePlayer = 1 : activePlayer= 0;
            roundScore=0;
            document.querySelector('#current-'+activePlayer).textContent = '0';      
            document.querySelector('.player-1-panel').classList.toggle('active');
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.dice').style.display='none';          
        };
        }
       