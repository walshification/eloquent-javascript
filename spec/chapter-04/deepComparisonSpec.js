describe('deepComparison', function() {
  describe('deepEqual', function() {
    describe('with objects', function() {
      it('compares two objects for equality', function() {
        expect(deepEqual({ foo: 'bar' }, { foo: 'bar' })).toBe(true);
      });

      it('recognizes when objects are not equal by value', function() {
        expect(deepEqual({ foo: 'bar' }, { foo: 'baz' })).toBe(false);
      });

      it('recognizes when objects are not equal by property', function() {
        expect(deepEqual({ foo: 'bar' }, { baz: 'bar' })).toBe(false);
      });

      it('does not choke on null', function() {
        expect(deepEqual({ foo: 'bar' }, null)).toBe(false);
      });
    });

    describe('with values', function() {
      it('compares two values for equality', function() {
        expect(deepEqual(3, 3)).toBe(true);
      });

      it('recognizes when values are not equal', function() {
        expect(deepEqual(3, 4)).toBe(false);
      });

      it('does not choke on null', function() {
        expect(deepEqual(3, null)).toBe(false);
      });
    });
  });
});
