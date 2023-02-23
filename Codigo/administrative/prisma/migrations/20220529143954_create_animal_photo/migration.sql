-- CreateTable
CREATE TABLE "animal_photos" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "animalId" TEXT,

    CONSTRAINT "animal_photos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "animal_photos" ADD CONSTRAINT "animal_photos_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "animals"("id") ON DELETE SET NULL ON UPDATE CASCADE;
