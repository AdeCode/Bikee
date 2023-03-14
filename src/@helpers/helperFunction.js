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

function nairaFormat(price){
    return (new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN'
      })).format(price)
}

function numberOfBike(arr){
    arr.filter(order => order.type === 'BIKE')
    // arr.map(order => {
    //     let numberOfBike = 0
    //     if(order.type === 'BIKE'){
    //         return numberOfBike ++
    //     }
    // })
}


function summer(acc, curr){
    const returns = acc + curr
    return returns
}

const helperFunction = {
    getTotalOrderAmount,
    extractFirstLetter,
    getOrderData,
    nairaFormat,
    numberOfBike,
    summer
}

export default helperFunction