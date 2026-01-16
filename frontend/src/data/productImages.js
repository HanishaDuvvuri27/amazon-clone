// src/data/productImages.js

import iphone1 from "../assets/products/iphone_1.jpg";
import iphone2 from "../assets/products/iphone_2.jpg";
import iphone3 from "../assets/products/iphone_3.jpg";

import shoes1 from "../assets/products/shoes_1.jpg";
import shoes2 from "../assets/products/shoes_2.jpg";
import shoes3 from "../assets/products/shoes_3.jpg";

import mixer1 from "../assets/products/mixer_1.jpg";
import mixer2 from "../assets/products/mixer_2.jpg";
import mixer3 from "../assets/products/mixer_3.jpg";

import headphones1 from "../assets/products/headphones_1.jpg";
import headphones2 from "../assets/products/headphones_2.jpg";
import headphones3 from "../assets/products/headphones_3.jpg";

import book1 from "../assets/products/book_1.jpg";
import book2 from "../assets/products/book_2.jpg";
import book3 from "../assets/products/book_3.jpg";

import chair1 from "../assets/products/chair_1.jpg";
import chair2 from "../assets/products/chair_2.jpg";
import chair3 from "../assets/products/chair_3.jpg";

import yoga1 from "../assets/products/yoga_1.jpg";
import yoga2 from "../assets/products/yoga_2.jpg";
import yoga3 from "../assets/products/yoga_3.jpg";

export const productImages = {
  1: [iphone1, iphone2, iphone3],
  2: [shoes1, shoes2, shoes3],
  3: [mixer1, mixer2, mixer3],
  4: [headphones1, headphones2, headphones3],
  5: [book1, book2, book3],
  6: [chair1, chair2, chair3],
  7: [yoga1, yoga2, yoga3],
  8: [iphone1, iphone2, iphone3],
  9: [shoes1, shoes2, shoes3],
  10: [mixer1, mixer2, mixer3],
  11: [headphones1, headphones2, headphones3],
  12: [book1, book2, book3],
  13: [chair1, chair2, chair3],
  14: [yoga1, yoga2, yoga3],
  15: [iphone1, iphone2, iphone3],
  16: [shoes1, shoes2, shoes3],
  17: [mixer1, mixer2, mixer3],
  18: [headphones1, headphones2, headphones3],
};

export const getProductImages = (id) => {
  return productImages[id] || [iphone1];
};
