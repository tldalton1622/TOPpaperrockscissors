//let randomNumber = computerPlay();
//let randomNumber = computerPlay();

//computerPlay();
function computerPlay() {
    let min = 1;
    let max = 3;
    let numb = Math.floor(Math.random() * (max - min + 1) ) + min;
    //console.log(numb)
    return numb;
  }   
//let randomNumber = computerPlay();
function computerSelection() {
  let num = computerPlay()
  //console.log(num);
  if (num === 1) {
    //console.log("Rock")
    return 'rock';
  } else if (num === 2) {
    //console.log("paper")
    return 'paper';
  } else if (num === 3) {
   // console.log('scissors')
    return 'scissors';
  }
}
function playerSelection() {
  let selection = window.prompt("Rock, paper, or scissors?");
  //console.log(selection);
  return selection.toLowerCase(selection);
  //console.log(selection);
  
}
function game() {
  console.log("Rock, Paper, or Scissors?"); //essentially the game instructions
  let c = computerSelection(); //calls funnction to return random p,r,s
  let p = playerSelection(); // calls function to get input from player
  //let cwinner = "computer wins";
  //let pwinner = "player wins";
  console.log("computer picks " + c);
  console.log("player picked " + p);
  if(p === 'rock' && c === 'scissors' || p === 'scissors' && c === 'paper' || p === 'paper' && c === 'rock') {
    return console.log('player wins!')
  } else if (p === 'rock' && c === 'paper' || p === 'scissors' && c === 'rock' || p ==='paper' && c === 'scissors') {
     return console.log('computer wins')
  }   else {
    console.log("draw, play again")
  }
 
  }


  //else if (c.toLowerCase === 'rock' && p.toLowerCase === 'paper') {
    //console.log = pwinner;
   //else if (c.toLowerCase === 'rock' && p.toLowerCase === 'rock' ) {
    //console.log('draw');
  //}
  //}


