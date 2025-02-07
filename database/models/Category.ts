import { BaseModel } from "../core/BaseModel";

export class Category extends BaseModel {
  id!: number; // 카테고리 고유 ID
  name!: string; // 카테고리 이름
  parent?: number | null; // 부모 카테고리 ID, 최상위 카테고리는 null
  createdAt?: Date; // 생성일
  updatedAt?: Date; // 수정일

  static tableName = "categories"; // 테이블 이름
}
/*
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `parent` int(11) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3) ON UPDATE current_timestamp(3),
  PRIMARY KEY (`id`),
  KEY `parent` (`parent`),
  CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci*/