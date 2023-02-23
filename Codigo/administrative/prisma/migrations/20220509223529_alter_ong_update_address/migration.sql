/*
  Warnings:

  - You are about to drop the column `adressId` on the `ongs` table. All the data in the column will be lost.
  - You are about to drop the `adresses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ongs" DROP CONSTRAINT "ongs_adressId_fkey";

-- AlterTable
ALTER TABLE "ongs" DROP COLUMN "adressId",
ADD COLUMN     "city" TEXT,
ADD COLUMN     "region" TEXT;

-- DropTable
DROP TABLE "adresses";
