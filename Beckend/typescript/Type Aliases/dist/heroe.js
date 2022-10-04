"use strict";
class Heroe {
    constructor(name, powerName, hp) {
        this.name = name;
        this.powerName = powerName;
        this.hp = hp;
    }
    heal() {
        this.hp++;
        console.log(`Seu hp agora é ${this.hp}`);
    }
    apresentar() {
        console.log(`Olá, me chamo ${this.name}, meu poder é ${this.powerName} e tenho ${this.hp} de HP`);
    }
}
const EversonZoio = new Heroe('Everson Zoio', 'marretada', 100);
EversonZoio.apresentar();
EversonZoio.heal();
