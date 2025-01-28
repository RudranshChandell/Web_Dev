const img1=document.querySelector(".img1");
const img2=document.querySelector(".img2");

function getrandom(){
    return Math.floor(Math.random()*6)+1;
}

const randomnumber1=getrandom();
const randomnumber2=getrandom();

img1.setAttribute("src",`images/dice${randomnumber1}.png`);
img2.setAttribute("src",`images/dice${randomnumber2}.png`);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").textContent="Player 1 Wins ";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").textContent="Player 2 Wins ";
}
else{
    document.querySelector("h1").textContent="Draw";
}