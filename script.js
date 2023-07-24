function playRound(playerSelect, computerSelect)
{
    if(playerSelect == computerSelect)
    {
        alert("Tie")
        return;
    }
    if((playerSelect == "rock" && computerSelect == "scissors") || (playerSelect == "paper" && computerSelect == "rock") || (playerSelect == "scissors" && computerSelect == "paper"))
    {
        alert("You Win! " + playerSelect + " Beats " + computerSelect);
        return 1;

    }
    else
    {
        alert("You Lose! " + computerSelect + " Beats " + playerSelect);
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
    let answer = prompt("Please enter rock, paper, or scissors");
    answer = answer.toLowerCase();
    while(answer != "rock" && answer != "paper" && answer != "scissors")
    {
        answer = prompt("Please enter rock, paper, or scissors");
        answer = answer.toLowerCase();
    }
    return answer;
}
function winner(playerScore, computerScore)
{
    if(playerScore > computerScore)
        alert("Player Wins!")
    else if (computerScore > playerScore)
        alert("Computer Wins!")
    else
        alert("DRAW")
}
function game()
{
    let playerscore = 0;
    let computerscore = 0;
    for(let i = 0; i < 5; i++)
    {

        answer = playersetup();
        let computerAnswer = computerChoice();
        let score = playRound(answer, computerAnswer);
        if(score == 1 )
        {
            playerscore++;
        }
        else if (score == 2)
        {
            computerscore++;
        }
        alert("Player Score: " + playerscore + " Computer Score: " + computerscore);
    }
    winner(playerscore, computerscore);

}
console.log(game());
        