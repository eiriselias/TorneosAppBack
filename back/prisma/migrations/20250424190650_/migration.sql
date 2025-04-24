/*
  Warnings:

  - Added the required column `teamId` to the `Jugador` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `position` on the `Jugador` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Estado" AS ENUM ('por_iniciar', 'en_juego', 'terminado');

-- CreateEnum
CREATE TYPE "Tipo" AS ENUM ('futbol_11', 'futbol_9', 'futbol_sala');

-- CreateEnum
CREATE TYPE "EstadosPartido" AS ENUM ('grupos', 'octavos', 'cuartos', 'semifinal', 'final');

-- CreateEnum
CREATE TYPE "Posicion" AS ENUM ('portero', 'defensor', 'mediocampista', 'delantero');

-- AlterTable
ALTER TABLE "Jugador" ADD COLUMN     "number" INTEGER,
ADD COLUMN     "teamId" TEXT NOT NULL,
DROP COLUMN "position",
ADD COLUMN     "position" "Posicion" NOT NULL;

-- CreateTable
CREATE TABLE "Campeonato" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date_start" TIMESTAMP(3) NOT NULL,
    "date_end" TIMESTAMP(3),
    "stade" "Estado" NOT NULL,
    "tipe" "Tipo" NOT NULL,
    "firstId" TEXT,
    "secondId" TEXT,
    "thirdId" TEXT,
    "fourthId" TEXT,

    CONSTRAINT "Campeonato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "shield" TEXT,
    "pj" INTEGER,
    "pg" INTEGER,
    "pe" INTEGER,
    "pp" INTEGER,
    "gt" INTEGER,
    "gc" INTEGER,
    "pts" INTEGER,

    CONSTRAINT "Equipo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partido" (
    "id" TEXT NOT NULL,
    "team_localId" TEXT NOT NULL,
    "team_visitanteId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "goals_local" INTEGER NOT NULL,
    "goals_visitante" INTEGER NOT NULL,
    "tournamentId" TEXT NOT NULL,
    "stage" "EstadosPartido" NOT NULL,

    CONSTRAINT "Partido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gol" (
    "id" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "partidoId" TEXT NOT NULL,
    "autogol" BOOLEAN NOT NULL,

    CONSTRAINT "Gol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EquiposCampeonato" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_EquiposCampeonato_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_EquiposCampeonato_B_index" ON "_EquiposCampeonato"("B");

-- AddForeignKey
ALTER TABLE "Campeonato" ADD CONSTRAINT "Campeonato_firstId_fkey" FOREIGN KEY ("firstId") REFERENCES "Equipo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campeonato" ADD CONSTRAINT "Campeonato_secondId_fkey" FOREIGN KEY ("secondId") REFERENCES "Equipo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campeonato" ADD CONSTRAINT "Campeonato_thirdId_fkey" FOREIGN KEY ("thirdId") REFERENCES "Equipo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campeonato" ADD CONSTRAINT "Campeonato_fourthId_fkey" FOREIGN KEY ("fourthId") REFERENCES "Equipo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partido" ADD CONSTRAINT "Partido_team_localId_fkey" FOREIGN KEY ("team_localId") REFERENCES "Equipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partido" ADD CONSTRAINT "Partido_team_visitanteId_fkey" FOREIGN KEY ("team_visitanteId") REFERENCES "Equipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partido" ADD CONSTRAINT "Partido_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Campeonato"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jugador" ADD CONSTRAINT "Jugador_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Equipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gol" ADD CONSTRAINT "Gol_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Jugador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gol" ADD CONSTRAINT "Gol_partidoId_fkey" FOREIGN KEY ("partidoId") REFERENCES "Partido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquiposCampeonato" ADD CONSTRAINT "_EquiposCampeonato_A_fkey" FOREIGN KEY ("A") REFERENCES "Campeonato"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquiposCampeonato" ADD CONSTRAINT "_EquiposCampeonato_B_fkey" FOREIGN KEY ("B") REFERENCES "Equipo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
