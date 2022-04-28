let randomNumber ="";
let winnerstatus ="";
let playerscore = 0;
let opscore = 0;
function reset(){
  randomNumber ="";
  winnerstatus ="";
  playerscore = 0;
  opscore = 0;
  document.getElementById("score1").innerHTML=playerscore
  document.getElementById("score2").innerHTML=opscore
}
function play(player){
  randomNumber=Math.floor(Math.random()*3+1);
  let computer ="";
  if(randomNumber==1){
    computer="rock";
  } else if(randomNumber==2){
    computer="paper";
  }else{
    computer="scissors";
  }

  console.log(computer);

  if(player=="rock"){
    document.getElementById("playerImage").src="images/rock.svg";
    if(computer=="rock"){
      document.getElementById("computerImage").src="images/rock.svg";
      console.log("Tie");
      winnerstatus="draw";
    }
    else if(computer=="paper"){
      document.getElementById("computerImage").src="images/paper.svg";
      console.log("lose");
      winnerstatus="lose";
    }
    else if(computer=="scissors"){
      document.getElementById("computerImage").src="images/scissors.svg";
      console.log("win");
      winnerstatus="win";
    }
  }
    else if(player=="paper"){
      document.getElementById("playerImage").src="images/paper.svg";
      if(computer=="rock"){
        document.getElementById("computerImage").src="images/rock.svg";
        console.log("win");
        winnerstatus="win";
      }
      else if(computer=="paper"){
        document.getElementById("computerImage").src="images/paper.svg";
        console.log("Tie");
        winnerstatus="draw";
      }
      else if(computer=="scissors"){
        document.getElementById("computerImage").src="images/scissors.svg";
        console.log("lose");
        winnerstatus="lose";
      }
    }
    else if(player=="scissors"){
      document.getElementById("playerImage").src="images/scissors.svg";
      if(computer=="rock"){
        document.getElementById("computerImage").src="images/rock.svg";
        console.log("lose");
        winnerstatus="lose";
      }
      else if(computer=="paper"){
        document.getElementById("computerImage").src="images/paper.svg";
        console.log("win");
        winnerstatus="win";
      }
      else if (computer=="scissors"){
        document.getElementById("computerImage").src="images/scissors.svg";
        console.log("Tie");
        winnerstatus="draw";
      }
  }
  if(winnerstatus=="win"){
    playerscore+=1;
    document.getElementById("score1").innerHTML=playerscore
  }else if(winnerstatus=="lose"){
    opscore+=1;
    document.getElementById("score2").innerHTML=opscore
  }

  if(playerscore>=5){
    console.log("You Win!")
    document.getElementById("win").innerHTML="You Win!"
    reset();
  }else if(opscore>=5){
    console.log("You Lose!")
    document.getElementById("win").innerHTML="You Lose!"
    reset();
  }
  }
  