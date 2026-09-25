jest.mock('../src/orderRepository');

const { findOrderById } = require('../src/orderRepository');
const { getOrderStatus } = require('../src/orderLookupService');

describe('getOrderStatus', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('повертає статус замовлення', async () => {
    findOrderById.mockResolvedValue({
      orderId: 'ORD-001',
      status: 'confirmed',
    });

    const result = await getOrderStatus('ORD-001');

    expect(result).toBe('confirmed');
    expect(findOrderById).toHaveBeenCalledWith('ORD-001');
  });

  test('повертає null, якщо замовлення не знайдено', async () => {
    findOrderById.mockResolvedValue(null);

    const result = await getOrderStatus('ORD-999');

    expect(result).toBeNull();
    expect(findOrderById).toHaveBeenCalledWith('ORD-999');
  });

  test('передає помилку Repository далі', async () => {
    findOrderById.mockRejectedValue(new Error('Database error'));

    await expect(
      getOrderStatus('ORD-001')
    ).rejects.toThrow('Database error');
  });
});
