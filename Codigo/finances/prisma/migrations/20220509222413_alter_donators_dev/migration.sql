/*
  Warnings:

  - The values [ND] on the enum `DonatorGender` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DonatorGender_new" AS ENUM ('F', 'M', 'U');
ALTER TABLE "donators" ALTER COLUMN "gender" TYPE "DonatorGender_new" USING ("gender"::text::"DonatorGender_new");
ALTER TYPE "DonatorGender" RENAME TO "DonatorGender_old";
ALTER TYPE "DonatorGender_new" RENAME TO "DonatorGender";
DROP TYPE "DonatorGender_old";
COMMIT;

-- AlterTable
ALTER TABLE "donators" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
