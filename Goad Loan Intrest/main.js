const pa=document.getElementById('pa')
const ia=document.getElementById('ia')
const month=document.getElementById("dm")
const showdata=document.querySelector(".showdata")
function show(event){
    event.preventDefault();
    const sum=(parseFloat(pa.value)+ parseFloat(((pa.value)*(ia.value/100))*month.value))
    showdata.innerHTML=` <h3>Principle Amount :</h3>${pa.value}
                       <h3>Intrest amount(per month):</h3>${(pa.value)*(ia.value/100)}
                       <h3>Total Amount:</h3>${sum}`
}