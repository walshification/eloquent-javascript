describe('motherChildAgeDifference', function() {
  describe('averageAgeDifference', function() {
    it('returns average difference between mothers and their children', function() {
      var fakeAncestors = [{
          name: 'Mom',
          mother: 'Berta',
          born: 1980,
        }, {
          name: 'Mark',
          mother: 'Mom',
          born: 2000,
        }, {
          name: 'Bobbette',
          mother: 'Robba',
          born: 1952,
        }, {
          name: 'Bob Doobis',
          mother: 'Bobbette',
          born: 1982,
        }];

      var fakeRegistry = {
        'Mom': {
          name: 'Mom',
          mother: 'Berta',
          born: 1980,
        },
        'Mark': {
          name: 'Mark',
          mother: 'Mom',
          born: 2000,
        },
        'Bobbette': {
          name: 'Bobbette',
          mother: 'Robba',
          born: 1952,
        },
        'Bob Doobis': {
          name: 'Bob Doobis',
          mother: 'Bobbette',
          born: 1982,
        },
      };

      expect(averageAgeDifference(fakeAncestors, fakeRegistry)).toBe(25);
    });
  });
});
