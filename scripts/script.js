// JavaScript Document
console.log("it works");
let menuknop = document.querySelector("#hamburger")
let balk = document.querySelector("#menu")
let xknop = document.querySelector("#x")
let pokeball = document.querySelector("#pokeball")
let lijst = document.querySelector("#lijst")

    menuknop.addEventListener("click",toonmenu)
    xknop.addEventListener("click",verbergmenu)

    pokeball.addEventListener("click",verander)

    function toonmenu(){
        balk.classList.add("toonhamburger")
    }

    function verbergmenu(){
        balk.classList.remove("toonhamburger")
    }

    function verander(){
        pokeball.src = ("images/pokeballopen.png")
        lijst.style.animation = "verander 1s"
        document.querySelector("#lazers").style.animation = "lazer 1s"
        lijst.classList.add("appear")
    }