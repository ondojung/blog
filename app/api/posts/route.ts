import { NextResponse } from 'next/server';
import { getPosts } from "@/app/actions";

export async function GET(){
    const posts = await getPosts();
    return NextResponse.json(posts, {status: 200})
}