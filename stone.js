let uscore=0;
let comp=0;

const choice= document.querySelectorAll(".choice-op");
const msg=document.querySelector(".msg");
const uscorepara=document.querySelector("#u-score");
const comcorepara=document.querySelector("#c-score");

const drawGame=()=>{
   
     msg.innerText="Game draw! let's play again";
}

//win function
const showWin=(userWin,uc,computer)=>{
    if (userWin) {
        uscore++;
        uscorepara.innerText=uscore;
      
     msg.innerText=`you win! ${uc} beats ${computer}`;
     msg.style.backgroundColor="green";
        
    }
    else{
        comp++;
        comcorepara.innerText=comp;
       
         msg.innerText=`Computer  win ${computer} beats ${uc}`;
         msg.style.backgroundColor="red";
    }

}
//computer choice
const GenCompChoice=()=>{
    const option=["rock","paper","scissors"];
    const randomInd=Math.floor(Math.random()*3);
    return option[randomInd];
}
//game 
const playgame=(uc)=>{
    console.log(`user choice:->${uc}`);
    const computer=GenCompChoice();
    console.log(`computer choice:->${computer}`);
if(uc===computer){
    drawGame();
}
else{
    let userWin=true;
    if(uc==="rock"){
        userWin=computer==="paper"?false:true;
    }
    else if (uc==="paper") {
        userWin=computer==="scissor" ?false:true;
        
    }else{
        userWin=computer==="rock"?false:true;
    }
    showWin(userWin,uc,computer);
}
};

//user choice 
choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const uc=choice.getAttribute("id");
        // console.log("choice was clicked",uc);
        playgame(uc);
    });
});