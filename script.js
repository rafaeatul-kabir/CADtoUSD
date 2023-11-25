// Name: Rafaeatul Kabir
// ID: C0888535

//hardcoded exchange rate
const exchangeRate = 1.36;
//setting the default values
document.getElementById('cad').value = exchangeRate;
document.getElementById('usd').value = 1;
function formatDecimal(input) {
    // Remove non-numeric characters except for dots
    input.value = input.value.replace(/[^0-9.]/g, '');

    // Limit to two decimal places
    var decimalParts = input.value.split('.');
    if (decimalParts[1] && decimalParts[1].length > 2) {
        decimalParts[1] = decimalParts[1].slice(0, 2);
        input.value = decimalParts.join('.');
    }
}


function updateCurrency(input, targetName, sourceName){
    console.log("adasd");
    formatDecimal(input);
    let sourceVal = document.getElementById(sourceName).value;
    let updateVal= targetName=='cad'?sourceVal*exchangeRate:sourceVal/exchangeRate;
    document.getElementById(targetName).value = updateVal.toFixed(2);
}