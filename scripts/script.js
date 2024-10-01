// JavaScript Document
console.log("it works");
let menuknop = document.querySelector("#hamburger")
let balk = document.querySelector("#menu")
let xknop = document.querySelector("#x")

    menuknop.addEventListener("click",toonmenu)
    xknop.addEventListener("click",verbergmenu)

    function toonmenu(){
        balk.classList.add("toonhamburger")
        console.log("it changed class")
    }

    function verbergmenu(){
        balk.classList.remove("toonhamburger")
    }