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
            name: "Pickle Fries",
            price: 8.5,
         },
         {
            name: "Duck Wontons",
            price: 10,
         },
         {
            name: "Jalapeño Poppers",
            price: 10,
         },
         {
            name: "Wings (6)",
            price: 10,
            description: "(6 boneless or bone in)",
         },
         {
            name: "Mozzarella Sticks",
            price: 9,
         },
         {
            name: "Breaded Mushrooms",
            price: 9,
         },
         {
            name: "Cheese Curds",
            price: 9,
         },
         {
            name: "Tator Teezers",
            price: 9,
         },
         {
            name: "Mini Tacos",
            price: 8.5,
         },
         {
            name: "Sampler Platter",
            price: 14,
            description: "(Choose any 3 appetizers, exluding Duck Wontons!)",
         },
      ],
   },
   {
      title: "Burgers",
      subtitle: "(with Fries or Tots)",
      items: [
         {
            name: "The Cowgirl",
            price: 12,
            description: "Bacon, Onion Rings, BBQ Sauce",
         },
         {
            name: "The Dirty Blonde",
            price: 12,
            description: "Egg, Cheese, Bacon",
         },
         {
            name: "The Spicy Blonde",
            price: 12,
            description: "Pepper Jack Cheese, Jalapeños",
         },
         {
            name: "Mushroom and Swiss",
            price: 12,
         },
         {
            name: "The Ditzy Blonde",
            price: 12,
            description: "Lettuce, Tomato, Cheese, Mayo",
         },
         {
            name: "Bacon Cheese",
            price: 11,
         },
         {
            name: "Hamburger",
            price: 8,
         },
         {
            name: "Hamburger w/ Cheese",
            price: 8.5,
         },
         {
            name: "Bourbon Burger",
            price: 12,
            description: "Bacon, Swiss Cheese, Bourbon Sauce",
         },
      ],
   },
   {
      title: "Sandwiches",
      items: [
         {
            name: "BLT",
            price: 11,
            description: "Bacon, Lettuce, Tomato, Mayo on Texas Toast",
         },
         {
            name: "Chicken Sandwich",
            price: 13,
            description:
               "Bacon, Lettuce, Tomato, American and Swiss Cheese, Mayo on Texas Toast",
         },
         {
            name: "Grilled Ham & Cheese",
            price: 10,
         },
         {
            name: "Fish",
            price: 7,
            description: "Tartar Sauce on a Bun",
         },
         {
            name: "Crispy Chicken Bourbon",
            price: 13,
            description:
               "Jalapeños, Mozzarella Cheese, Bourbon Sauce on Texas Toast",
         },
         {
            name: "Chicken Ranch Wrap",
            price: 11,
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
            price: 6.5,
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
            name: "Two Eggs and Toast",
            price: 9,
            description: "with Choice of Sausage, Bacon, or Ham",
         },
         {
            name: "1 Jumbo Pancake and Eggs",
            price: 9,
            description: "with Choice of Sausage, Bacon, or Ham",
         },
         {
            name: "2 French Toast",
            price: 10,
            description: "with Choice of Sausage, Bacon, or Ham",
         },
         {
            name: "Country Fried Steak",
            price: 14,
            description: "Served with 2 Eggs and Toast",
         },
         {
            name: "Biscuits and Gravy",
            price: 9,
            description: "Serve with 2 Eggs",
         },
         {
            name: "Ham and Cheese Omelet w/ Toast",
            price: 10,
         },
         {
            name: "Loaded Omelet w/ Toast",
            price: 12,
            description: "(Ham, Cheese, Mushroom, and Onion)",
         },
         {
            name: "Meat Lovers Skillet",
            price: 13,
            description: "Ham, Sausage, Bacon, Cheese, and Hashbrowns",
         },
      ],
   },
];
