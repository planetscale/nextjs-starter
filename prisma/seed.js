const { PrismaClient } = require('@prisma/client');
const { categories, products, users, companies } = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
  try {
    // NOTE: We are deleteing all the records first
    await prisma.company.deleteMany();
    console.log("Deleted records in company table");

    await prisma.user.deleteMany();
    console.log("Deleted records in Users table")

    await prisma.category.deleteMany();
    console.log('Deleted records in category table');

    await prisma.product.deleteMany();
    console.log('Deleted records in product table');


    // NOTE: Reset auto increment of ids to 1

    await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`;
    console.log('reset product auto increment to 1');

    await prisma.$queryRaw`ALTER TABLE Category AUTO_INCREMENT = 1`;
    console.log('reset category auto increment to 1');

    await prisma.$queryRaw`ALTER TABLE Company AUTO_INCREMENT = 1`;
    console.log('reset company auto increment to 1');

    await prisma.$queryRaw`ALTER TABLE User AUTO_INCREMENT = 1`;
    console.log('reset user auto increment to 1');

    // NOTE: Populating our database

    await prisma.company.createMany({
      data: companies
    })

    console.log("Added companies data")

    await prisma.user.createMany({
      data: await users()
    })

    console.log("Added users data")

    await prisma.category.createMany({
      data: categories,
    });
    console.log('Added category data');

    await prisma.product.createMany({
      data: products,
    });
    console.log('Added product data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
