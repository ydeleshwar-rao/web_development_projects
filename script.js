
console.log("Welcome TO Tic Tac Toe")
let turnn = new Audio("ting.wav")
let gameover = new Audio("gameover.wav")
let turn ="X"
let isgameover = false;

// function to change the turn   itternary opertor

const changeTurn = ()=>{
    return turn === "X"?"0": "X"
}

// function to check win

const checkWin =()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 7, 8],
        [0, 4, 8],
        [2, 6, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        }
    })

}

// game logic

let boxes = document.getElementsByClassName("box");   // get kar rha hai from html box class kho 
Array.from(boxes).forEach(element=>{                 //   haar ek element (box) kho bool rhe hai
    let boxtext = element.querySelector('.boxtext');  // html se fech kar rha hai booktext kho 
    element.addEventListener('click',()=>{          //   haaar box mein touch kar ne khe liye event listener laga rhe hai
        if(boxtext.innerText ===''){
            boxtext.innerText=turn;
            turn = changeTurn();
            turnn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;

            }




        }
    })
})
//add on click listener to reset button 
     reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });

    turn = "X";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})