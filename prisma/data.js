const { Prisma } = require('@prisma/client');

const {getHashedPassword} = require("../lib/bcrypt")

const password = process.env.PASSWORD

const categories = [
  {
    name: 'Hats',
    description: 'Things you can wear on your head',
  },
  {
    name: 'Socks',
    description: 'Things you can wear on your feet',
  },
  {
    name: 'Shirts',
    description: 'Things you wear on the top half of your body',
  },
];

const companies = [
  { "name": "CloudHaven Technologies" },
  { "name": "SkyBridge Networks" },
  { "name": "GreenBloom Energy" },
  { "name": "InnoGear Robotics" },
  { "name": "DeepMind Analytics" }
]

const users = async () =>  ([
  {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    password: await(getHashedPassword(password)),
    role: "USER",
    companyId: 1
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "janesmith@example.com",
    password: await(getHashedPassword(password)),
    role: "ADMIN",
    companyId: 1
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    email: "bobjohnson@example.com",
    password: await(getHashedPassword(password)),
    role: "USER",
    companyId: 2
  },
  {
    firstName: "Alice",
    lastName: "Williams",
    email: "alicewilliams@example.com",
    password: await(getHashedPassword(password)),
    role: "ADMIN",
    companyId: 2
  },
  {
    firstName: "David",
    lastName: "Miller",
    email: "davidmiller@example.com",
    password: await(getHashedPassword(password)),
    role: "ADMIN",
    companyId: 3
  },
  {
    firstName: "Emily",
    lastName: "Garcia",
    email: "emilygarcia@example.com",
    password: await(getHashedPassword(password)),
    role: "USER",
    companyId: 3
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    email: "michaelbrown@example.com",
    password: await(getHashedPassword(password)),
    role: "USER",
    companyId: 4
  },
  {
    firstName: "Jessica",
    lastName: "Davis",
    email: "jessicadavis@example.com",
    password: await(getHashedPassword(password)),
    role: "ADMIN",
    companyId: 4
  },
  {
    firstName: "Charles",
    lastName: "Rodriguez",
    email: "charlesrodriguez@example.com",
    password: await(getHashedPassword(password)),
    role: "USER",
    companyId: 5
  },
  {
    firstName: "Margaret",
    lastName: "Wilson",
    email: "margaretwilson@example.com",
    password: await(getHashedPassword(password)),
    role: "ADMIN",
    companyId: 5
  }
])


const products = [
  {
    name: 'Cool helmet.',
    description: 'A nice helmet to wear on your head',
    price: new Prisma.Decimal(19.95),
    image: '/images/helmet.jpg',
    category_id: 1,
    company_id: 1,
  },
  {
    name: 'Grey T-Shirt',
    description: 'A nice shirt that you can wear on your body',
    price: new Prisma.Decimal(22.95),
    image: '/images/shirt.jpg',
    category_id: 3,
    company_id: 1,
  },
  {
    name: 'Socks',
    description: 'Cool socks that you can wear on your feet',
    price: new Prisma.Decimal(12.95),
    image: '/images/socks.jpg',
    category_id: 2,
    company_id: 1,
  },
  {
    name: 'Sweatshirt',
    description: 'Cool sweatshirt that you can wear on your body',
    price: new Prisma.Decimal(12.95),
    image: '/images/sweatshirt.jpg',
    category_id: 3,
    company_id: 1,
  },
];

module.exports = {
  products,
  categories,
  companies,
  users,
};
