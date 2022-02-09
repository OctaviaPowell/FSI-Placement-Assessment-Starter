// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Octavia Powell" 

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0


// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
const gbQuantity = document.querySelector('#qty-gb')
const ccQuantity = document.querySelector('#qty-cc')
const sugarQuantity = document.querySelector('#qty-sugar')
const totalQuantity = document.querySelector('#qty-total')





// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')
gb++
console.log('gb plus was clicked')
console.log(gb)
gbQuantity.textContent = gb

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

gbMinusBtn.addEventListener('click', function() {
    console.log('GB Minus Button Click')
gb--
total = gb+cc+sugar
console.log('gb MINUS was clicked')
console.log(gb)
if (gb<0){gb=0} else{
    console.log(gb)
    gbQuantity.textContent = gb
total
}})



// TODO: Hook up event listeners for the rest of the buttons
ccMinusBtn.addEventListener('click', function() {
    console.log('cc Minus Button Click')
cc--
total = gb+cc+sugar
console.log('cc MINUS was clicked')
console.log(cc)
if (cc<0){cc=0} else{
    console.log(cc)
    ccQuantity.textContent = cc
total
}})

ccPlusBtn.addEventListener('click', function() {
    console.log('cc Plus Button Click')
cc++
total = gb+cc+sugar
console.log('cc plus was clicked')
console.log(cc)
if (cc<0){cc=0} else{
    console.log(cc)
    ccQuantity.textContent = cc
total
}})

sugarPlusBtn.addEventListener('click', function() {
    console.log('sugar Plus Button Click')
sugar++
total = gb+cc+sugar
console.log('sugar plus was clicked')
console.log(sugar)
if (sugar<0){sugar=0} else{
    console.log(sugar)
    sugarQuantity.textContent = sugar
total
}})

sugarMinusBtn.addEventListener('click', function() {
    console.log('sugar Minus Button Click')
sugar--
total = gb+cc+sugar
console.log('sugar MINUS was clicked')
console.log(sugar)
if (sugar<0){sugar=0} else{
    console.log(sugar)
    sugarQuantity.textContent = sugar
total
}})








