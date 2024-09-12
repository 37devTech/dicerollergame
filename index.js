var roll = Math.floor(Math.random()*6) +1;

if (roll === 1)
{
    document.getElementById("img1").src = "./images/dice1.png";
}
else if (roll === 2)
{
    document.getElementById("img1").src = "./images/dice2.png";
}
else if (roll === 3)
{
    document.getElementById("img1").src = "./images/dice3.png";
}
else if (roll === 4)
{
    document.getElementById("img1").src = "./images/dice4.png";
}
else if (roll === 5)
{
    document.getElementById("img1").src = "./images/dice5.png";
}
else if (roll === 6)
{
    document.getElementById("img1").src = "./images/dice6.png";
}