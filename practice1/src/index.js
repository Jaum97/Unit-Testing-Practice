if (
  orderTotal({
    items: [{ name: 'Dragon food', price: 8 }, { name: 'Dragon cage (small)', price: 800 }],
  }) !== 808
) {
  throw new Error('Check fail: Happy path (Example 1)');
}

if (
  orderTotal({
    items: [{ name: 'Dragon Collar', price: 20 }, { name: 'Dragon chew toy', price: 40 }],
  }) !== 60
) {
  throw new Error('Check fail: Happy path Example 2');
}

function orderTotal(order) {
  return order.items.reduce((prev, cur) => cur.price + prev, 0);
}
