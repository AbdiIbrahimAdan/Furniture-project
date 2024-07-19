/*
  Warnings:

  - You are about to drop the column `Confirm Password` on the `users_info` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users_info" DROP COLUMN "Confirm Password";

-- CreateTable
CREATE TABLE "products_info" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_info" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_info_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "order_info" ADD CONSTRAINT "order_info_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users_info"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_info" ADD CONSTRAINT "order_info_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products_info"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
