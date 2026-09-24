function calculateSubtotal(items) {
  return items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
}

function applyDiscount(subtotal, discountCode) {
  if (discountCode === 'SAVE10') {
    return subtotal * 0.9;
  }

  return subtotal;
}

function calculateShipping(subtotal) {
  if (subtotal >= 50) {
    return 0;
  }

  return 5;
}

function calculateTotal(items, discountCode) {
  const subtotal = calculateSubtotal(items);
  const discountedSubtotal = applyDiscount(subtotal, discountCode);
  const shipping = calculateShipping(discountedSubtotal);

  return discountedSubtotal + shipping;
}

module.exports = {
  calculateSubtotal,
  applyDiscount,
  calculateShipping,
  calculateTotal,
};
