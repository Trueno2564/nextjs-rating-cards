"use client"
import { useRouter } from "next/navigation"

async function RateCard({rating}) {
    const router = useRouter()
    return (
        <div className='bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer' onClick={() => {router.push("/rate/edit/" + rating.id)}}>
            <h3 className='font-bold text-2xl mb-2'>{rating.rate}</h3>
            <p>{rating.name}</p>
            <p>{rating.text}</p>
            <p>{new Date(rating.createdAt).toLocaleDateString()}</p>
        </div>
    )
}

export default RateCard