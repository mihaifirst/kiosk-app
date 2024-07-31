let orderNumber = 0;
let maxOrderNumber = 150;

const getOrderNumber = () => {
  orderNumber++;
  if (orderNumber === maxOrderNumber) {
    orderNumber = 1;
  }
  if (orderNumber < 10) {
    return "00" + orderNumber;
  }
  if (orderNumber < 100) {
    return "0" + orderNumber;
  }
  return orderNumber.toString();
};

module.exports = { getOrderNumber };
