const formElement =document.getElementById("saveTransaction");
formElement.addEventListener("submit",(event)=>{
    event.preventDefault();
    let transactionDescripcion= document.getElementById("transactionDescripcion").value;
    let transactionPrice= document.getElementById("transactionPrice").value;
    let transaction ={transactionDescripcion:transactionDescripcion,transactionPrice: transactionPrice}
    let transactionJson=JSON.stringify(transaction);
    //mandar la transactionJson al backend y guardarla ahi
    fetch('http://localhost:9098/transactions',{
        method: 'post',
        body: transactionJson
    })
    .then(x =>console.log(transactionJson));
})
fetch('http://localhost:9098/transactions').then(x =>x.json()).then(console.log)