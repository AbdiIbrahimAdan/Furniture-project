-- CreateTable
CREATE TABLE "Users-info" (
    "id" TEXT NOT NULL,
    "First Name" TEXT NOT NULL,
    "Last Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Confirm Password" TEXT NOT NULL,

    CONSTRAINT "Users-info_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users-info_Email_key" ON "Users-info"("Email");
