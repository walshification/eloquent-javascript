describe('flattening', function() {
  describe('flatten', function() {
    it('reduces an array of arrays to a single-level array', function() {
      expect(
        flatten(['foo', ['beep', 'boop'], 3, [[7]]])
      ).toEqual(
        ['foo', 'beep', 'boop', 3, 7]
      );
    });
  });
});
