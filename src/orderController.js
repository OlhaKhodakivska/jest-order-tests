function getOrder(req, res) {
  const { customerName } = req.body;

  if (!customerName) {
    return res.status(400).json({
      error: 'Customer name is required',
    });
  }

  return res.status(200).json({
    message: `Order for ${customerName}`,
  });
}

module.exports = {
  getOrder,
};
