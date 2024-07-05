/*
  Warnings:

  - You are about to drop the `Users_info` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Users_info";

-- CreateTable
CREATE TABLE "users_info" (
    "id" TEXT NOT NULL,
    "First Name" TEXT NOT NULL,
    "Last Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Confirm Password" TEXT NOT NULL,

    CONSTRAINT "users_info_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_info_Email_key" ON "users_info"("Email");
