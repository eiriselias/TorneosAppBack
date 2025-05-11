/*
  Warnings:

  - Added the required column `teamId` to the `Gol` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gol" ADD COLUMN     "teamId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Gol" ADD CONSTRAINT "Gol_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Equipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
