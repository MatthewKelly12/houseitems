//create  homeInventoryDatabase as an empty object
const homeInventoryDatabase = {}

//create empty arrays for categories 
homeInventoryDatabase.musicGear = []
homeInventoryDatabase.bikes = []
homeInventoryDatabase.chiliseeds = []


//create objects of stuff
const dirtJumper = {
    name: "Giant STP",
    description: "adult BMX",
    location: "living room"
}

const garyFisher = {
    name: "Gary Fisher Tassajara",
    description: "mountain bike",
    location: "living room"
}

const stumpJumper = {
    namme: "Specialized Stumpjumper",
    description: "mountain bike",
    location: "living room"
}

const dynoVFR = {
    name: "Dyno VFR",
    description: "vintage bmx from childhood",
    location: "storage"
}

const rolandFantom = {
    name: "Roland Fantom X",
    description: "keyboard/workstation",
    location: "living room"
}

const brawley = {
    name: "Brawley",
    description: "bass guitar",
    location: "living room",
}

const bossLoop = {
    name: "Boss RC-50",
    description: "loop station",
    location: "closet"
}

const trinidadScorpion = {
    name: "Trinidad Moruga Scorpion",
    description: "super duper hot chili",
    location: "cupboard"
}

const manzana = {
    name: "Manzana",
    description: "rare, pubescen family",
    location: "cupboard",
}

const lemonDrop = {
    name: "Lemon Drop",
    description: "yellow, fruity",
    location: "cupoard"
}
//  examples below, push objects in array
//  homeInventoryDatabase.crafts.push(vintageInkwell)
//  homeInventoryDatabase.furniture.push(writingDesk)
//  push objects into bike array
homeInventoryDatabase.bikes.push(dirtJumper)
homeInventoryDatabase.bikes.push(garyFisher)
homeInventoryDatabase.bikes.push(stumpJumper)
homeInventoryDatabase.bikes.push(dynoVFR)

// push objects into music array
homeInventoryDatabase.musicGear.push(rolandFantom) 
homeInventoryDatabase.musicGear.push(brawley) 
homeInventoryDatabase.musicGear.push(bossLoop) 

// push objects into chiliseeds array
homeInventoryDatabase.chiliseeds.push(trinidadScorpion)
homeInventoryDatabase.chiliseeds.push(manzana)
homeInventoryDatabase.chiliseeds.push(lemonDrop)

console.log(homeInventoryDatabase.bikes[2])
console.log(homeInventoryDatabase.chiliseeds[0])
console.log(homeInventoryDatabase.musicGear[0])


function saveDatabase (databaseObject, localStorageKey) {
    const stringifiedDatabase = JSON.stringify(databaseObject)
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
saveDatabase(homeInventoryDatabase, "Matt's Stuff")


// cont Database = function () {
//     const db = localStorage.getItem("inventoryDataBase")
//     return JSON.parse(db)
// }    how to retreive info






