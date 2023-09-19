// Code your solution in this file!

const hq = 42
const blockInFeet = 264
const freeSample = 400
const fare = 0.02
const flatFare = 25
const distanceBeforeFlatFare = 2000
const distanceMax = 2500


function distanceFromHqInBlocks(street) {
    if (street > hq) {
        return street - hq
    } else if (street < hq) {
        return hq - street
    }
}

function distanceFromHqInFeet(street) {
    if (street > hq) {
        return (street - hq) * blockInFeet
    } else if (street < hq) {
        return (hq - street) * blockInFeet
    }
}

function distanceTravelledInFeet(start, destination) {
    let distance = ((destination - start) * blockInFeet)
    if (destination > hq) {
        return distance
    } else if (destination < hq) {
        return Math.abs(distance)
    }
}

function calculatesFarePrice(start, destination) {
    let distance = Math.abs((destination - start) * blockInFeet)
    if ((distance <= freeSample)) {
        return 0
    } else if (distance > freeSample && distance <= distanceBeforeFlatFare) {
        return (distance-freeSample) * fare
    } else if (distance > distanceBeforeFlatFare && distance <= distanceMax) {
        return flatFare
    } else if (distance > distanceMax) {
        return "cannot travel that far"
    }
}
