export { };
/** 
 * Caso algum dos Ids abaixo não esteja presente no index.html, a função não vai retornar os itens e isso pode causar erros no resto do arquivo.
*/
const button = document.getElementById('button');
const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;

/** 
 * A função abaixo não valida se os itens somados são número. Logo situações inesperadas podem ocorrer.
 * Por exemplo, somarSemValidar(1, "3") vai devolver "13"
*/
function somarSemValidar(numero1: number, numero2: number) {
    return numero1 + numero2
}

if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(somarSemValidar(Number(input1.value), Number(input2.value)));
        }

    })

}

/** 
 * Na função abaixo uma validação é feita para confirmar se os itens são números e é feita uma conversão caso não sejam.
*/
function somarValidando(numero1: number, numero2: number) {
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        return +numero1 + +numero2;
    } else {
        return numero1 + numero2;
    }
}
if (button) {
    button.addEventListener('click', () => {
        console.log(somarValidando(Number(input1.value), Number(input2.value)));
    })

}