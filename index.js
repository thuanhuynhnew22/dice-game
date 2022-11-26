let player1 = document.querySelector('.img1');
let player2 = document.querySelector('.img2');
let winText = document.querySelector('h1');

function randomNumber1 ()
{
    // Returns a random integer from 1 to 6:
    var num1 = Math.floor(Math.random() * 6) + 1;
    var num2 = Math.floor(Math.random() * 6) +1;

    // changes image base on value generated above
    var newSource1 = "images/dice" + num1 + ".png"
    var newSource2 = "images/dice" + num2 + ".png"
    player1.setAttribute('src', newSource1);
    player2.setAttribute('src', newSource2);

    if(num1 > num2) //player 1 wins
    {
        winText.innerHTML = "🚩Player 1 Wins!";
    }
    else if(num1 < num2) //player 2 wins
    {
        winText.innerHTML = "Player 2 Wins! 🚩";
    }
    else  //draw
    {
        winText.innerHTML = "Draw!";
    }
}