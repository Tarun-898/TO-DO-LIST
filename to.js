let input = document.querySelector("input");
let button=document.querySelector("button");
let ul=document.querySelector("ul");
button.addEventListener("click",function(){
    let list=document.createElement("li");
    list.innerText=input.value;
    ul.appendChild(list);
    input.value="";

    let debt=document.createElement("button");
    debt.innerText="delete";
    list.appendChild(debt);
    debt.addEventListener("click",function(){
        ul.removeChild(list);
    })
});
let lis = ul.children;

for (let li of lis) {
    let debt = document.createElement("button");
    debt.innerText = "delete";
    li.appendChild(debt);
    debt.addEventListener("click", function() {
        ul.removeChild(li);
    });
}

