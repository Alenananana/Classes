export default class Character {
   constructor(name, type) {
     this.name = name;
     this.type = type;
     this.health = 100;
     this.level = 1;
     this.attack = undefined;
     this.defence = undefined;
     this.checkName(name);
   }
 
   constructor(name) {
		if(name.length>2 && name.length<10){
			this.name=name;
		} else {
			throw new Error('Длина имени должна быть не менее 2-ух и не более 10-ти символов');
		}

   checkType(type) {
     const accessType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
     const accessTypeCheck = accessType.indexOf(type);
     if (accessTypeCheck === -1) {
       throw new Error('Ошибка. Тип должен быть один из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
     }
   }
 
   printCharter() {
     return `health: ${this.health}, level: ${this.level}, Атака/защита: ${this.type}:${this.attack}/${this.defence}`;
   }
 
   levelUp() {
     if (this.health > 0) {
       this.level += 1;
       this.attack *= 1.2;
       this.defence *= 1.2;
       this.health = 100;
     } else {
       throw new Error('Нельзя повысить уровень умершего');
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