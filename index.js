class Pokemon {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
  }
  learnAttackSkill = function (attackSkill) {
    return this.skills.push(attackSkill);
  };
  showStatus = function () {
    if (this.health > 0) {
      return `${this.name} current health  status:${this.health} current magic status:${this.magic}`;
    }
    return `${this.name} is already dead!`;
  };
  attack = function (index, pokemon) {
    if((this.magic >= this.skills[index].magic) && (this.health > 0)) 
        {
            this.magic -= this.skills[index].magic;
            pokemon.health -= this.skills[index].damage;

            return`${this.name} attacked ${pokemon.name} with skill ${this.skills[index].nameOfAttack} successfully!
            ${pokemon.name} got ${this.skills[index].damage} damage`;
        }
        else if(pokemon.health <= 0)
        {
           return`${pokemon.name} is killed!`;
        }
        else if(this.health <= 0)
        {
           return`${this.name} can't attack, he is already dead! 
           ${pokemon.name} has won this round`;
        } else if (this.magic < this.skills[0].magic) {
          return `You don't have enough magic`
        }
  getMagic = function () {
    let randomMagicAddition = Math.floor(Math.random() * 20);
    this.magic = this.magic + randomMagicAddition;
    return `${this.name} was add ${randomMagicAddition} amount of magic back`;
  };
}}
class AttackSkill {
  constructor(nameOfAttack, damage, magic) {
    this.nameOfAttack = nameOfAttack;
    this.damage = damage;
    this.magic = magic;
  }
}
// Creating pokemon 

let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);
// Creating skills
let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill("poison seed", 20, 20);
// Testing methods
pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);
//console.log(pikachu.attack(0, bulbasaur));
//console.log(bulbasaur.attack(0, pikachu));
//console.log(pikachu.showStatus());
//console.log(pikachu.getMagic());
bulbasaur.attack(0,pikachu)
console.log(pikachu.showStatus());
console.log(bulbasaur.showStatus());
// seeing whole pokemon objects
//console.log("pikachu :>> ", pikachu);
//console.log('bulbasaur :>> ', bulbasaur);
