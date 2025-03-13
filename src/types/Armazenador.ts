export class Armazenador {
  private constructor() { }

  static salvar(chave: string, valor: any): void {
    const valueToString = JSON.stringify(valor);
    localStorage.setItem(chave, valueToString);
  }

  static obter<T>(chave: string, reviver?: (this: any, key: string, value: any) => any): T | null {
    const valor = localStorage.getItem(chave);

    if (valor === null) {
      return null;
    }

    if (reviver) {
      return JSON.parse(valor, reviver) as T;
    }

    return JSON.parse(valor) as T;
  }
}