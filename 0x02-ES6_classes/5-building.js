export default class Building {
  constructor(sqft) {
    if (new.target !== Building
        && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }

  get sqft() {
    return this._sqft;
  }
}
