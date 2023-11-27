
String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }

    return this.substring(0, index) + replacement + this.substring(index + 1);
}

function trafficLights(road, n) {
    let local_road = road
    let g = 0
    let w = 0
    let r = 0

    for (let i = 0; i < n; i++){

        local_road = local_road.replaceAt(local_road.indexOf("C"), "P")
    }
    return local_road
}

console.log(trafficLights("C...R............G......", 10))