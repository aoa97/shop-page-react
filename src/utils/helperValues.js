import productsJson from "../assets/data/products.json";

export const filtersVals = {
  multiRange: ["All", "<= $10", "$10 - $100", "$100 - $500", ">=$500"],
  brands: [
    "All",
    ...Array.from(new Set(productsJson.products.map((p) => p.brand))),
  ],
  categories: [
    "All",
    ...Array.from(new Set(productsJson.products.map((p) => p.category))),
  ],
};

