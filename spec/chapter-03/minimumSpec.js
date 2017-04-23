describe('minimum', function() {
  describe('min', function() {
    it('returns the smaller number when given two', function() {
      expect(min(3, 4)).toBe(3);
    });

    it('works if the smaller number is the second argument', function() {
      expect(min(4, 3)).toBe(3);
    })

    it('returns the number when the numbers are the same', function() {
      expect(min(5, 5)).toBe(5);
    })
  });
});
