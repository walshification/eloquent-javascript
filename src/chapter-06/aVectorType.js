function Vector(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

Object.defineProperty(Vector.prototype, 'plus', {
  value: function(other) {
    return new Vector(this.x + other.x, this.y + other.y);
  }
});

Object.defineProperty(Vector.prototype, 'minus', {
  value: function(other) {
    return new Vector(this.x - other.x, this.y - other.y);
  }
});

Object.defineProperty(Vector.prototype, 'length', {
  get: function length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
});
