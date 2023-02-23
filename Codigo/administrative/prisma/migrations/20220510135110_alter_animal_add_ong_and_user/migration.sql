-- AlterTable
ALTER TABLE "animals" ADD COLUMN     "ongId" TEXT,
ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ongs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
