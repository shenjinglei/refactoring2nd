const statement = require("./statement");
const invoices = require("./invoices");
const plays = require("./plays");

it("statement test", () => {
  //   const invoices = JSON.parse(`
  //         {
  //           "customer": "BigCo",
  //           "performances": [
  //             {
  //               "audience": 55,
  //               "playID": "hamlet"
  //             },
  //             {
  //               "audience": 35,
  //               "playID": "as-like"
  //             },
  //             {
  //               "audience": 40,
  //               "playID": "othello"
  //             }
  //           ]
  //         }
  //       `);
  //   const plays = JSON.parse(`{
  //         "as-like": {
  //           "name": "As You Like It",
  //           "type": "comedy"
  //         },
  //         "hamlet": {
  //           "name": "Hamlet",
  //           "type": "tragedy"
  //         },
  //         "othello": {
  //           "name": "Othello",
  //           "type": "tragedy"
  //         }
  //       }`);

  console.log("invoices", invoices());
  expect(statement(invoices(), plays())).toBe(`Statement for BigCo
 Hamlet: $650.00 (55 seats)
 As You Like It: $580.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`);
});
