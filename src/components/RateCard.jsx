"use client"
import { useRouter } from "next/navigation"
import { FaStar } from "react-icons/fa"

async function RateCard({rating}) {
    const router = useRouter()
    const rateNum = Number(rating.rate)
    return (
        <div className='bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer' onClick={() => {router.push("/rate/edit/" + rating.id)}}>
            {/* <h3 className='font-bold text-2xl mb-2'>{rating.rate}</h3> */}
            <div className='flex my-5 gap-1'>
                {[...Array(rateNum)].map(() => {
                    return (
                        <FaStar 
                            size={25} 
                            className='starRating'
                        />
                    )
                            
                })}
            </div>
            <p>{rating.name}</p>
            <p>{rating.text}</p>
            <p>{new Date(rating.createdAt).toLocaleDateString()}</p>
        </div>
    )
}

export default RateCard