const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

names.forEach((name) => {
  console.log("Name: ", name);
});

names.forEach((name, index) => {
  const province = provinces[index];
  console.log("Name:", name, "(", province, ")");
});

const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log("Provinces:", uppercaseProvinces);

const nameCharacterCount = names.map((name) => name.length);
console.log("Name Character Count:", nameCharacterCount);

console.log("Alphabetical Provinces", provinces.toSorted());

const filteredProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);

const numberOfProvincesLeft = filteredProvinces.length;

console.log("Number of provinces left:", numberOfProvincesLeft);

const containsS = names.map((name) =>
  name.split("").some((char) => char === "S" || char === "s")
);

console.log("Contains 'S':", containsS);

const nameProvincePairs = names.map((name, index) => [name, provinces[index]]);

const nameProvinceObject = nameProvincePairs.reduce((obj, [name, province]) => {
  obj[name] = province;
  return obj;
}, {});

console.log(nameProvinceObject);

//Additional exercises

const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

products.forEach((product) => console.log(product.product));

const filteredProducts = products.filter(
  (product) => product.product.length <= 5
);

const combinedPrice = products
  .map((product) => ({ ...product, price: Number(product.price) }))
  .filter((product) => product.price)
  .reduce((total, product) => total + product.price, 0);

const concatenatedNames = products.reduce((names, product, index) => {
  return (
    names +
    (index < products.length - 1
      ? product.product + ", "
      : "and " + product.product + ".")
  );
}, "");

const highLowPrices = products
  .filter((product) => product.price)
  .reduce(
    (acc, product) => {
      const price = Number(product.price);
      if (price === acc.highestPrice) {
        acc.highest = product.product;
        acc.highestPrice = price;
      }
      if (price === acc.lowestPrice) {
        acc.lowest = product.product;
        acc.lowestPrice = price;
      }
      return acc;
    },
    { highest: "", highestPrice: 10, lowest: "", lowestPrice: 2 }
  );

const highLowString = `Highest: ${highLowPrices.highest}. Lowest: ${highLowPrices.lowest}.`;

const keyChanges = { product: "name", price: "cost" };

const reformattedProducts = products.map((product) => {
  return Object.entries(product).reduce((newProduct, [key, value]) => {
    const newKey = keyChanges[key] || key;
    newProduct[newKey] = value;
    return newProduct;
  }, {});
});

console.log({
  filteredProducts,
  combinedPrice,
  concatenatedNames,
  highLowString,
  reformattedProducts,
});
