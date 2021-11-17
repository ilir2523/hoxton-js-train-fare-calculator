const userAge = Number(prompt("Please enter your age:"))
if (userAge < 0 || Number.isNan(userAge)) {
    alert("Please enter your data right.")
} 
const userTravellingDistance = Number(prompt("Please enter the distance (in km) from this station to the station you want to treavell:"))
if (userTravellingDistance < 0 || userTravellingDistance > 9259 || Number.isNan(userTravellingDistance)) {
    alert("Please enter your data right.")
}

const thePriceForKm = 0.21 * userTravellingDistance

console.log(`Ticket cost £ ${thePriceForKm}`)

if (userAge < 18) {
    const belowEighteenPrice = thePriceForKm - (thePriceForKm * 0.2).toFixed(2)
    console.log(`Your ticket will cost £${belowEighteenPrice} because you are ${userAge} years old and get a 20% discount.`)
}
 else if (userAge > 64) {
    const aboveSixtyPrice = thePriceForKm - (thePriceForKm * 0.4).toFixed(2)
    console.log(`Your ticket will cost £${aboveSixtyPrice} because you are ${userAge} years old and get a 40% discount.`)
} 
else if (18 < userAge && userAge < 65) {
    const aboveEighteenPrice = thePriceForKm
    console.log(`Your ticket will cost £${aboveEighteenPrice}.`)
} else {
    console.log("Please Enter your data right.")
}
