/*
  Warnings:

  - You are about to drop the `_EquiposCampeonato` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tournamentId` to the `Equipo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_EquiposCampeonato" DROP CONSTRAINT "_EquiposCampeonato_A_fkey";

-- DropForeignKey
ALTER TABLE "_EquiposCampeonato" DROP CONSTRAINT "_EquiposCampeonato_B_fkey";

-- AlterTable
ALTER TABLE "Equipo" ADD COLUMN     "tournamentId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_EquiposCampeonato";

-- AddForeignKey
ALTER TABLE "Equipo" ADD CONSTRAINT "Equipo_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Campeonato"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
