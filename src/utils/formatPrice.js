export function formatPrice(price) {
  let dollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return dollar.format(price);
}
