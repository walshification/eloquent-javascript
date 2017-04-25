describe('historicalLifeExpectancy', function() {
  describe('averageAgePerCentury', function() {
    it('returns an average age per century in a registry', function() {
      var fakeAncestors = [{
        name: "Carolus Haverbeke",
        sex: "m",
        born: 1832,
        died: 1905,
        father: "Carel Haverbeke",
        mother: "Maria van Brussel",
      }, {
        name: "Emma de Milliano",
        sex: "f",
        born: 1876,
        died: 1956,
        father: "Petrus de Milliano",
        mother: "Sophia van Damme",
      }, {
        name: "Maria de Rycke",
        sex: "f",
        born: 1683,
        died: 1724,
        father: "Frederik de Rycke",
        mother: "Laurentia van Vlaenderen",
      }];

      var expectedAverages = {
        18: 41,
        20: 76.5,
      };

      expect(averageAgePerCentury(fakeAncestors)).toEqual(expectedAverages);
    });
  });

  describe('groupBy', function() {
    it('groups people in a registry by century of their death', function() {
      var fakeAncestors = [{
        name: "Carolus Haverbeke",
        sex: "m",
        born: 1832,
        died: 1905,
        father: "Carel Haverbeke",
        mother: "Maria van Brussel",
      }, {
        name: "Emma de Milliano",
        sex: "f",
        born: 1876,
        died: 1956,
        father: "Petrus de Milliano",
        mother: "Sophia van Damme",
      }, {
        name: "Maria de Rycke",
        sex: "f",
        born: 1683,
        died: 1724,
        father: "Frederik de Rycke",
        mother: "Laurentia van Vlaenderen",
      }];

      var expectedGroups = {
        18: [{
          name: "Maria de Rycke",
          sex: "f",
          born: 1683,
          died: 1724,
          father: "Frederik de Rycke",
          mother: "Laurentia van Vlaenderen",
        }],
        20: [{
          name: "Carolus Haverbeke",
          sex: "m",
          born: 1832,
          died: 1905,
          father: "Carel Haverbeke",
          mother: "Maria van Brussel",
        }, {
          name: "Emma de Milliano",
          sex: "f",
          born: 1876,
          died: 1956,
          father: "Petrus de Milliano",
          mother: "Sophia van Damme",
        }],
      };

      expect(groupBy(fakeAncestors)).toEqual(expectedGroups);
    });
  });

  describe('averageAge', function() {
    it('returns the average age of people in registry', function() {
      fakeAncestors = [{
        name: "Carolus Haverbeke",
        sex: "m",
        born: 1832,
        died: 1905,
        father: "Carel Haverbeke",
        mother: "Maria van Brussel",
      }, {
        name: "Emma de Milliano",
        sex: "f",
        born: 1876,
        died: 1956,
        father: "Petrus de Milliano",
        mother: "Sophia van Damme",
      }];

      expect(averageAge(fakeAncestors)).toBe(76.5);
    });
  });
});
