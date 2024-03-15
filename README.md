![event](public/assets/images/event.png)
The website allows users to play two roles: **event creators** and **ticket buyers**:

- **Event creators** can create, delete, and update events.
- **Ticket buyers** can view information and purchase tickets to attend those events.

# Features

## Authentication (CRUD) with Clerk

- User management through Clerk, ensuring secure and efficient authentication.

## Events (CRUD)

- providing essential details such as title, date, location, and any additional information.

### Create Events

### Read Events

### Update Events

### Delete Events

## Related Events

- Smartly connects events that are related and displaying on the event details page, making it more engaging for users.

## Search & Filter

- Empowering users with a robust search and filter system, enabling them to easily find the events that match their preferences.

## New Category

- Dynamic categorization allows for the seamless addition of new event categories, keeping your platform adaptable.

## Event Orders

- Comprehensive order management system, providing a clear overview of all event-related transactions.

## Search Orders

- Quick and efficient search functionality for orders.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Tech Stack

- Node.js
- Next.js
- TypeScript
- TailwindCSS
- Zod
- React Hook Form
- Shadcn
- Uploadthing

# Getting Started

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Vinhnv0901/Evently.git
cd your-project
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SERVER_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#MONGODB
MONGODB_URI=

#UPLOADTHING
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Replace the placeholder values with your actual credentials

**Running the Project**

```bash
npm start
```
