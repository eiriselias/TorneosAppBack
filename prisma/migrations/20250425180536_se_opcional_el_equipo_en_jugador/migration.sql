/*
  Warnings:

  - You are about to drop the column `partidoId` on the `Gol` table. All the data in the column will be lost.
  - Added the required column `matchId` to the `Gol` table without a default value. This is not possible if the table is not empty.
  - Added the required column `place` to the `Partido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Partido` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Gol" DROP CONSTRAINT "Gol_partidoId_fkey";

-- AlterTable
ALTER TABLE "Gol" DROP COLUMN "partidoId",
ADD COLUMN     "matchId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Partido" ADD COLUMN     "place" TEXT NOT NULL,
ADD COLUMN     "time" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Gol" ADD CONSTRAINT "Gol_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Partido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
