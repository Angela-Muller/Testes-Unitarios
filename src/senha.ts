export function senhaForte(senha: string): boolean {
    if(senha.length < 8) {
        return false;
    }

    const Numero = /\d/.test(senha);
    if(!Numero) {
        return false;
    }
    return true;
}