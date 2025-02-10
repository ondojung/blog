import { NextResponse, NextRequest } from 'next/server';
import { getPosts } from "@/app/actions";

export async function GET(request:NextRequest){
    const posts = await getPosts();
    return NextResponse.json(posts, {status: 200})
}