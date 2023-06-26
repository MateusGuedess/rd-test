/**
 * Removes CS's from list that is away
 * @param {Array<{ id: number, score: number }>} cs
 * @param {number[]} customerSuccessAway
 * @return {Array<{ id: number, score: number }>} this return array without the customer succes that is away
 */

const removeCsAway = (cs, customerSuccessAway) =>
  cs.filter((csw) => !customerSuccessAway.includes(csw.id));

test("Remove the second index of css", () => {
  const css = [
    {
      id: 1,
      score: 33,
    },
    {
      id: 2,
      score: 38,
    },
    {
      id: 3,
      score: 43,
    },
  ];
  const customerSuccessAway = [3];
  const newCss = removeCsAway(css, customerSuccessAway);

  expect(newCss).toEqual([
    { id: 1, score: 33 },
    { id: 2, score: 38 },
  ]);
});

module.exports = removeCsAway;
