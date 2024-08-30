import { NextResponse } from "next/server";
import {prisma} from '@/libs/prisma'

export async function GET( request, {params}){
    const rating = await prisma.rating.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json(rating)
}

export async function PUT( request, {params}){
    const data = await request.json()
    const rateUpdate = await prisma.rating.update({
        where: {
            id: Number(params.id)
        },
        data: data
    })
    return NextResponse.json(rateUpdate)
}

export async function DELETE( request, {params}){
    try {
        const ratingDelete = await prisma.rating.delete({
            where: {
                id: Number(params.id)
            }
        })
        return NextResponse.json(ratingDelete)
    } catch (error) {
        return NextResponse.json(error.message)
    }
}