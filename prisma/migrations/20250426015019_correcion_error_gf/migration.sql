/*
  Warnings:

  - You are about to drop the column `gt` on the `Equipo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Equipo" DROP COLUMN "gt",
ADD COLUMN     "gf" INTEGER;
