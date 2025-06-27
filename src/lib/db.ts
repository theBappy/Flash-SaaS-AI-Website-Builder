import { PrismaClient } from "@/generated/prisma"

const globalForPrisma = global as unknown as { 
    prisma: PrismaClient
}

export const prisma = globalForPrisma.prisma || new PrismaClient()  // for next js hot reload, so store prisma is in global which is not effected by window object's hot reload

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

