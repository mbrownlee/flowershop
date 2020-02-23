// createFlower is a variable whose value is a function (=>)
// (season...name) are parameters of the function flower is a variable whose value is an object
// season:season first is the key, second is the value - the parameter needs to match the value
const createFlower = (season, color, cut, weather, name) => {
    const flower = {
        season:season,
        color:color,
        cut:cut,
        weather:weather,
        name:name
    }
return flower;
}
const tulip = createFlower("spring", "pink", "dies quickly", "hardy", "tulip")
const rose = createFlower("summer", "red", "long lasting", "sunny", "rose")
const daisy = createFlower("summer/fall", "white", "average", "rainy", "daisy")
const sunflower = createFlower("summer", "yellow", "long lasting", "sunny", "sunflower")
const hydrangea = createFlower("fall", "purple", "best dried", "all ", "hydrangea")




const flowerShop = []
flowerShop.push(tulip)
flowerShop.push(rose)
flowerShop.push(daisy)
flowerShop.push(sunflower)
flowerShop.push(hydrangea)
// Display a list item for each flower in this format
// The color flower grows in season.

for (const flower of flowerShop) {
    document.querySelector(".flowerShop").innerHTML += `<li>
    "The ${flower.color} ${flower.name}  grows in ${flower.season}.
    "</li>`
}