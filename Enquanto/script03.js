var contadora= 0;
var soma= 2;

while (contadora <= 500 ) {
    if (contadora % 2 == 0) {
        var soma= soma + contadora;
        contadora++
    }
    
}    
document.write("A somatória dos valores pares existentes na faixa de 500 números é igual a: "+soma);