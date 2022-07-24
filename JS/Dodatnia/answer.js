function nazwafunkcji() {
    var nazwawarunku = document.getElementById("pole").value;

    if (nazwawarunku>0)document.getElementById("wynik").innerHTML="dodatnia";
    else if (nazwawarunku<0)document.getElementById("wynik").innerHTML="ujemna";
    else if (nazwawarunku=="0")document.getElementById("wynik").innerHTML="zero";
    else document.getElementById("wynik").innerHTML="to nie jest liczba";
    }