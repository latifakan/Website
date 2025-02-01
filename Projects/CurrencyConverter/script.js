function calcEuroToDollar() {
    let euro = euroField.value;
    let result = euro * 1.1;

    usdField.value = result.toFixed(2).replace('.', ',');
}

function calcDollarToEuro() {
    let dollar = usdField.value;
    let result = dollar * 0.91;

    euroField.value = result.toFixed(2).replace('.', ',');
}