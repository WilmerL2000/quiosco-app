export const formatMoney = (mount) => {
  return mount.toLocaleString("en-US", { style: "currency", currency: "USD" });
};
