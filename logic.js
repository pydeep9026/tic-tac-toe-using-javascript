const cellelements=document.querySelectorAll(".gameboard .cell");
const player1=document.querySelector(".players .player1");
const player2=document.querySelector(".players .player2");
const result=document.querySelector(".result");
const result_header=document.querySelector(".result h1");
const restart_btn=document.querySelector(".result button");


const winning_conditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,5,8],
    [1,4,7],
    [0,4,8],
    [2,4,6] 
]
const playerO="O";
const playerX="X";
let toggleturn=true;

cellelements.forEach(cell=>{
    cell.onclick=()=>{
        let currentplayer=toggleturn? playerO:playerX;
        cell.classList.add("disabled");
        cell.innerHTML=currentplayer;
        cell.classList.add(currentplayer); 
        if(winnercheck(currentplayer)){
            result.classList.remove("inactive");
            result_header.innerHTML=currentplayer+" has won the game";
        }else if(draw()){
            result.classList.remove("inactive");
            result_header.innerHTML="draw!!";

        }else{
        swapplayer();
        }
    }
})


function winnercheck(currentplayer){
    return winning_conditions.some(condition=>{
     return condition.every(index=>{
        return cellelements[index].classList.contains(currentplayer)
        });
    })
}

function draw(){
    return [...cellelements].every(cell=>{
        return cell.classList.contains(playerX)||cell.classList.contains(playerO);
    })
}

function swapplayer(){
    toggleturn=!toggleturn;
    if(toggleturn){
        player1.classList.add("active");
        player2.classList.remove("active");
    }else{
        player2.classList.add("active");
        player1.classList.remove("active");
    }
}

restart_btn.onclick=()=>{
    location.reload() 
}