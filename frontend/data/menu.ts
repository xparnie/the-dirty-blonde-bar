import type { menuDataProps } from "@/interfaces";

export const menuData: menuDataProps[] = [
   {
      title: "Appetizers",
      items: [
         {
            name: "French Fries",
            price: 6,
         },
         {
            name: "Tator Tots",
            price: 6,
         },
         {
            name: "Duck Wontons",
            price: 9.5,
         },
         {
            name: "Onion Rings",
            price: 6.75,
         },
         {
            name: "Jalapeño Poppers",
            price: 9.5,
         },
         {
            name: "Wings (6)",
            price: 10,
            description:
               "(Garlic Parmesan, Spicy Garlic, Sweet Mustard, Buffalo, Bourbon, BBQ, Plain)",
         },
         {
            name: "Mozzarella Sticks",
            price: 6.75,
         },
         {
            name: "Breaded Mushrooms",
            price: 6.75,
         },
         {
            name: "Cheese Curds",
            price: 6.75,
         },
         {
            name: "Tator Teezers",
            price: 7.25,
         },
      ],
   },
   {
      title: "Handmade Pizza",
      items: [
         {
            name: "Chicken Alfredo",
            price: 12.99,
         },
         {
            name: "Margarita",
            price: 12.99,
         },
         {
            name: "Pepperoni",
            price: 11.99,
         },
         {
            name: "Sausage",
            price: 11.99,
         },
         {
            name: "Sausage and Pepperoni",
            price: 12.99,
         },
         {
            name: "Cheese",
            price: 10.99
         },
         {
            name: "Garlic Cheese Pizza Sticks",
            price: 10.99,
            description: "with marinara sauce",
         },
      ],
   },
   {
      title: "Burgers",
      subtitle: "(with Fries or Tots)",
      items: [
         {
            name: "The Cowgirl",
            price: 10.5,
            description: "Bacon, Onion Rings, BBQ Sauce",
         },
         {
            name: "The Dirty Blonde",
            price: 10.5,
            description: "Egg, Cheese, Bacon",
         },
         {
            name: "The Spicy Blonde",
            price: 10.5,
            description: "Pepper Jack Cheese, Jalapeños",
         },
         {
            name: "Mushroom and Swiss",
            price: 10.5,
         },
         {
            name: "The Ditzy Blonde",
            price: 10.5,
            description: "Lettuce, Tomato, Cheese, Mayo",
         },
         {
            name: "Bacon Cheese",
            price: 10.5,
         },
         {
            name: "Hamburger",
            price: 7.5,
         },
         {
            name: "Hamburger w/ Cheese",
            price: 8.5,
         },
      ],
   },
   {
      title: "Basket Specials",
      items: [
         {
            name: "Chicken Strips w/ Fries",
            price: 9.5,
         },
         {
            name: "Drummie w/ Fries",
            price: 10.95,
         },
         {
            name: "Fish Fries",
            price: 9.5,
         },
      ],
   },
   {
      title: "Sandwiches",
      items: [
         {
            name: "BLT",
            price: 9.5,
            description: "Bacon, Lettuce, Tomato, Mayo on Texas Toast",
         },
         {
            name: "Chicken Sandwich",
            price: 10.5,
            description:
               "Bacon, Lettuce, Tomato, American and Swiss Cheese, Mayo on Texas Toast",
         },
         {
            name: "Fish",
            price: 7,
            description: "Tartar Sauce on a Bun",
         },
      ],
   },
   {
      title: "Kids Menu (10 & under)",
      items: [
         {
            name: "Hamburger w/ Fries",
            price: 6.5,
         },
         {
            name: "Grilled Cheese w/ Fries",
            price: 6.5,
         },
         {
            name: "Chicken Strips w/ Fries",
            price: 6.5,
         },
         {
            name: "Mini Corndogs w/ Fries",
            price: 6.5,
         },
      ],
   },
   {
      title: "Soup (Seasonal)",
      items: [
         {
            name: "Soup of the Day",
            price: 5,
         },
         {
            name: "Chili",
            price: 6,
         },
      ],
   },
   {
      title: "Beverages",
      items: [
         {
            name: "Energy Drink",
            price: 4,
         },
         {
            name: "Juice",
            price: 3,
         },
         {
            name: "Coffee",
            price: 3,
         },
         {
            name: "Fountain Pop",
            price: 3,
         },
      ],
   },
   {
      title: "Breakfast",
      subtitle: "Saturday and Sunday Morning 8-11",
      items: [
         {
            name: "Steak and Eggs",
            price: 16,
         },
         {
            name: "Two Eggs and Toast",
            price: 9,
            description: "with Choice of Sausage, Bacon, or Ham",
         },
         {
            name: "Two Pancakes and Eggs",
            price: 9,
            description: "with Choice of Sausage, Bacon, or Ham",
         },
         {
            name: "Two French Toast",
            price: 10,
            description: "with Choice of Sausage, Bacon, or Ham",
         },
         {
            name: "Ham and Cheese",
            price: 10,
         },
         {
            name: "Loaded Omelet w/ Toast",
            price: 12,
            description: "(Ham, Cheese, Mushroom, and Onion)",
         },
      ],
   },
];
