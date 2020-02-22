const tulips = {
    season: "spring",
    color: "pink",
    cut: "dies quickly",
    weather: "hardy",
    name: "tulip"
}

const roses = { 
    season: "summer",
    color: "red",
    cut: "long lasting",
    weather: "sunny",
    name: "rose"
}

const daisies = {
    season: "summer/fall",
    color: "white",
    cut: "average",
    weather: "rainy",
    name: "daisy"
}

const sunflowers = {
    season: "summer",
    color: "yellow",
    cut: "long lasting",
    weather: "sunny",
    name: "sunflower"
}

const hydrangea = {
    season: "fall",
    color: "purple",
    cut: "better dried",
    weather: "all",
    name: "hydrangea"
}


const flowerShop = []
flowerShop.push(tulips)
flowerShop.push(roses)
flowerShop.push(daisies)
flowerShop.push(sunflowers)
flowerShop.push(hydrangea)
// Display a list item for each flower in this format
// The color flower grows in season.

for (const flower of flowerShop) {
    document.querySelector(".flowerShop").innerHTML += `<li>
    "The ${flower.color} ${flower.name}  grows in ${flower.season}.
    "</li>`
}