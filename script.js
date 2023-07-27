let playerscore = 0;
let computerscore = 0;
let playerselect = "";
let computerselect = "";

function playRound(playerSelect, computerSelect)
{
    if(playerscore < 5 && computerscore < 5)
    {
        if(playerSelect == computerSelect)
        {   
            document.getElementById("sub").innerHTML = "Tie!";
            return;
        }
        if((playerSelect == "rock" && computerSelect == "scissors") || (playerSelect == "paper" && computerSelect == "rock") || (playerSelect == "scissors" && computerSelect == "paper"))
        {
            document.getElementById("sub").innerHTML = "You Win! " + playerSelect + " Beats " + computerSelect;
            playerscore++;
            scoreupdate()
        }
        else
        {
            document.getElementById("sub").innerHTML = "You Lose! " + computerSelect + " Beats " + playerSelect;
            computerscore++;
            scoreupdate()
        }
    }
    if(playerscore == 5)
    {
        document.getElementById("end").innerHTML = 'Player Wins!';
        button.style.visibility = 'visible';
    }
    else if(computerscore == 5)
    {
        document.getElementById("end").innerHTML = 'Computer Wins!';
        button.style.visibility = 'visible';
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
const rock = document.querySelector('.Rock');
    rock.addEventListener('click', () => {
        playerselect = "rock";
        computerselect = computerChoice();
        playRound(playerselect, computerselect)
    });

const paper = document.querySelector('.Paper');
paper.addEventListener('click', () => {
    playerselect = "paper";
    computerselect = computerChoice();
    playRound(playerselect, computerselect)
});
const scissors = document.querySelector('.Scissors');
    scissors.addEventListener('click', () => {
        playerselect = "scissors";
        computerselect = computerChoice();
        playRound(playerselect, computerselect)
    });
const button = document.querySelector('.again');
button.addEventListener('click', () => {
    playerscore = 0;
    computerscore = 0;
    scoreupdate()
    document.getElementById("end").innerHTML = "";
    button.style.visibility = 'hidden';
});    
function scoreupdate()
{
    document.getElementById("playScore").innerHTML = 'Player Score: ' + playerscore;
    document.getElementById("compScore").innerHTML = 'Computer Score: ' + computerscore;
}    


















/* function playersetup()
{
    const buttons = document.querySelectorAll('button');

    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
    
      // and for each one we add a 'click' listener
      button.addEventListener('click', () => {
        if(playerscore != 5 || computerscore != 5)
        {
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
        }
      });
    });
}
function winner(playerScore, computerScore)
{
    if(playerScore <= 5 && computerScore <= 5)
    {
        document.getElementById("playScore").innerHTML = 'Player Score: ' + playerScore;
        document.getElementById("compScore").innerHTML = 'Computer Score: ' + computerScore;
    }
    if(playerScore == 5)
    {
        document.getElementById("end").innerHTML = 'Player Wins!';
    }
    else if(computerScore == 5)
    {
        document.getElementById("end").innerHTML = 'Computer Wins!';
    }
}
function game()
{
    playersetup();
}
console.log(game());
*/        