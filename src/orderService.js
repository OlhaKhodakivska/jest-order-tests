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

module.exports = {
  createOrderSummary,
};
