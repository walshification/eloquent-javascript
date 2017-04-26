describe('aVectorType', function() {
  describe('Vector', function() {
    var vector;

    beforeEach(function() {
      vector = new Vector(3, 4);
    });

    describe('constructor', function() {
      it('gives the vector x and y values', function() {
        expect([vector.x, vector.y]).toEqual([3, 4]);
      });

      it('defaults to (0, 0)', function() {
        var defaultVector = new Vector();
        expect([defaultVector.x, defaultVector.y]).toEqual([0, 0]);
      });
    });

    describe('plus', function() {
      it('adds a vector\'s coordinates to another\'s', function() {
        var vectorTwo = new Vector(1, 2);
        var addedVector = vector.plus(vectorTwo);
        expect([addedVector.x, addedVector.y]).toEqual([4, 6]);
      });
    });

    describe('minus', function() {
      it('subtracts a vector\'s coordinates from another\'s', function() {
        var vectorTwo = new Vector(1, 2);
        var addedVector = vector.minus(vectorTwo);
        expect([addedVector.x, addedVector.y]).toEqual([2, 2]);
      });
    });

    describe('length', function() {
      it('returns the distance the vector is from the origin', function() {
        expect(vector.length).toEqual(5);
      });
    });
  });
});
