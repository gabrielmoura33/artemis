-- CreateEnum
CREATE TYPE "EntryType" AS ENUM ('INCOME', 'OUTCOME');

-- CreateTable
CREATE TABLE "entries" (
    "id" TEXT NOT NULL,
    "type" "EntryType" NOT NULL,
    "firebaseOngId" TEXT NOT NULL,
    "description" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "entries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "entries_firebaseOngId_key" ON "entries"("firebaseOngId");
