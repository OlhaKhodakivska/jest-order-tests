const { createOrderSummary } = require('../src/orderService');

describe('Order Service Integration Test', () => {
  test('erstellt eine korrekte Bestellübersicht ohne Rabatt', () => {
    const order = {
      customerName: 'Anna Weber',
      customerNumber: 'C001',
      items: [
        { name: 'Keyboard', price: 20, quantity: 2 },
        { name: 'Mouse', price: 10, quantity: 1 },
      ],
    };

    const result = createOrderSummary(order);

    expect(result).toEqual({
      customerName: 'Anna Weber',
      customerNumber: 'C001',
      subtotal: 50,
      discount: 50,
      shipping: 0,
      total: 50,
      itemCount: 3,
    });
  });

  test('integriert Rabatt und Versandkosten korrekt', () => {
    const order = {
      customerName: 'Ben Koch',
      customerNumber: 'C002',
      discount: 'SAVE10',
      items: [
        { name: 'Mouse', price: 20, quantity: 1 },
      ],
    };

    const result = createOrderSummary(order);

    expect(result).toEqual({
      customerName: 'Ben Koch',
      customerNumber: 'C002',
      subtotal: 20,
      discount: 18,
      shipping: 5,
      total: 23,
      itemCount: 1,
    });
  });
});
