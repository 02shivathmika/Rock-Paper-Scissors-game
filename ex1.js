let userscore = 0;
let compscore = 0;
 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");

const userscorepara= document.querySelector("#userscore");
const compscorepara= document.querySelector("#computerscore");

const gencompchoice = ()=> {
    const opt=["rock","paper","scissors"];
    const randid = Math.floor(Math.random() * 3);
    return opt[randid];
};

const draw = () => {
    msg.innerText = "DRAW!!!";
};

const showwinner = (userwin,userchoice,compchoice)=> {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `YOU WIN!!! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundcolor="green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `YOU LOSE!! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundcolor="red";
    }
};

const playgame =(userchoice) => {
    console.log("user choice= ",userchoice);
    //generate comp choice
    const compchoice = gencompchoice();
    console.log("computer choice:- ",compchoice);

    if(userchoice === compchoice) {
        draw();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            compchoice === "scissors" ? false :true;
        }else{
            userwin=compchoice === "rock"? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);

    })
});