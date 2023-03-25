var box = document.querySelector('#box')
var button = document.querySelector('.button')
var gameover = document.querySelector('.gameover')
var ting = document.querySelector('.ting')


var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]

var temp = '';
function fillBox() {
    arr.forEach((e) => {

        temp += `<button id="${e}" class="button"></button>`
    })
    box.innerHTML = temp;
}
fillBox();
var flag = true;
var arr2 = Array(9).fill(0)
box.addEventListener('click', function (e, id) {
    if (e.target.id === 'box') return;
    if (e.target.textContent.length === 1) return;
    if (flag === true) {
        e.target.textContent = "X";
        //         turn = changeTurn();
        ting.play();
        flag = false;

    } else {
        e.target.textContent = "O";
        //         turn = changeTurn();
        ting.play();
        flag = true;
    }

    arr2.splice(e.target.id, 1, e.target.textContent)
    // if("X" == {})
    checkWin();
})

function checkWin(e) {

    if (arr2[0] === "X" && arr2[1] === "X" && arr2[2] === "X") {
        gameover.play();
        setTimeout(() => {
            box.innerHTML = `<h1 id="raja">X wins <br> GAME OVER</h1>
            <img src="./excited.gif" alt="">`
        }, 100);
    } else if (arr2[3] === "X" && arr2[4] === "X" && arr2[5] === "X") {
        gameover.play();
        setTimeout(() => {
            box.innerHTML = `<h1 id="raja">X wins <br> GAME OVER</h1>
            <img src="./excited.gif" alt="">`
        }, 100);
    } else if (arr2[6] === "X" && arr2[7] === "X" && arr2[8] === "X") {
        gameover.play();
        setTimeout(() => {
            box.innerHTML = `<h1 id="raja">X wins <br> GAME OVER</h1>
            <img src="./excited.gif" alt="">`
        }, 100);
    } else if (arr2[0] === "X" && arr2[3] === "X" && arr2[6] === "X") {
        gameover.play();
        setTimeout(() => {
            box.innerHTML = `<h1 id="raja">X wins <br> GAME OVER</h1>
            <img src="./excited.gif" alt="">`
        }, 100);
    } else if (arr2[1] === "X" && arr2[4] === "X" && arr2[7] === "X") {
        gameover.play();
        setTimeout(() => {
            box.innerHTML = `<h1 id="raja">X wins <br> GAME OVER</h1>
            <img src="./excited.gif" alt="">`
        }, 100);
    } else if (arr2[2] === "X" && arr2[5] === "X" && arr2[8] === "X") {
        gameover.play();
        setTimeout(() => {
            box.innerHTML = `<h1 id="raja">X wins <br> GAME OVER</h1>
            <img src="./excited.gif" alt="">`
        }, 100);
    } else if (arr2[0] === "X" && arr2[4] === "X" && arr2[8] === "X") {
        gameover.play();
        setTimeout(() => {
            box.innerHTML = `<h1 id="raja">X wins <br> GAME OVER</h1>
            <img src="./excited.gif" alt="">`
        }, 100);
    } else if (arr2[2] === "X" && arr2[4] === "X" && arr2[6] === "X") {
        gameover.play();
        setTimeout(() => {
            box.innerHTML = `<h1 id="raja">X wins <br> GAME OVER</h1>
            <img src="./excited.gif" alt="">`
        }, 100);
    } else if (arr2[0] === "O" && arr2[1] === "O" && arr2[2] === "O") {
        gameover.play();
        setTimeout(() => {
            box.innerHTML = `<h1 id="raja">O wins <br> GAME OVER</h1>
            <img src="./excited.gif" alt="">`
        }, 100);
    } else if (arr2[3] === "O" && arr2[4] === "O" && arr2[5] === "O") {
        gameover.play();
        setTimeout(() => {
            box.innerHTML = `<h1 id="raja">O wins <br> GAME OVER</h1>
            <img src="./excited.gif" alt="">`
        }, 100);
    } else if (arr2[6] === "O" && arr2[7] === "O" && arr2[8] === "O") {
        gameover.play();
        setTimeout(() => {
            box.innerHTML = `<h1 id="raja">O wins <br> GAME OVER</h1>
            <img src="./excited.gif" alt="">`
        }, 100);
    } else if (arr2[0] === "O" && arr2[3] === "O" && arr2[6] === "O") {
        gameover.play();
        setTimeout(() => {
            box.innerHTML = `<h1 id="raja">O wins <br> GAME OVER</h1>
            <img src="./excited.gif" alt="">`
        }, 100);
    } else if (arr2[1] === "O" && arr2[4] === "O" && arr2[7] === "O") {
        gameover.play();
        setTimeout(() => {
            box.innerHTML = `<h1 id="raja">O wins <br> GAME OVER</h1>
            <img src="./excited.gif" alt="">`
        }, 100);
    } else if (arr2[2] === "O" && arr2[5] === "O" && arr2[8] === "O") {
        gameover.play();
        setTimeout(() => {
            box.innerHTML = `<h1 id="raja">O wins <br> GAME OVER</h1>
            <img src="./excited.gif" alt="">`
        }, 100);
    } else if (arr2[0] === "O" && arr2[4] === "O" && arr2[8] === "O") {
        gameover.play();
        setTimeout(() => {
            box.innerHTML = `<h1 id="raja">O wins <br> GAME OVER</h1>
            <img src="./excited.gif" alt="">`
        }, 100);
    } else if (arr2[2] === "O" && arr2[4] === "O" && arr2[6] === "O") {
        gameover.play();
        setTimeout(() => {
            box.innerHTML = `<h1 id="raja">O wins <br> GAME OVER</h1>
            <img src="./excited.gif" alt="">`
        }, 100);
    }


}
