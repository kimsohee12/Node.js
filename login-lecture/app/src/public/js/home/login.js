"use strict";

//프런트 단 기능 구현
const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginbtn = document.querySelector("button");

loginbtn.addEventListener("click",login);

function login(){
    const req = {
        id : id.value,
        psword : psword.value
    };
    
}