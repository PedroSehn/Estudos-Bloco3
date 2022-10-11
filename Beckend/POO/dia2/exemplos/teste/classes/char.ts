import Creature from "../interfaces/creature";
import Mage from './mage';

class Character extends Mage implements Creature {
  constructor(
    public name: string,
    public peso: number,
    public hp: number,
    public mana: number,
    public raça: string,
  ) { super() };
  
  public Heal(){
    let { hp, mana, name } = this;
    if(mana < 10) return console.log('Sem mana pra se helar');
    mana = mana -10
    hp = hp + 50;
    console.log(`${name} se curou, seu hp agora é ${hp}`);
    console.log(this);
  }
  
  public Present(){
    const {name, peso, hp, mana, raça} = this;
    console.log(`
    Meu nome é ${name}
    Meu peso e ${peso}
    Tenho ${hp} de vida
    Tenho ${mana} de mana
    Sou um ${raça}`)
  }

  public skill(){
    return this.ilusion(this.name);
  }
};

export default Character;