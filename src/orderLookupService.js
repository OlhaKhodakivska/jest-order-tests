const { findOrderById } = require('./orderRepository');

async function getOrderStatus(orderId) {
  const order = await findOrderById(orderId);

  if (!order) {
    return null;
  }

  return order.status;
}

module.exports = {
  getOrderStatus,
};
