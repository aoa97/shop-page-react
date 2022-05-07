export const filterSidebar = (products, filters, setTotalProducts) => {
  return products.filter((item) =>
    Object.entries(filters).every(([key, value]) => {
      if (key === "priceMulti") {
        switch (value) {
          case "All":
            return true;
          case "<= $10":
            return item.price <= 10;
          case "$10 - $100":
            return item.price > 10 && item.price <= 100;
          case "$100 - $500":
            return item.price > 100 && item.price < 500;
          case ">=$500":
            return item.price >= 500;
        }
      }

      if (key === "min") {
        return item.price >= value;
      }

      if (key === "max") {
        return item.price < value;
      }

      if (key === "search") {
        return item.name.toLowerCase().includes(value.toLowerCase());
      }

      if (value === "All") {
        delete key[value];
        return true;
      }

      return item[key] === value;
    })
  );
};
