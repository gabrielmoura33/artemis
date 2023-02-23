-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'APPROVED', 'FINISHED');

-- CreateTable
CREATE TABLE "donations" (
    "id" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'PENDING',
    "value" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "donatorsId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "donations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donators" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "age" INTEGER,
    "cpf" TEXT,
    "gender" TEXT,

    CONSTRAINT "donators_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "donations" ADD CONSTRAINT "donations_donatorsId_fkey" FOREIGN KEY ("donatorsId") REFERENCES "donators"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
