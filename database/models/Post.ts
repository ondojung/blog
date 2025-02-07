import { BaseModel } from "../core/BaseModel";

export class Post extends BaseModel {
  id!: number;
  title!: string;
  content!: string;
  thumbnail?: string;
  categoryID!: number;
  status!: "DRAFT" | "PUBLISHED" | "PRIVATE";
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;

  static tableName = "posts";
}