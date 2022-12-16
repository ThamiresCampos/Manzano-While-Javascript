var contadora= 0;
var media= 0;
var soma= 0;

while (contadora < 10){
    var numero= parseInt(prompt("Dígite um número: "));
    var soma= soma + numero;
    contadora++
}
var media = soma / 10;
document.write(soma + "<br>" + media);
