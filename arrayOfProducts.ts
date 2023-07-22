// export function arrayOfProducts(array: number[]) {
//   const productArray: number[] = [];
//   for (let i = 0; i < array.length; i++) {
//     let product = 1;
//     for (let j = 0; j < array.length; j++) {
//       if (i !== j) {
//         product *= array[j];
//       }
//     }
//     productArray.push(product);
//   }

//   return productArray;
// }

export function arrayOfProducts(array: number[]) {
  const leftProductArr = new Array(array.length).fill(0);
  const rigthProductArr = new Array(array.length).fill(0);
  const products = new Array(array.length).fill(0);

  let leftProduct = 1;
  for (let i = 0; i < array.length; i++) {
    leftProductArr[i] = leftProduct;
    leftProduct *= array[i];
  }

  let rigthProduct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    rigthProductArr[i] = rigthProduct;
    rigthProduct *= array[i];
  }

  for (let i = 0; i < array.length; i++) {
    products[i] = leftProductArr[i] * rigthProductArr[i];
  }

  return products;
}
