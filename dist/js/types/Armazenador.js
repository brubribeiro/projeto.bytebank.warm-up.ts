export class Armazenador {
    constructor() { }
    static salvar(chave, valor) {
        const valueToString = JSON.stringify(valor);
        localStorage.setItem(chave, valueToString);
    }
    static obter(chave, reviver) {
        const valor = localStorage.getItem(chave);
        if (valor === null) {
            return null;
        }
        if (reviver) {
            return JSON.parse(valor, reviver);
        }
        return JSON.parse(valor);
    }
}
