async function findOrderById(orderId) {
  return {
    orderId,
    status: 'confirmed',
  };
}

module.exports = {
  findOrderById,
};
