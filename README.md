# Companion AI

This application is built using Next.js 13, React, Tailwind, Prisma, Stripe, PlanetScale, Upstash, Pinecone & Replicate API.

## Screenshots

![Companion AI - Login screen | haptichash](https://raw.githubusercontent.com/HapticHash/companion-ai/master/public/screenshots/login_screen.png)

![Companion AI - Main screen - Dark | haptichash](https://raw.githubusercontent.com/HapticHash/companion-ai/master/public/screenshots/main_screen_dark.png)

![Companion AI - Main screen - Light | haptichash](https://raw.githubusercontent.com/HapticHash/companion-ai/master/public/screenshots/main_screen_light.png)

![Companion AI - Create companion screen | haptichash](https://raw.githubusercontent.com/HapticHash/companion-ai/master/public/screenshots/create_companion_screen.png)

![Companion AI - Conversation screen | haptichash](https://raw.githubusercontent.com/HapticHash/companion-ai/master/public/screenshots/conv_screen.png)

![Companion AI - Upgrade modal screen | haptichash](https://raw.githubusercontent.com/HapticHash/companion-ai/master/public/screenshots/upgrade_modal.png)

## Features:

- Tailwind design, animations and effects (shadcn/ui)
- Full responsiveness
- Clerk Authentication (Email, Google, 9+ Social Logins)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Page loading state
- Stripe monthly subscription
- Free tier with API limiting
- Fetch data in server react components
- Handle relations between Server and Child components!
- Create new companion & ask them questions
- Redis DB with Upstash
- Pinecone: Vector Database for Vector Search
- PlanetScale MySQL DB
- [Hotpot](https://hotpot.ai/) AI Image for Companion

## Prerequisites

**Node version 18.x.x**

## Cloning the repository

```shell
git clone https://github.com/HapticHash/companion-ai.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

PINECONE_API_KEY=
PINECONE_ENVIRONMENT=
PINECONE_INDEX=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma db push

```

Seed categories:

```shell
node scripts/seed.ts
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
