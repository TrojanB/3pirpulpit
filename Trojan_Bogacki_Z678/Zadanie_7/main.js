function oblicz(){
    let cel = Number(document.getElementById("cel").value);
    let f = Number((cel*(9/5) + 32));
    let k = Number(cel + 273);

    document.getElementById("wynik1").innerText = "Farenheit: " + f + "   Kelwin: " + k;
}