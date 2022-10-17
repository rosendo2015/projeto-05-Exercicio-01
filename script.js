alert("Favor insira dois números.");
let firstNumber = Number(prompt("Insira o primeiro número."));
let secondNumber = Number(prompt("insira o segundo número."));

let sum = firstNumber + secondNumber;
let sub = firstNumber - secondNumber;
let mult = firstNumber * secondNumber;
let division = firstNumber / secondNumber;
let restDivision = firstNumber % secondNumber;
let testParImpar = sum % 2;

alert(`A soma é igual a: ${sum}`);
alert(`A subtração é igual a: ${sub}`);
alert(`A multiplicação é igual a: ${mult}`);
alert(`A divisão é igual a: ${division}`);

if(testParImpar == 0){

    alert(`A soma dos dois números resulta em um número par`);
}else{

    alert(`A soma dos dois números resulta em um número impar`);
}

if(firstNumber == secondNumber){

    alert(`Os números são iguais`);

}else{

    alert(`Os números são diferentes`);
    
}



