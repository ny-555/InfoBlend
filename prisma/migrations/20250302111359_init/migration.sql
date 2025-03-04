/*
  Warnings:

  - You are about to drop the column `blogId` on the `posts` table. All the data in the column will be lost.
  - Added the required column `title` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" DROP COLUMN "blogId",
ADD COLUMN     "title" TEXT NOT NULL;
