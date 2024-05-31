export default class Car {
  constructor(brand = undefined, motor = undefined, color = undefined) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const Constructor = this.constructor[Symbol.species] || this.constructor;
    return new Constructor();
  }
}
