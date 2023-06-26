/**
 * Function to group customer success by customer
 * @param {{id: number, score: number}[]} customers
 * @param {{id: number, score: number}[]} customerSuccess
 * @returns {{[key: string]: number}} Key is the customer succes ID and value is the total that this customer success attend
 */
function groupCSSByCs(customers, customerSuccess) {
  return customers.reduce((accumulator, current) => {
    const css = customerSuccess.find(({ score }) => current.score <= score);

    if (!css) return accumulator;

    accumulator[String(css.id)] = (accumulator[css.id] || 0) + 1;

    return accumulator;
  }, {});
}

module.exports = groupCSSByCs;

test("it should return a group of customers", () => {
  const customers = [
    {
      id: 1,
      score: 10,
    },
    {
      id: 2,
      score: 40,
    },
    {
      id: 3,
      score: 50,
    },
    {
      id: 4,
      score: 100,
    },
  ];

  const customerSuccess = [
    {
      id: 1,
      score: 10,
    },
    {
      id: 2,
      score: 20,
    },
    {
      id: 3,
      score: 30,
    },
    {
      id: 4,
      score: 100,
    },
  ];

  const group = groupCSSByCs(customers, customerSuccess);

  expect(group).toEqual({ 1: 1, 4: 3 });
});

test("it should return a group of customers", () => {
  const customers = [
    {
      id: 1,
      score: 10,
    },
    {
      id: 2,
      score: 40,
    },
    {
      id: 3,
      score: 50,
    },
    {
      id: 4,
      score: 70,
    },
    {
      id: 5,
      score: 30,
    },
    {
      id: 6,
      score: 101,
    },
  ];

  const customerSuccess = [
    {
      id: 1,
      score: 10,
    },
    {
      id: 2,
      score: 20,
    },
    {
      id: 3,
      score: 30,
    },
    {
      id: 4,
      score: 100,
    },
    {
      id: 5,
      score: 20,
    },
    {
      id: 6,
      score: 30,
    },
    {
      id: 7,
      score: 100,
    },
    {
      id: 8,
      score: 20,
    },
    {
      id: 9,
      score: 30,
    },
    {
      id: 10,
      score: 100,
    },
  ];

  const group = groupCSSByCs(customers, customerSuccess);

  expect(group).toEqual({
    1: 1,
    4: 5,
    3: 1,
    4: 3,
  });
});
