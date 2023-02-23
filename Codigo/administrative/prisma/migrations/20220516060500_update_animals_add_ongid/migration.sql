/*
  Warnings:

  - Made the column `ongId` on table `animals` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "animals" DROP CONSTRAINT "animals_ongId_fkey";

-- AlterTable
ALTER TABLE "animals" ALTER COLUMN "ongId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ongs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
