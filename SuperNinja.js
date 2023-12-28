class Ninja {
    constructor(nombre, salud) {
      this.nombre = nombre;
      this.salud = salud;
      this.velocidad = 3;
      this.fuerza = 3;
    }
  
    sayName() {
      console.log('El nombre del nuevo ninja es ' + this.nombre);
    }
    showStats() {
      console.log(
        `Nombre: ${this.nombre}, Salud: ${this.salud},Velocidad:${this.velocidad},Fuerza:${this.fuerza}`
      );
    }
    drinkSake() {
      this.salud += 10;
    }
  }
  const ninja1 = new Ninja('Hasbulla', 10);
  
  class Sensei extends Ninja {
    constructor(nombre, salud, velocidad, fuerza) {
      super(nombre, salud, velocidad, fuerza);
      this.sabiduria = 10;
      this.salud = 200;
      this.velocidad = 10;
      this.fuerza = 10;
    }
    speakWisdom() {
      senseiOne.drinkSake();
      console.log(
        'Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.'
      );
    }
  }
  const senseiOne = new Sensei('Master Splinter');
  senseiOne.speakWisdom();
  senseiOne.showStats();
  