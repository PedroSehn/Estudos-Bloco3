"use strict";
const nome = 'teste';
const numero = '2';
const UnknownToString = () => nome.split('');
const StringToNumber = () => numero / 2;
function StringToJSON(str) {
    const result = JSON.parse(str);
    return result;
}
function StringToJSON2(str, id) {
    const result = JSON.parse(str);
    result.id = id;
    return result;
}
const user = StringToJSON2('{"nome":"Teste", "idade":"3"}', 1);
console.log(user.id);
const user2 = StringToJSON2('{"nome":"Teste", "idade":"3"}', '#2');
console.log(user2.id);
