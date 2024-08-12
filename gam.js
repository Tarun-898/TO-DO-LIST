let color=["yellow","red","purple","blue"];
let level=0;
let start=false;
let h3=document.querySelector("h3");
let h2=document.querySelector("h2");
let user=[];
let se=[];

document.addEventListener("keypress",function(){
    if (start==false){
        h3.innerText="game start";
        start=true;
        levelup();
    }
});
function levelup(){
    level++;
    h2.innerText="level "+level;
    let ren=Math.floor(Math.random()*4);
    let co=color[ren];
    flash(co);
    seq(co);
}
function flash(color){
    let btn=document.querySelector(".ba."+color);
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
    
};
function seq(color){
    se.push(color);
    console.log(se);
};
document.querySelectorAll(".ba").forEach(function(btn){
    btn.addEventListener("click",function(){
        let userColor=btn.classList[1];
        user.push(userColor);
        check();
    });
});
function check(){
    let ind = user.length - 1;
    if (user[ind] !== se[ind]) {
        user = [];
        level=0;
        se = [];
        start = false;
        h3.innerText = "you lost ! press any key to try again";
    } else if (user.length === se.length) {
        user = [];
        setTimeout(levelup, 1000); // Delay next level
    }
}