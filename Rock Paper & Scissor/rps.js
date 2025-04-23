let userScore =0;
let pcScore = 0;

const choices = document.querySelectorAll(".choice");
const mesg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genPCchoice = () =>
{
    const options = ["rock" , "paper", "scissors"];
    //rock pape scissors
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
}

const drawGame = () =>
{
    console.log("Draw!!!");
    mesg.innerText = "Draw!";
    mesg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) =>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you won!");
        mesg.innerText = "You win!";
        mesg.style.backgroundColor = "green";
    }
    else
    {
        pcScore++;
        compScorePara.innerText = pcScore;
        console.log("you lose!");
        mesg.innerText = "You lose!";
        mesg.style.backgroundColor = "red";
    }
    
}

const playGame = (userChoice) => 
{
    console.log("User Choice= ", userChoice);

    //Generate PC choice
    const PCchoice = genPCchoice();
    console.log("PC Choice = ", PCchoice);

    if(userChoice === PCchoice)
    {
        //draw game
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            //PC choice = scissors / paper
            userWin = PCchoice === "paper" ? false : true;
        }

        else if(userChoice === "paper")
        {
            //PC choice = scissors / rock
            userWin = PCchoice === "scissors" ? false : true;
        }

        else 
        {
                //PC choice = paper / rock
                userWin = PCchoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }
}

choices.forEach((choice) =>
{
    console.log(choice);
    choice.addEventListener("click", () => 
    {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
}); 