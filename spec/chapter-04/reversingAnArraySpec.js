describe('reversingAnArray', function() {
  describe('reverseArray', function() {
    it('reverses an array', function() {
      expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
    });

    it('preserves the original array', function() {
      var original = [1, 'string', 'foo'];
      var reversed = reverseArray(original);
      expect(original).toEqual([1, 'string', 'foo']);
      expect(reversed).toEqual(['foo', 'string', 1]);
    });
  });

  describe('reverseArrayInPlace', function() {
    it('reverses an array', function() {
      expect(reverseArrayInPlace([1, 2, 3])).toEqual([3, 2, 1]);
    });

    it('preserves the original array', function() {
      var original = [1, 'string', 'foo'];
      var reversed = reverseArrayInPlace(original);
      expect(reversed).toEqual(['foo', 'string', 1]);
      expect(original).toBe(reversed);
    });

    it('reverses the array in place', function() {
      var original = [1, 'string', 'foo'];
      reverseArrayInPlace(original);
      expect(original).toEqual(['foo', 'string', 1]);
    });
  });
});
