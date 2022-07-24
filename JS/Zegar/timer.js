function nazwafunkcji() {
    var nazwazmiennej = new Date();

    var day = nazwazmiennej.getDate();
    if(day<10) day = "0"+day;
    var month = nazwazmiennej.getMonth()+1;
    if(month<10) month = "0"+month;
    var year = nazwazmiennej.getFullYear();
    var hour = nazwazmiennej.getHours();
    if(hour<10) hour = "0"+hour;
    var minute = nazwazmiennej.getMinutes();
    if(minute<10) minute = "0"+minute;
    var second = nazwazmiennej.getSeconds();
    if(second<10) second = "0"+second;

    document.getElementById("timer").innerHTML =
     day+"/"+month+"/"+year+" | "+hour+":"+minute+":"+second;

     setTimeout("nazwafunkcji()",1000);
}