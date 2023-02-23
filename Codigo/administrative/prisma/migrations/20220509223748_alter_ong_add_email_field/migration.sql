/*
  Warnings:

  - Added the required column `email` to the `ongs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ongs" ADD COLUMN     "email" TEXT NOT NULL;
