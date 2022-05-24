import Bowerman from '../Bowerman';
import Zombie from '../Zombie';
import Undead from '../Undead';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';

// Проверка создания класса
test('check Boweman', () => {
  expect(new Bowerman('Имя').printCharter()).toBe('health: 100, level: 1, Атака/защита: Bowman:25/25');
});
test('check Zombie', () => {
  expect(new Zombie('Имя').printCharter()).toBe('health: 100, level: 1, Атака/защита: Zombie:40/10');
});
test('check Undead', () => {
  expect(new Undead('Имя').printCharter()).toBe('health: 100, level: 1, Атака/защита: Undead:25/25');
});
test('check Swordsman', () => {
  expect(new Swordsman('Имя').printCharter()).toBe('health: 100, level: 1, Атака/защита: Swordsman:40/10');
});
test('check Magician', () => {
  expect(new Magician('Имя').printCharter()).toBe('health: 100, level: 1, Атака/защита: Magician:10/40');
});
test('check Daemon', () => {
  expect(new Daemon('Имя').printCharter()).toBe('health: 100, level: 1, Атака/защита: Daemon:10/40');
});
// Проверка на неправильный тип имени
test('check wrong type name', () => {
  expect(() => {
    const bowerman = new Bowerman('Имя');
    bowerman.checkName(11111212);
  }).toThrow();
});
// Проверка на неправильный тип персонажа
test('check wrong type class', () => {
  expect(() => {
    const bowerman = new Bowerman('Имя');
    bowerman.checkType('Тип');
  }).toThrow();
});
// Проверка на неверное кол-во символов в имени
test('to long name', () => {
  expect(() => {
    const bowerman = new Bowerman('Имя');
    bowerman.checkName('Оченьдлинноеимяперсонажа');
  }).toThrow();
});
test('to short name', () => {
  expect(() => {
    const bowerman = new Bowerman('Имя');
    bowerman.checkName('o');
  }).toThrow();
});
// Урона
test('test damage', () => {
  const bowerman = new Bowerman('Имя');
  bowerman.damage(15);
  expect(bowerman.health).toBe(88.75);
});
// Получение урона, не передан параметр
test('test damage wrong parameter', () => {
  expect(() => {
    const bowerman = new Bowerman('Имя');
    bowerman.damage();
  }).toThrow();
});
// Повышение уровня
test('test levelUp', () => {
  const bowerman = new Bowerman('Имя');
  bowerman.levelUp();
  expect(bowerman.level).toBe(2);
  expect(bowerman.attack).toBe(30);
  expect(bowerman.defence).toBe(30);
  expect(bowerman.health).toBe(100);
});
// Повышение уровня при здоровье = 0
test('test wrong levelUp', () => {
  expect(() => {
    const bowerman = new Bowerman('Имя');
    bowerman.health = 0;
    bowerman.levelUp();
  }).toThrow();
});