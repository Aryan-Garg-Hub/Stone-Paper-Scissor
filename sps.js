let userScore=0;
let jarvisScore=0;
let choices=document.querySelectorAll(".choice");
let mesg= document.querySelector(".msg");
let userScrPar=document.querySelector("#user-score");
let jarvisScrPar=document.querySelector("#jarvis-score");

const getJarvisChoice=()=>{
    let options=["stone","paper","scissor"];
    let optionIdx=Math.floor(Math.random()*3);
    return options[optionIdx];
};

const drawGame=()=>{
    console.log("Game is draw..!!");
    mesg.textContent="DRAW..!!";
    mesg.style.backgroundColor="yellow";
    mesg.style.color="black";
};
const showWinner=(userW,userCh,jarvisCh)=>{
    if(userW){
        userScore++;
        userScrPar.textContent=`${userScore}`;        
        console.log("YOU WIN..!!");
        mesg.textContent=`YOU WIN..YOUR ${userCh} BEATS ${jarvisCh}`;
        mesg.style.backgroundColor="green";
    }
    else{
        jarvisScore++;
        jarvisScrPar.textContent=`${jarvisScore}`;        
        console.log("JARVIS WIN..!!");
        mesg.textContent=`YOU LOSE..YOUR ${userCh} LOSES ${jarvisCh}`;
        mesg.style.backgroundColor="red";
    }
};

const playGame=(userC)=>{
    console.log("User Choice = " + userC);
    let jarvisC=getJarvisChoice();
    console.log("Jarvis Choice = "+jarvisC);
    if(userC===jarvisC){
        drawGame()
    }
    else{
        let userWin=true;
        if(userC==="stone"){
            userWin=jarvisC==="paper"?false:true;
        }
        else if(userC==="paper"){
            userWin=jarvisC==="stone"?true:false;
        }
        else if(userC==="scissor"){
            userWin=jarvisC==="stone"?false:true;
        }
        showWinner(userWin,userC,jarvisC);
    } 
};

choices.forEach((cho)=>{
    cho.addEventListener("click",()=>{
        let userChoice=cho.getAttribute("id");
        // console.log("choice was clicked "+ userChoice);
        playGame(userChoice);
    });
});