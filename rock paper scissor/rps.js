let uscore = 0;
let cscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const uscorepara = document.querySelector(".uscore");
const comscorepara = document.querySelector(".cscore");

const gcompchoice =() =>{
    const option = ["rock","paper","scissor"];
    const randomidx = Math.floor(Math.random() * 3);
    return option[randomidx];
}
const showwinner = (userwin,userchoice,comchoice) =>{
    if(userwin){
        uscore++;
        uscorepara.innerText = uscore;
        console.log("you win!");
        msg.innerText = `you won! your ${userchoice} beats ${comchoice}`;
        msg.style.backgroundColor = "green"
    }
    else{
        cscore++;
        comscorepara.innerText = cscore;
        console.log("you lose!");
        msg.innerText = `you lose. ${comchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red"
    }
};

const playgame =(userchoice) =>{
    console.log("user choice =",userchoice)
    const comchoice = gcompchoice();
    console.log("comp choice =",comchoice)
    
    if(userchoice === comchoice){
        console.log("it was a draw");
        msg.innerText = "it was a draw. Try again!";
        msg.style.backgroundColor ="black";
    }else{
        let userwin = true;
        if(userchoice === "rock"){
           userwin = comchoice === "paper"? false: true;
        }
        else if(userchoice === "paper"){
            userwin = comchoice === "scissor"?false:true;
        }
        else if(userchoice === "scissor"){
            userwin = comchoice ==="rock"?false:true;
        }
        else{
            console.log("some error occured")
        }
        showwinner(userwin,userchoice,comchoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });    
});
