describe('sumOfARange', function() {
  describe('range', function() {
    it('returns array of numbers from a given start to a given end', function() {
      expect(range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('counts by an optional step argument', function() {
      expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
    });

    it('counts down with a negative step', function() {
      expect(range(5, 1, -2)).toEqual([5, 3, 1]);
    });
  });

  describe('sum', function() {
    it('returns the total sum of a given array of numbers', function() {
      expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(45);
    });

    it('works with range', function() {
      expect(sum(range(1, 10))).toBe(55);
    });
  });
});
