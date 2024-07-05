/*
  Warnings:

  - You are about to drop the `Users-info` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Users-info";

-- CreateTable
CREATE TABLE "Users_info" (
    "id" TEXT NOT NULL,
    "First Name" TEXT NOT NULL,
    "Last Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Confirm Password" TEXT NOT NULL,

    CONSTRAINT "Users_info_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_info_Email_key" ON "Users_info"("Email");
