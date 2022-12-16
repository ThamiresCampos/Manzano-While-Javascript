var numero = parseInt(prompt("Insira um número: "));
var contadora= 1;

while (contadora <= 10) {
     var resultado= numero * contadora;
     document.write(numero + " X " + contadora + " = " + resultado + "<br>");
     contadora++
}