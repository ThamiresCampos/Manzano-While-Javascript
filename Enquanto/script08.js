contadora= 0;
var celsius= 0;
var F= 0;

while (celsius <= 100 ) {
    var celsius= celsius + 10;
    var F= (9 * celsius + 160) / 5;
    contadora++

document.write(celsius + " ° C" + " = " + F + " ° F" + "<br>");