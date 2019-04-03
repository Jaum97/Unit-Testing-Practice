const orderTotal = (order) => {
  const totalNormalItems = order.items
    .filter(x => !x.shipping)
    .reduce((prev, cur) => prev + cur.quantity * cur.price, 0);

  const shippingItem = order.items.find(x => !!x.shipping);
  const shipping = totalNormalItems > 1000 ? 0 : shippingItem.price;
  return totalNormalItems + shipping;
};

if (
  orderTotal({
    items: [
      { name: 'Dragon food', price: 8 },
      { name: 'Dragon cage (small)', price: 800 },
      { shipping: true, price: 40 },
    ],
  }) !== 848
) {
  throw new Error('Check fail: Happy path');
}
