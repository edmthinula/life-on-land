export function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
  /*toFixed() has issues with rounding whith somenumbers with 5 at the end. So we have to round the priceCents first. Then it works*/
}

export default formatCurrency;
