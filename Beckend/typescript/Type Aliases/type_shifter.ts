const nome: unknown = 'teste';
const numero: string = '2';

const UnknownToString = () => (nome as string).split('')

const StringToNumber = () => (numero as unknown) as number/ 2

type Teste = {
    nome: string,
    idade: string
}

function StringToJSON<T>(str: string): T {
    const result = JSON.parse(str);
    return result
}

function StringToJSON2<T, U>(str: string, id: U): T & { id: U}{
    const result = JSON.parse(str);
    result.id = id;
    return result;
}
//    nome =    função     <tipo   <tipo  ('primeiro parametro', segundo parametro)
//                         param>, param> 
const user = StringToJSON2<Teste, number>('{"nome":"Teste", "idade":"3"}', 1);
console.log(user.id)
const user2 = StringToJSON2<Teste, string>('{"nome":"Teste", "idade":"3"}', '#2');
console.log(user2.id)

