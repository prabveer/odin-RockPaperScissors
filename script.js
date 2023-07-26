function playRound(playerSelect, computerSelect)
{
    if(playerSelect == computerSelect)
    {   
        document.getElementById("sub").innerHTML = "TIE!";
        return;
    }
    if((playerSelect == "rock" && computerSelect == "scissors") || (playerSelect == "paper" && computerSelect == "rock") || (playerSelect == "scissors" && computerSelect == "paper"))
    {
        document.getElementById("sub").innerHTML = "You Win! " + playerSelect + " Beats " + computerSelect;
        return 1;

    }
    else
    {
        document.getElementById("sub").innerHTML = "You Lose! " + computerSelect + " Beats " + playerSelect;
        return 2;
    }

}
function computerChoice()
{
    n = Math.floor(Math.random() * 3);
    if(n == 0)
    {
        return "rock";
    } 
    else if (n == 1)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}
function playersetup()
{
    // set player and computers inital score line
    let playerscore = 0;
    let computerscore = 0;
    const buttons = document.querySelectorAll('button');

    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
    
      // and for each one we add a 'click' listener
      button.addEventListener('click', () => {
        let val = button.id;
        let computerAnswer = computerChoice();
        let score = playRound(val, computerAnswer);
        if(score == 1 )
        {
            playerscore++;
        }
        else if (score == 2)
        {
            computerscore++;
        }
        winner(playerscore, computerscore);
        
      });
    });
}
function winner(playerScore, computerScore)
{
    if(playerScore != 5 && computerScore != 5)
    {
        document.getElementById("playScore").innerHTML = 'Player Score: ' + playerScore;
        document.getElementById("compScore").innerHTML = 'Computer Score: ' + computerScore;
    }
    else
    {
        if(playerScore == 5)
        {
            document.getElementById("end").innerHTML = 'Player Wins!';
        }else
        {
            document.getElementById("end").innerHTML = 'Computer Wins!';
        }
    }
}
function game()
{
    playersetup();
}
console.log(game());
        