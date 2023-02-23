-- AlterTable
ALTER TABLE "users" ADD COLUMN     "ongId" TEXT;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ongs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
