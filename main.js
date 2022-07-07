let add = document.querySelector(".add");
let lower = document.querySelector(".lower");
let number = document.querySelector(".num");
add.addEventListener("click",()=>{
number.textContent++;
});
lower.addEventListener("click",()=>{
    if(number.textContent<=0)
    number.textContent=0;
    else
    number.textContent--;
});