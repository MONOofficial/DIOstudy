var string = string

function comparaNumero( num1, num2){
    if (!num1 || !num2) return "Digite dois números válidos!";
    //if (num1 == string) return "ouuu"

    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);
    return `${primeiraFrase} ${segundaFrase}`;   
}

function criaPrimeiraFrase(num1, num2){
     let saoIguais = ''

     if (num1 !== num2){

        saoIguais = 'não'
     }
    return `Os valores ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;
     
    let resultado10 = 'é menor do que 10'
    let resultado20 = 'é menor do que 20'
    
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10){
        resultado10 = 'é maior que 10'
    } if (compara20) {
        resultado20 = 'é maior do que 20'};
        if (soma == 10) {
         resultado10 = 'é igual a 10'}
          if (soma == 20){
           resultado20 = 'é igual a 20'};
        
    

   return `Sua soma é ${soma}, que ${resultado10} e que ${resultado20}`;
}

console.log(comparaNumero(15, 10));
