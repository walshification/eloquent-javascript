describe('recursion', function() {
  describe('isEven', function() {
    it('returns true for zero', function() {
      expect(isEven(0)).toBe(true);
    });

    it('returns false for one', function() {
      expect(isEven(1)).toBe(false);
    });

    it('returns true for multiples of two', function() {
      expect(isEven(4)).toBe(true);
    });

    it('returns false if number is not a multiple of two', function() {
      expect(isEven(5)).toBe(false);
    });

    it('understands negative numbers', function() {
      expect(isEven(-1)).toBe(false);
      expect(isEven(-2)).toBe(true);
    });
  });
});
