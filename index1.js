const pricePeterborough = (0.21 * 116).toFixed(2)

const priceLincoln = (0.21 * 191).toFixed(2)

const priceLeeds = (0.21 * 270).toFixed(2)

const priceGlasgow = (0.21 * 553).toFixed(2)

const userAge = Number(prompt("Please enter your age:"))
if (userAge < 0) {
    console.log('%cPlease enter your real age.', 'color: #ff0000; font-size: 2rem;')
} else if (userAge > 200) {
    console.log('%cYou must be Yoda.', 'color: #ff0000; font-size: 2rem;')
}

const userDestination = prompt(`From London King's Cross Station to:
    Peterborough
    Lincoln
    Leeds
    Glasgow
    Please enter the name of your destination:
    (it can be in upercase or lowercase dosen't metter)`)

const stationName = userDestination.toLocaleLowerCase()

if (stationName === "peterborough" && userAge < 19){
    console.log(`Your ticket will cost £${pricePeterborough - (pricePeterborough * 0.2)} because you are ${userAge} years old and get a 20% discount.`)
} else if (stationName === "peterborough" && userAge > 18 && userAge < 65) {
    console.log(`Your ticket will cost £${pricePeterborough}.`)
} else if (stationName === "peterborough" && userAge > 64 && userAge < 150) {
    console.log(`Your ticket will cost £${pricePeterborough - (pricePeterborough * 0.4)} because you are ${userAge} years old and get a 40% discount.`)
} else if (stationName === "lincoln" && userAge < 19){
    console.log(`Your ticket will cost £${priceLincoln - (priceLincoln * 0.2)} because you are ${userAge} years old and get a 20% discount.`)
} else if (stationName === "lincoln" && userAge > 18 && userAge < 65) {
    console.log(`Your ticket will cost £${priceLincoln}.`)
} else if (stationName === "lincoln" && userAge > 64 && userAge < 150) {
    console.log(`Your ticket will cost £${priceLincoln - (priceLincoln * 0.4)} because you are ${userAge} years old and get a 40% discount.`)
} else if (stationName === "leeds" && userAge < 19){
    console.log(`Your ticket will cost £${priceLeeds - (priceLeeds * 0.2)} because you are ${userAge} years old and get a 20% discount.`)
} else if (stationName === "leeds" && userAge > 18 && userAge < 65) {
    console.log(`Your ticket will cost £${priceLeeds}.`)
} else if (stationName === "leeds" && userAge > 64 && userAge < 150) {
    console.log(`Your ticket will cost £${priceLeeds - (priceLeeds * 0.4)} because you are ${userAge} years old and get a 40% discount.`)
} else if (stationName === "glasgow" && userAge < 19){
    console.log(`Your ticket will cost £${priceGlasgow - (priceGlasgow * 0.2)} because you are ${userAge} years old and get a 20% discount.`)
} else if (stationName === "glasgow" && userAge > 18 && userAge < 65) {
    console.log(`Your ticket will cost £${priceGlasgow}.`)
} else if (stationName === "glasgow" && userAge > 64 && userAge < 150) {
    console.log(`Your ticket will cost £${priceGlasgow - (priceGlasgow * 0.4)} because you are ${userAge} years old and get a 40% discount.`)
} else {
    console.log('%cPlease try to enter your data right.', 'color: #ff0000; font-size: 2rem;')
}
