const invoices = () => {
  return {
    customer: "BigCo",
    performances: [
      {
        audience: 55,
        playID: "hamlet",
      },
      {
        audience: 35,
        playID: "as-like",
      },
      {
        audience: 40,
        playID: "othello",
      },
    ],
  };
};
module.exports = invoices;
