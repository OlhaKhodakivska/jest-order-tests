const {
  calculateSubtotal,
  applyDiscount,
  calculateShipping,
  calculateTotal,
} = require('./orderUtils');

function createOrderSummary(order) {
  const subtotal = calculateSubtotal(order.items);
  const discountedSubtotal = applyDiscount(
    subtotal,
    order.discount
  );
  const shipping = calculateShipping(discountedSubtotal);
  const total = calculateTotal(order.items, order.discount);

  const itemCount = order.items.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  return {
    customerName: order.customerName,
    customerNumber: order.customerNumber,
    subtotal,
    discount: discountedSubtotal,
    shipping,
    total,
    itemCount,
  };
}

function fetchOrderStatus(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!orderId) {
        reject(new Error('Order ID is required'));
        return;
      }

      resolve({
        orderId,
        status: 'confirmed',
      });
    }, 10);
  });
}

module.exports = {
  createOrderSummary,
  fetchOrderStatus,
};
