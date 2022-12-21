const costPrice = document.querySelector("#cost-price");
const stockQuantity = document.querySelector("#stock-qty");
const sellPrice = document.querySelector("#sell-price");
const checkButton = document.querySelector("#check-btn");
const showMessage = document.querySelector("#show-message")



function calculateProfitLoss(){

    var sell = Number(sellPrice.value);
    var cost = Number(costPrice.value);
    var stock = Number(stockQuantity.value);

    var totalCost = cost*stock;

   if(sell>0 && cost>0 && stock>0){ if(sell*stock < cost*stock ){
        var loss = cost*stock - sell*stock ;
        var lossPer = loss*100/totalCost;
var text =  `You are in loss of amount ${loss} and loss percentage is ${Number(lossPer.toFixed(2))} %`

showMessage.innerText = text;
    //   console.log(loss , Number(lossPer.toFixed(2)));
    
}else if (cost*stock < sell*stock){
        var profit = sell*stock - cost*stock;
        var profitPer = profit*100/totalCost;
var text =  `you are in profit of amount ${profit} and profit percentage is ${Number(profitPer.toFixed(2))} %` 
showMessage.innerText = text;       
        // console.log(profit, Number(profitPer.toFixed(2))); 
    }
    else{
        showMessage.innerText = "neither in profit nor in loss"
        // console.log("neither profit nor loss")
    }}
    else{ showMessage.innerText = " *Please enter all fields with positive values more than zero"}
}



checkButton.addEventListener("click" , calculateProfitLoss);

