## Next.js starter

This is a [Next.js](https://nextjs.org/) project that uses [Prisma](https://www.prisma.io/) to connect to a [PlanetScale](https://planetscale.com/) database and [Tailwind CSS](https://tailwindcss.com/) for styling.

## Getting Started

Clone the repository.

```bash
git clone https://github.com/planetscale/nextjs-starter
```

Install dependencies.

```bash
npm install
```

## Set up the database

Create a PlanetScale database in the [dashboard](https://app.planetscale.com/) or by using the [CLI](https://planetscale.com/cli). Then, create a Connection string for your database by following the [documentation](https://docs.planetscale.com/concepts/connection-strings).

Copy the `.env.local.example` file as `.env.local` and update the `DATABASE_URL` property with the following format.

```text
mysql://<USERNAME>:<PLAIN_TEXT_PASSWORD>@<ACCESS_HOST_URL>/<DATABASE_NAME>?sslaccept=strict
```

Push the database schema to your PlanetScale database using Prisma.

`npx prisma db push`

Run the seed script to populate data.

`npx run seed`

## Run the App

Run the app.

`npm run dev`

Open your browser at [localhost:3000](localhost:3000) to see the running application.

## Deploying

Let's deploy this thing.

### Deploy on Vercel

Let's deploy to Vercel.

### Deploy on Netlify

Let's deploy to Netlify.

## Learn More

To learn more about PlanetScale, take a look at the following resources:

- [PlanetScale  quick start guide](https://docs.planetscale.com/tutorials/planetscale-quick-start-guide) - Learn how to get started with PlanetScale.
