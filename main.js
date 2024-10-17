console.log("Clicks Counter");



let btn_1 = document.querySelector("#item-1")
let btn_2 = document.querySelector("#item-2")
let reset = document.querySelector("#reset")
let btn_3 = document.querySelector("#item-4")
let btn_4 = document.querySelector("#item-5")

let counter = document.querySelector("#count")
let display = document.querySelector("#inputDisplay")


let number = 0

function increase_1() {
    number +=1
    counter.textContent = number
    display.textContent = "Increase by 1"
    return number
}

function increase_5() {
    number +=5
    counter.textContent = number
    display.textContent = "Increase by 5"
    return number
}

function decrease_1() {
    number -=1
    counter.textContent = number
    display.textContent = "Decrease by 1"
    return number
}


function decrease_5() {
    number -=5
    counter.textContent = number
    display.textContent = "Decrease by 5"
    return number
}


function reset_count() {
    number = 0
    counter.textContent = number
    display.textContent = "Reset"
}


btn_1.addEventListener("click", decrease_5)
btn_2.addEventListener("click", decrease_1)
reset.addEventListener("click", reset_count)
btn_3.addEventListener("click", increase_1)
btn_4.addEventListener("click", increase_5)

