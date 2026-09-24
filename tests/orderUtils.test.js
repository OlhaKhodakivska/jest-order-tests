const {
  calculateSubtotal,
  applyDiscount,
  calculateShipping,
  calculateTotal,
} = require('../src/orderUtils');

describe('calculateSubtotal', () => {
  test('berechnet die Summe mehrerer Artikel', () => {
    const items = [
      { name: 'Keyboard', price: 20, quantity: 2 },
      { name: 'Mouse', price: 10, quantity: 1 },
    ];

    expect(calculateSubtotal(items)).toBe(50);
  });

  test('gibt bei einem leeren Array 0 zurück', () => {
    expect(calculateSubtotal([])).toBe(0);
  });

  test('berücksichtigt die Menge eines Artikels', () => {
    const items = [
      { name: 'Monitor', price: 100, quantity: 3 },
    ];

    expect(calculateSubtotal(items)).toBe(300);
  });
});

describe('applyDiscount', () => {
  test('wendet SAVE10 korrekt an', () => {
    expect(applyDiscount(100, 'SAVE10')).toBe(90);
  });

  test('ignoriert einen ungültigen Rabattcode', () => {
    expect(applyDiscount(100, 'INVALID')).toBe(100);
  });

  test('gibt den ursprünglichen Betrag ohne Rabattcode zurück', () => {
    expect(applyDiscount(100)).toBe(100);
  });
});
describe('calculateShipping', () => {
  test('ist ab 50 Euro kostenlos', () => {
    expect(calculateShipping(50)).toBe(0);
  });

  test('kostet unter 50 Euro 5 Euro', () => {
    expect(calculateShipping(49.99)).toBe(5);
  });

  test('ist bei genau 50 Euro kostenlos', () => {
    expect(calculateShipping(50)).toBe(0);
  });
});

describe('calculateTotal', () => {
  test('berechnet den Gesamtbetrag ohne Rabatt', () => {
    const items = [
      { name: 'Keyboard', price: 20, quantity: 2 },
      { name: 'Mouse', price: 10, quantity: 1 },
    ];

    expect(calculateTotal(items)).toBe(50);
  });

  test('berechnet den Gesamtbetrag mit SAVE10', () => {
    const items = [
      { name: 'Keyboard', price: 50, quantity: 2 },
    ];

    expect(calculateTotal(items, 'SAVE10')).toBe(90);
  });

  test('quantity 0 ergibt keinen zusätzlichen Betrag', () => {
    const items = [
      { name: 'Mouse', price: 10, quantity: 0 },
    ];

    expect(calculateSubtotal(items)).toBe(0);
  });
});
