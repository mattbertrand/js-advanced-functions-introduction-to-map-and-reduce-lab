// Your code here
function mapToNegativize(src) {
    let n = []
    for (let i=0; i<src.length; i++) {
        n.push(-1 * src[i])
    }
    return n
} 

function mapToNoChange(src) {
    let n = []
    for (let i=0; i<src.length; i++) {
        n.push(src[i])
    }
    return n
}

function mapToDouble(src) {
    let n = []
    for (let i=0; i<src.length; i++) {
        n.push(src[i] * 2)
    }
    return n
}
function mapToSquare(src) {
    let n = []
    for (let i=0; i<src.length; i++) {
        n.push(src[i] * src[i])
    }
    return n
}

function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint;
    for (let i=0; i<src.length; i++) {
        total = total + src[i]
    }
    return total
}

function reduceToAllTrue(src) {
    for (let i=0; i<src.length; i++) {
        if (!src[i]) return false
    }
    return true
}

function reduceToAnyTrue(src) {
    for (let i=0; i<src.length; i++) {
        if (src[i]) return true
    }
    return false
}
