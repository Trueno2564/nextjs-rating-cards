import { NextResponse } from "next/server";
import {prisma} from '@/libs/prisma'

export async function GET() {
    const rating = await prisma.rating.findMany();
    return NextResponse.json(rating);
}

export async function POST(request) {
    const {rate, name, text} = await request.json();
    const newRating = await prisma.rating.create({
        data: {
            rate,
            name,
            text
        },
    });
    return NextResponse.json(newRating);
}

import { NextResponse } from "next/server";
import {prisma} from '@/libs/prisma'

export async function GET(){
    const tasks = await prisma.task.findMany()
    return NextResponse.json(tasks)
}

export async function POST(request){
    const {tittle, description} = await request.json()
    const newTask = await prisma.task.create({
        data: {
            tittle,
            description
        }})
    return NextResponse.json(newTask)
}