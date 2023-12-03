import statement from "./statement";
import invoices from "./invoices";
import plays from "./plays";

test("statement test", async () => {
  console.log("invoices", invoices);

  expect(statement(invoices, plays)).toBe(`Statement for BigCo
 Hamlet: $650.00 (55 seats)
 As You Like It: $580.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`);
});
