function multiplicar(numero1:number,numero2:number,...numeros:number[]): number{
    return [numero1,  numero2, ...numeros].reduce((acumulador,valorAtual) => acumulador * valorAtual, 1);
}

console.log(multiplicar(1,2))

function dizOla(nome: string): void{
    console.log("Olá "+nome);
}

dizOla("Hellen");


const arrayNum: Array<number> = [5,5,10,12,16];

const arraySoma = arrayNum.reduce((acumulador,valorAtual)=>{
    return acumulador+=valorAtual
},0)

console.log(arraySoma)

