export default class Character {
   constructor(name, type) {
     this.name = name;
     this.type = type;
     this.health = 100;
     this.level = 1;
     this.attack = 0;
     this.defence = 0;
     this.checkName(name);
   }
 
   checkName(name) {
     if (typeof name !== 'string') {
       throw new Error('Имя должно состоять из букв');
     } else if (typeof name === 'string' && (name.length < 2 || name.length > 10)) {
       throw new Error('Ошибка. В имени должно быть min - 2 символа, max - 10');
     } else {
       this.checkType(this.type);
     }
   }
 
   // eslint-disable-next-line class-methods-use-this
   checkType(type) {
     const accessType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
     const accessTypeCheck = accessType.indexOf(type);
     if (accessTypeCheck === -1) {
       throw new Error('Ошибка. Тип должен быть один из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
     }
   }
 
   printCharter() {
     // eslint-disable-next-line no-console
     return `health: ${this.health}, level: ${this.level}, Атака/защита: ${this.type}:${this.attack}/${this.defence}`;
   }
 
   levelUp() {
     if (this.health > 0) {
       this.level += 1;
       this.attack *= 1.2;
       this.defence *= 1.2;
       this.health = 100;
     } else {
       throw new Error('Нельзя повысить левел умершего');
     }
   }
 
   damage(points) {
     if (this.health >= 0 && points) {
       this.health -= points * (1 - this.defence / 100);
     } else {
       throw new Error('Не передан параметр');
     }
   }
 }