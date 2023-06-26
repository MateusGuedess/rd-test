/**
 * Function to return sortedArray
 * @param {{id: number, score: number}[]} arr
 * @returns {{id: number, score: number}[]} this the sortedArray that functions return
 */
const sortArray = (arr) => arr.sort((a, b) => (a.score < b.score ? -1 : 1));

test("", () => {
  const css = [
    {
      id: 2,
      score: 38,
    },
    {
      id: 1,
      score: 33,
    },
    {
      id: 3,
      score: 43,
    },
  ];

  expect(sortArray(css)[1].id).toEqual(2);
});

module.exports = sortArray;
