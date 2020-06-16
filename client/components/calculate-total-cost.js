export default function CalculateTotalCost(props) {
  const cartItems = props.cart;
  const costsArray = [];
  cartItems.map(price => {
    costsArray.push(price.price);
  });
  const totalCosts = costsArray.reduce((a, b) => a + b, 0);
  return totalCosts;
}
