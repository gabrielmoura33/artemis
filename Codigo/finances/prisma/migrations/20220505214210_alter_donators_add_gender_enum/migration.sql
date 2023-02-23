/*
  Warnings:

  - The `gender` column on the `donators` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "DonatorGender" AS ENUM ('F', 'M', 'ND');

-- AlterTable
ALTER TABLE "donators" DROP COLUMN "gender",
ADD COLUMN     "gender" "DonatorGender";
