var numero= 0;
var maior= 0;
var menor= 0;

while (numero >= 0) {
var numero =parseInt(prompt("Insira um número: "));

if (numero > maior) {
    var maior = numero;
}
else {
    var menor= numero;
}
}
document.write("O maior número é: "+maior + "<br>");
document.write("O menor número é: "+menor);