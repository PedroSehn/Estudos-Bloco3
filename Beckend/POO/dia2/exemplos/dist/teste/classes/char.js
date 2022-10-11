"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mage_1 = __importDefault(require("./mage"));
class Character extends mage_1.default {
    constructor(name, peso, hp, mana, raça) {
        super();
        this.name = name;
        this.peso = peso;
        this.hp = hp;
        this.mana = mana;
        this.raça = raça;
    }
    ;
    Heal() {
        let { hp, mana, name } = this;
        if (mana < 10)
            return console.log('Sem mana pra se helar');
        mana = mana - 10;
        hp = hp + 50;
        console.log(`${name} se curou, seu hp agora é ${hp}`);
        console.log(this);
    }
    Present() {
        const { name, peso, hp, mana, raça } = this;
        console.log(`
    Meu nome é ${name}
    Meu peso e ${peso}
    Tenho ${hp} de vida
    Tenho ${mana} de mana
    Sou um ${raça}`);
    }
    skill() {
        return this.ilusion(this.name);
    }
}
;
exports.default = Character;
