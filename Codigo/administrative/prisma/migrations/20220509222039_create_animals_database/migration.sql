/*
  Warnings:

  - You are about to drop the `donations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `donators` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('M', 'F', 'U');

-- DropForeignKey
ALTER TABLE "donations" DROP CONSTRAINT "donations_donatorsId_fkey";

-- DropTable
DROP TABLE "donations";

-- DropTable
DROP TABLE "donators";

-- DropEnum
DROP TYPE "DonatorGender";

-- DropEnum
DROP TYPE "Status";

-- CreateTable
CREATE TABLE "animals" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "breed" TEXT,
    "gender" "Gender",
    "birth_date" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "comments" TEXT NOT NULL,

    CONSTRAINT "animals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client" (
    "id" TEXT NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adress" (
    "id" TEXT NOT NULL,
    "city" TEXT,
    "region" TEXT,

    CONSTRAINT "adress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ong" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "firebaseId" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "adressId" TEXT NOT NULL,

    CONSTRAINT "Ong_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "animals_name_key" ON "animals"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Ong_firebaseId_key" ON "Ong"("firebaseId");

-- AddForeignKey
ALTER TABLE "Ong" ADD CONSTRAINT "Ong_adressId_fkey" FOREIGN KEY ("adressId") REFERENCES "adress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
