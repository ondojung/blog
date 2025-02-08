"use server";
import db from "@/database";
import ogs from "open-graph-scraper";
import { FieldPacket } from "mysql2";

const GET_POSTS_QUERY = `
SELECT 
  p.id, 
  p.title, 
  p.preview, 
  p.categoryID, 
  p.thumbnail, 
  p.createdAt,
  IFNULL(CONCAT(c2.name, '/', c1.name), c1.name) AS category
FROM posts p
LEFT JOIN categories c1 ON p.categoryID = c1.id
LEFT JOIN categories c2 ON c1.parent = c2.id;
`
export async function getPosts(){
    const [rows] = await db.query(GET_POSTS_QUERY);
    return rows;
}

export async function getPostDetail(id:number){
    const GET_POST_QUERY = `
    SELECT
      p.title, 
      p.thumbnail,
      p.content,
      p.createdAt,
      IFNULL(CONCAT(c2.name, '/', c1.name), c1.name) AS category
    FROM posts p
    LEFT JOIN categories c1 ON p.categoryID = c1.id
    LEFT JOIN categories c2 ON c1.parent = c2.id
    WHERE p.id=${id};
    `
    const [rows]:[any[], FieldPacket[]] = await db.query(GET_POST_QUERY);
    return rows[0];
}

export async function getCategoryList(){
    const GET_CATEGORY_QUERY = `
    SELECT 
        p.id, 
        p.name, 
        COALESCE(
            CONCAT('[', GROUP_CONCAT(
                JSON_OBJECT('id', c.id, 'name', c.name)
            ), ']'), '[]'
        ) AS children
    FROM categories p
    LEFT JOIN categories c ON p.id = c.parent
    WHERE p.parent IS NULL
    GROUP BY p.id, p.name;
    `
    const [rows]:[any[], FieldPacket[]] = await db.query(GET_CATEGORY_QUERY);
    const result = rows.map(e => ({ ...e, children: JSON.parse(e.children?.toString('utf-8'))}))
    
    return result;
}

export async function getOGData(url:string){
    const data = await ogs({
       url: url
    })
    const { ogTitle,ogDescription,ogImage } = data.result
    return {
        ogTitle:ogTitle,
        ogDescription:ogDescription,
        ogImage: ogImage?.[0]?.url ?? undefined
    }
}