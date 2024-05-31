import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    this._sqft = sqft;
    this._floors = floors;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }

  get sqft() {
    return this._sqft;
  }

  set floors(newFloors) {
    this._floors = newFloors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
