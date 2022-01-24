import { Prisma } from '@prisma/client'

//shirts
export const categories = [
    {
        name: "Hats",
        description: "Things you can wear on your head"
    },
    {
        name: "Socks",
        description: "Things you can wear on your feet"
    },
    {
        name: "Shirts",
        description: "Things you wear on the top half of your body"
    },
    {
        name: "Jackets",
        description: "Warmer things you wear on the top half of your body"
    },
    {
        name: "Suits",
        description: "Things you wear to cover your entire body"
    }
];

//
export const products = [
    {
        name: "Space Helmet",
        description: "You'll die without it.",
        price: new Prisma.Decimal(19.95),
        image: "/images/helmet.jpg",
        category_id: 1,
    },
    {
        name: "Astronaut Suit",
        description: "White Astronaut Flight Suit.",
        price: new Prisma.Decimal(32.95),
        image: "/images/astronaut-suit.jpg",
        category_id: 4,
    },
    {
        name: "Grey T-Shirt",
        description: "A grey t-shirt featuring a nice logo.",
        price: new Prisma.Decimal(22.95),
        image: "/images/shirt.jpg",
        category_id: 2,
    },
    {
        name: "Socks",
        description: "Blck socks with planets on then.",
        price: new Prisma.Decimal(12.95),
        image: "/images/socks.jpg",
        category_id: 2,
    },
    {
        name: "Sweatshirt",
        description: "Blck sweatshirt with logo on the front.",
        price: new Prisma.Decimal(12.95),
        image: "/images/sweatshirt.jpg",
        category_id: 3,
    }
]