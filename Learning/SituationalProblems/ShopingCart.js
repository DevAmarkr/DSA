// Web sites like Vistaprint and Amazon have an online shopping cart that holds the customer's order.
// Your goal is to write a program that calculates the total price of the order in the cart.The catch is that the cart may contain coupons that affect the prices.

// Problem Statement: -

//   Write a program that, given the sequence of items in the shopping cart, computes their total price.Items in the order, including both products and coupons, must be considered in sequence.
// You are responsible only for:

//   1.Writing the class definitions for necessary components, such as "Cart", "Product", "Coupon".No UI, no input reading.
// 2.Write the method Cart.TotalPrice(), implemented in terms of your classes.

/*
== Example Cart #1 ==
1. Coupon: Take 10% off the next product in the cart 
2. $10 postcard sorter
3. $20 stationery organizer

The coupon is applied to the postcard sorter, and the cart total is $29.

== Example Cart #2 ==
1. $10 postcard sorter
2. Coupon: Take 10% off the next product in the cart
3. $20 stationery organizer

The cart total here is $28.

== Example Cart #3 ==
1. $10 book 1
2. Coupon: Take $2 off your 2nd book 2
3. Coupon: 25% off each individual item
4. Coupon: Take 10% off the next item in the cart
5. $10 postcard sorter
Total = ($10 * 75%) + (($10 - $2) * 75% * 90%) = $7.50 + $5.40 = $12.90

== Example Cart #4 ==
1. Take 10% off your next item
2. Coupon: Take $2 off on all items
3. $10 postcard sorter
4. $20 stationery organiser
Total = (10*0.9-2) + (20-2) = 25
*/


class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Coupon {
  constructor(couponType, value, targetProductIndex = null, targetProductType = null) {
    this.couponType = couponType;
    this.value = value;
    this.targetProductIndex = targetProductIndex;
    this.targetProductType = targetProductType;
  }
}

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  totalPrice() {
    let total = 0;
    let nextProductDiscount = 0;
    const productDiscounts = {};

    this.items.forEach(item => {
      if (item instanceof Product) {
        if (nextProductDiscount > 0) {
          total += item.price * (1 - nextProductDiscount);
          nextProductDiscount = 0;
        } else if (item.name in productDiscounts && productDiscounts[item.name] > 0) {
          total += item.price * (1 - productDiscounts[item.name]);
          productDiscounts[item.name] = 0;
        } else {
          total += item.price;
        }
      } else if (item instanceof Coupon) {
        if (item.couponType === "percentage_off_next") {
          nextProductDiscount = item.value / 100;
        } else if (item.couponType === "percentage_off_individual") {
          for (let productName in productDiscounts) {
            productDiscounts[productName] += item.value / 100;
          }
        } else if (item.couponType === "amount_off_nth_product") {
          const productName = item.targetProductType;
          if (!productDiscounts[productName]) {
            productDiscounts[productName] = 0;
          }
          productDiscounts[productName] += item.value / this.countProductOccurrences(productName);
        }
      }
    });

    return total.toFixed(2);
  }

  countProductOccurrences(productName) {
    let count = 0;
    this.items.forEach(item => {
      if (item instanceof Product && item.name === productName) {
        count++;
      }
    });
    return count;
  }
}

// Example usage:

// Create products
const postcardSorter = new Product("postcard sorter", 10);
const stationeryOrganizer = new Product("stationery organizer", 20);
const book1 = new Product("book 1", 10);
const book2 = new Product("book 2", 10);

// Create coupons
const coupon1 = new Coupon("percentage_off_next", 10);
const coupon2 = new Coupon("percentage_off_next", 10);
const coupon3 = new Coupon("amount_off_nth_product", 2, 2, "book 2");
const coupon4 = new Coupon("percentage_off_individual", 25);
const coupon5 = new Coupon("percentage_off_next", 10);

// Create a cart and add items and coupons
const cart = new Cart();
cart.addItem(coupon2);
cart.addItem(postcardSorter);
cart.addItem(stationeryOrganizer);
cart.addItem(book1);
cart.addItem(coupon3);
cart.addItem(coupon4);
cart.addItem(coupon5);

// Calculate total price
const totalPrice = cart.totalPrice();
console.log("Total price:", totalPrice);
