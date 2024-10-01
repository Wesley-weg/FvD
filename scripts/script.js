// JavaScript Document
console.log("it works");
let menuknop = document.querySelector("#hamburger")
let balk = document.querySelector("#menu")

    menuknop.addEventListener("click",toonmenu)

    function toonmenu(){
        balk.classList.add("toonhamburger")
        console.log("it changed class")
    }