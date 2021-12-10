const initialPrice = document.querySelector("#intial-price")
const quantityPrice = document.querySelector("#qnt-stocks")
const currentPrice = document.querySelector("#current-price")
const button = document.querySelector("#btn-1")
const output = document.querySelector("#output-box")




function calculateProfiandLoos (i,q,c) {
    if(i<c){
        var profit = (c-i)*q
        var profitPercentage = (profit/i)*100
        output.innerText = `You Have Profit of ${profit} and the Profit Percentage is ${profitPercentage}%`   
    } 
    else if ( c<i){
        var loss = (i-c)*q
        var loosPercentage = (loss/i)*100
        output.innerText = `You Have Loss of ${loss} and the Loss Percentage is ${loosPercentage}% `
    }

    else if (i===c){
        output.innerText = "No profit No loss"
    }

    else {
        output.innerText = "Something Went Wrong Please Check the Values "
    }
}

function runTheFuction() {
    const initialValue = Number(initialPrice.value)
    const quantityOfStocks = Number(quantityPrice.value)
    const currentPriceOfStocks = Number(currentPrice.value)
    calculateProfiandLoos(initialValue, quantityOfStocks, currentPriceOfStocks)
}





button.addEventListener("click",runTheFuction)





