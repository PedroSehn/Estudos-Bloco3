"use strict";
let Alek = {
    firstName: 'Alek',
    power: 'Cingaro',
    hp: 50,
    dmg() {
        this.hp--;
        return `Agora eu tenho ${this.hp} de hp`;
    },
    evocar() {
        return `Oh meu deus, o vilão ${this.firstName} evocou o CAPETA!!`;
    }
};
console.log(Alek.dmg());
console.log(Alek.evocar());
