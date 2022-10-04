interface Trevas {
    evocar(): string;
}

interface Vilan extends Trevas {
    firstName: string;
    power: string;
    hp: number;
    dmg(): string; 
}

let Alek: Vilan = {
    firstName: 'Alek',
    power: 'Cingaro',
    hp: 50,
    dmg(): string {
        this.hp--
        return `Agora eu tenho ${this.hp} de hp`
    },
    evocar(): string {
        return `Oh meu deus, o vilão ${this.firstName} evocou o CAPETA!!`
    }
}

console.log(Alek.dmg());
console.log(Alek.evocar());