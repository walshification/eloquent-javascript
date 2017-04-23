describe('beanCounting', function() {
  describe('countBs', function() {
    it('counts the number of capital Bs in a string', function() {
      expect(countBs('Baskin')).toBe(1);
    });

    it('finds multiple Bs', function() {
      expect(countBs('Bo Bo')).toBe(2);
    });

    it('ignores lowercase bs', function() {
      expect(countBs('Bilbo Baggins')).toBe(2);
    });
  });

  describe('countChar', function() {
    it('counts the occurrences of a given character in a given string', function() {
      expect(countChar('aardvark', 'a')).toBe(3);
    });

    it('ignores unspecified characters', function() {
      expect(countChar('aardvark', 'c')).toBe(0);
    });
  });
});
