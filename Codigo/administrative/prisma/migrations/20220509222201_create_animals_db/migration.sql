/*
  Warnings:

  - You are about to drop the `Ong` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `adress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `client` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `available_for_adoption` to the `animals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `animals` table without a default value. This is not possible if the table is not empty.
  - Made the column `gender` on table `animals` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Ong" DROP CONSTRAINT "Ong_adressId_fkey";

-- AlterTable
ALTER TABLE "animals" ADD COLUMN     "available_for_adoption" BOOLEAN NOT NULL,
ADD COLUMN     "clientId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "gender" SET NOT NULL,
ALTER COLUMN "gender" SET DEFAULT E'U';

-- DropTable
DROP TABLE "Ong";

-- DropTable
DROP TABLE "adress";

-- DropTable
DROP TABLE "client";

-- CreateTable
CREATE TABLE "adresses" (
    "id" TEXT NOT NULL,
    "city" TEXT,
    "region" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "adresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ongs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "firebaseId" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "adressId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ongs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "age" INTEGER,
    "cpf" TEXT,
    "gender" "Gender" NOT NULL DEFAULT E'U',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "firebaseId" TEXT,
    "firebaseOngId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "cpf" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ongs_firebaseId_key" ON "ongs"("firebaseId");

-- CreateIndex
CREATE UNIQUE INDEX "users_firebaseId_key" ON "users"("firebaseId");

-- CreateIndex
CREATE UNIQUE INDEX "users_firebaseOngId_key" ON "users"("firebaseOngId");

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ongs" ADD CONSTRAINT "ongs_adressId_fkey" FOREIGN KEY ("adressId") REFERENCES "adresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
