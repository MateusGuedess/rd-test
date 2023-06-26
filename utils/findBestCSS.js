/**
 * Function that return the CSS with more customers
 * @param {{[key: string]: number}} customerBySuccess
 * @returns {[string, number][]}
 */
function findBestCSS(customerBySuccess) {
  const css = Object.entries(customerBySuccess);

  const bestCSS = Math.max(...css.map(([_, count]) => count));

  return css.filter(([_, count]) => count === bestCSS);
}

module.exports = findBestCSS;

test("it should return an Array with 4,3 as the Best Customer Success", () => {
  const customerBySuccess = { 1: 1, 4: 3 };

  const bestCSS = findBestCSS(customerBySuccess);

  expect(bestCSS).toEqual([["4", 3]]);
});
