let userScore = 0;
let computerScore = 0;

const  selectors = document.querySelectorAll(".select");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user");
const comScorepara = document.querySelector("#computer");

const computerSelectx = () => {
    let options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
 
    return options[ranIdx];
}

    const draw = () => {
        console.log("Game was Draw");
        msg.innerText = "Draw.. Play Agian";
        msg.style.backgroundColor = "#0FA4AF"

    }; 

    const showWinner = (userWin) =>{
        if(userWin){
            userScore++;
            userScorepara.innerText = userScore;
            msg.innerText = "You Win";
            msg.style.backgroundColor = "green";
        }else{
            computerScore++;
            comScorepara.innerText = computerScore;
            msg.innerText = "Computer Win";
             msg.style.backgroundColor = "red";
        }
    };

 const playGame = (userSelect) =>{
     console.log("user select = ", userSelect);

     const computerSelect = computerSelectx();
     console.log("computer choice = ", computerSelect);

     if(userSelect === computerSelect){
        draw();
     }else{
        let userWin = true;
        if(userSelect === "rock"){
            userWin = computerSelect === "paper" ? false : true;
        }else if(userSelect === "paper"){
            userWin = computerSelect === "scissors" ? false : true;
        }else{
            userWin = computerSelect === "rock" ? false : true;
        }
        showWinner(userWin);
     }

}

selectors.forEach((select) =>{
    select.addEventListener("click" , () =>{
       const userSelect = select.getAttribute("id");
       //console.log("choice was clicked ", userSelect) ;
       playGame(userSelect);
    });
});

