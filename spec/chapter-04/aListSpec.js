describe('aList', function() {
  describe('arrayToList', function() {
    it('converts a given array to a linked list', function() {
      var expectedList = {
        value: 1,
        rest: {
          value: 'foo',
          rest: {
            value: 'bar',
            rest: null,
          },
        },
      };
      expect(arrayToList([1, 'foo', 'bar'])).toEqual(expectedList);
    });
  });

  describe('listToArray', function() {
    it('converts a given list to an array', function() {
      converted = listToArray({
        value: 1,
        rest: {
          value: 'foo',
          rest: {
            value: 'bar',
            rest: null,
          },
        },
      });
      expect(converted).toEqual([1, 'foo', 'bar']);
    });
  });
});
