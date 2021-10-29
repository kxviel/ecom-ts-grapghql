import { ProductType } from "../interfaces/Products";

export const ProductList: ProductType = [
  {
    name: "Checkered Shirt",
    slug: "01A",
    category: "Shirts",
    image: "/items/shirt1.jpg",
    isFeatured: true,
    price: 70,
    brand: "Nike",
    rating: 4.5,
    numReviews: 10,
    countInStock: 20,
    description: "A popular shirt",
  },
  {
    name: "Fit Shirt",
    slug: "02B",
    category: "Shirts",
    image: "/items/shirt2.jpg",
    isFeatured: true,
    price: 80,
    brand: "Adidas",
    rating: 4.2,
    numReviews: 10,
    countInStock: 20,
    description: "A popular shirt",
  },
  {
    name: "Slim Shirt",
    slug: "03C",
    category: "Shirts",
    image: "/items/shirt3.jpg",
    price: 90,
    isFeatured: false,
    brand: "Raymond",
    rating: 3,
    numReviews: 10,
    countInStock: 20,
    description: "A popular shirt",
  },
  {
    name: "Golf Pants",
    slug: "04D",
    category: "Pants",
    image: "/items/pants1.jpg",
    price: 90,
    brand: "Oliver",
    rating: 2,
    numReviews: 10,
    countInStock: 20,
    isFeatured: false,
    description: "Smart looking pants",
  },
  {
    name: "Fit Pants",
    slug: "05E",
    category: "Pants",
    isFeatured: false,
    image: "/items/pants2.jpg",
    price: 95,
    brand: "Zara",
    rating: 4.5,
    numReviews: 10,
    countInStock: 20,
    description: "A popular pants",
  },
  {
    name: "Classic Pants",
    slug: "06F",
    category: "Pants",
    isFeatured: false,
    image: "/items/pants3.jpg",
    price: 75,
    brand: "Casely",
    rating: 1.5,
    numReviews: 10,
    countInStock: 20,
    description: "A popular pants",
  },
];
