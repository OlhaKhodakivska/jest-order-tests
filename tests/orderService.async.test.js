const { fetchOrderStatus } = require('../src/orderService');

describe('fetchOrderStatus', () => {
  test('gibt den bestätigten Bestellstatus zurück', async () => {
    const result = await fetchOrderStatus('ORD-001');

    expect(result).toEqual({
      orderId: 'ORD-001',
      status: 'confirmed',
    });
  });

  test('wirft einen Fehler ohne Order ID', async () => {
    await expect(fetchOrderStatus()).rejects.toThrow(
      'Order ID is required'
    );
  });
});
