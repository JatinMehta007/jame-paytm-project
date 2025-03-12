/*
  Warnings:

  - A unique constraint covering the columns `[amount]` on the table `Balance` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[locked]` on the table `Balance` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Balance_amount_key" ON "Balance"("amount");

-- CreateIndex
CREATE UNIQUE INDEX "Balance_locked_key" ON "Balance"("locked");
