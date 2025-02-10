"use server";
import ogs from "open-graph-scraper";
import { prisma } from "@/lib/prisma";

export async function getPosts() {
  return await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      preview: true,
      categoryID: true,
      thumbnail: true,
      createdAt: true,
      category: {
        select: {
          name: true,
          parent: true,
          parentCategory: {  // 부모 카테고리 추가
            select: {
              name: true,  // 부모 카테고리의 이름 가져오기
            },
          },
        }
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  }).then(posts => {
      console.log(posts)
    return posts.map(post => ({
      ...post,
      category: post.category?.parent
        ? `${post.category.parentCategory.name} / ${post.category.name}`
        : post.category?.name,
    }));
  });
}

export async function getPostDetail(id: number) {
  return await prisma.post.findUnique({
    where: { id },
    select: {
      title: true,
      thumbnail: true,
      content: true,
      createdAt: true,
      category: {
        select: {
          name: true,
          parent: true,
        },
      },
    },
  }).then(post => ({
    ...post,
    category: post.category?.parent
      ? `${post.category.parent.name} / ${post.category.name}`
      : post.category?.name,
  }));
}

export async function getCategoryList() {
  return await prisma.category.findMany({
    where: { parent: null },
    select: {
      id: true,
      name: true,
      children: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  }).then(categories => categories.map(category => ({
    ...category,
    children: category.children,
  })));
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