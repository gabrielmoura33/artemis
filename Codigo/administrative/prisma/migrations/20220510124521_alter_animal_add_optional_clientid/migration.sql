-- DropForeignKey
ALTER TABLE "animals" DROP CONSTRAINT "animals_clientId_fkey";

-- AlterTable
ALTER TABLE "animals" ALTER COLUMN "clientId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;
