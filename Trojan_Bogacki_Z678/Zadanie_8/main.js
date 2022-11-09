function oblicz(){
    let s = Number(document.getElementById("s").value);
    let g = 0;
    let m = 0;

    if(s>=0){
        while(s-3600>=0){
            g++;
            s-=3600;
        }
        while(s-60>=0){
            m++;
            s-=60;
        }
        document.getElementById("wynik2").innerText = g + "g" + " " + m + "m" + " " + s + "s";
    }

    else document.getElementById("wynik2").innerText = "Nie można obliczyć na ujemnych!";
   
}