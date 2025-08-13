function compute()
{
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const interest = parseInt(principal) * parseFloat(rate) * parseInt(years) / 100;
    const amount = interest + parseInt(principal);
    const result = document.getElementById('result');

    var futureYear = new Date().getFullYear() + parseInt(years);

    if (parseInt(principal) <= 0) { 
        alert("please provide a postive value for principal");
        document.getElementById("principal").focus();
        return;
    }
    result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",<br/>at an interest rate of " + "<mark>" + rate + "</mark>" + "%<br/>You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",<br/>in the year " + "<mark>" + futureYear +  "</mark>" + "<br/>";
}


function updateRate()
{
    const rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').innerHTML = rateval;
    
}
        