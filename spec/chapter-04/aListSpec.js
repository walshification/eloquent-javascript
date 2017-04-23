describe('aList', function() {
  describe('arrayToList', function() {
    it('converts a given array to a linked list', function() {
      var expectedList = {
        value: 1,
        next: {
          value: 'foo',
          next: {
            value: 'bar',
            next: null,
          },
        },
      };
      expect(arrayToList([1, 'foo', 'bar'])).toEqual(expectedList);
    });
  });
});
