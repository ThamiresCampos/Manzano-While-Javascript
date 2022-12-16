var base= parseInt(prompt("Insira o valor da base: "));
var expoente= parseInt(prompt("Insira o valor do expoente: "));
var resultado= 1 ;
var contadora= 0;

while (contadora < expoente) {
    var resultado= resultado * base
    contadora++
}
document.write(resultado);