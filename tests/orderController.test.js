const { getOrder } = require('../src/orderController');

function createMockResponse() {
  const res = {};

  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);

  return res;
}

describe('getOrder Controller', () => {
  test('повертає замовлення для правильного customerName', () => {
    const req = {
      body: {
        customerName: 'Anna Weber',
      },
    };

    const res = createMockResponse();

    getOrder(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Order for Anna Weber',
    });
  });

  test('повертає помилку, якщо customerName відсутній', () => {
    const req = {
      body: {},
    };

    const res = createMockResponse();

    getOrder(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Customer name is required',
    });
  });
});
