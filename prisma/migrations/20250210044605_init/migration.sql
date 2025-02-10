-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DRAFT', 'PUBLISHED', 'PRIVATE');

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "preview" TEXT,
    "thumbnail" TEXT,
    "categoryID" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "parent" INTEGER,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_post_createdAt" ON "Post"("createdAt");

-- CreateIndex
CREATE INDEX "idx_post_categoryID" ON "Post"("categoryID");

-- CreateIndex
CREATE INDEX "parent" ON "Category"("parent");

-- CreateIndex
CREATE INDEX "idx_category_id" ON "Category"("id");

-- CreateIndex
CREATE INDEX "idx_category_parent" ON "Category"("parent");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parent_fkey" FOREIGN KEY ("parent") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
