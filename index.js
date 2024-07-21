let num = document.getElementById("num-to-conv")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")
const p1 = document.createElement("p")
const p2 = document.createElement("p")
const p3 = document.createElement("p")

function convert() {
        if (!isNaN(num.value)) {
            let feetConv = num.value*3.281
            let feetConvRounded = feetConv.toFixed(3)
            let meterConv = num.value/3.281
            let meterConvRounded = meterConv.toFixed(3)
            p1.textContent = `${num.value} meters = ${feetConvRounded} feet | ${num.value} feet = ${meterConvRounded} meters`
            lengthEl.append(p1)
            let gallonConv = num.value*0.264
            let gallonConvRounded = gallonConv.toFixed(3)
            let literConv = num.value/0.264
            let literConvRounded = literConv.toFixed(3)
            p2.textContent = `${num.value} liters = ${gallonConvRounded} gallons | ${num.value} gallons = ${literConvRounded} liters`
            volumeEl.append(p2)
            let poundConv = num.value*2.204
            let poundConvRounded = poundConv.toFixed(3)
            let kiloConv = num.value/2.204
            let kiloConvRounded = kiloConv.toFixed(3)
            p3.textContent = `${num.value} kilos = ${poundConvRounded} pounds | ${num.value} pounds = ${kiloConvRounded} kilos`
            massEl.append(p3)
        }
        
        else {
            alert ("Please input a number!")
        }
        num.value = null
}
