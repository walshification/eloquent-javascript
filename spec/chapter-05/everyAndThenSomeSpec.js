function lessThanThree(number) {
  return number < 3;
}

describe('everyAndThenSome', function() {
  describe('every', function() {
    it('returns true if the predicate finds every element true', function() {
      expect(every([1, 2, -56], lessThanThree)).toBe(true);
    });

    it('returns false if the predicate finds any element false', function() {
      expect(every([1, 3, -56], lessThanThree)).toBe(false);
    });
  });

  describe('some', function() {
    it('returns true if the predicate finds any element true', function() {
      expect(some([1, 3, -56], lessThanThree)).toBe(true);
    });

    it('returns false if the predicate finds all elements false', function() {
      expect(some([4, 3, 56], lessThanThree)).toBe(false);
    });
  });
});
