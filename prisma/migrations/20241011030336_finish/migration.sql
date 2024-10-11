/*
  Warnings:

  - You are about to drop the column `real_link` on the `ShortLink` table. All the data in the column will be lost.
  - You are about to drop the column `short_link` on the `ShortLink` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[short_url]` on the table `ShortLink` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `short_url` to the `ShortLink` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `ShortLink` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ShortLink_short_link_key";

-- AlterTable
ALTER TABLE "ShortLink" DROP COLUMN "real_link",
DROP COLUMN "short_link",
ADD COLUMN     "short_url" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ShortLink_short_url_key" ON "ShortLink"("short_url");
