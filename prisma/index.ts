import { PrismaClient } from "@prisma/client";

// Create a variable to hold the Prisma Client instance
let prisma: PrismaClient;

declare global {
  namespace NodeJS {
    interface Global {
      prisma?: PrismaClient;  // Mark as optional
    }
  }
}

// Initialize the Prisma Client based on the environment
if (process.env.NODE_ENV === "production") {
  // In production, create a new Prisma Client instance
  prisma = new PrismaClient();
} else {
  // In development, use a global Prisma Client instance to avoid multiple instances
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
  }
  prisma = globalThis.prisma;
}

// Export the Prisma Client instance
export default prisma;
