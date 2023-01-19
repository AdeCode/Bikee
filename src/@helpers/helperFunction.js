function extractFirstLetter(word){
    return word.charAt(0)
}

function getTotalOrderAmount(arr){
    let total = arr.map(item => item.total)
        if (total){
            const totalSum = total.reduce(
                (accumulator, currentValue) => accumulator + currentValue)
                return totalSum
        }
}

function getOrderData (arr) {
    let productsIds = arr.map(item => item.id)
    let productsQuantities = arr.map(item => item.quantity)
    const orderData = {
        product:productsIds,
        quantity:productsQuantities
    }
    return orderData
}

const helperFunction = {
    getTotalOrderAmount,
    extractFirstLetter,
    getOrderData
}

export default helperFunction