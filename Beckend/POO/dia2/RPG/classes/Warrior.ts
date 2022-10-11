import Character from "../interfaces/character";

class Warrior implements Character {
  public ClassName: string = 'Warrior';
  constructor(
    name: string,
    level: number,
    hp: number,
    mana: number,) { 
    this.name = name;
    this.level = level;
    this.hp = hp;
    this.mana = mana;
  }
  name: string;
  level: number;
  hp: number;
  mana: number;

  public present(){
    console.log(this)
  }
}

export default Warrior;