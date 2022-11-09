

function oblicz(){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);

    if(a+b>c && a+c>b && b+c>a){
        let p = (a+b+c)/2;
    let p2 = p*(p-a)*(p-b)*(p-c);

    document.getElementById("wynik").innerHTML = "Pole trójkąta o bokach:  a = " + a + ", b = " + b + ", c = " + c + " to :"  + "<br>" + Math.sqrt(p2);
    }
    else  document.getElementById("wynik").innerText = "Nie ma takiego trojkąta";

}