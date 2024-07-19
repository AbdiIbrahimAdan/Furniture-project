/*
  Warnings:

  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_productId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "Product";

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
CREATE TABLE "orders_info" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_info_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orders_info" ADD CONSTRAINT "orders_info_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users_info"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders_info" ADD CONSTRAINT "orders_info_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products_info"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
