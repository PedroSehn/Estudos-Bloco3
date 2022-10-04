const nome: unknown = 'teste';
const numero: string = '2';

const UnknownToString = () => (nome as string).split('')

const StringToNumber = () => (numero as unknown) as number/ 2


function StringToJSON<T>(str: string): T {
    const result = JSON.parse(str);
    return result
}