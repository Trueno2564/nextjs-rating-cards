'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";

function NewPage({ params }) {
    const router = useRouter();
    const [rate, setRate] = useState("")
    const [name, setName] = useState("")
    const [text, setText] = useState("")
    const [hover, setHover] = useState(null)

    useEffect(() => {
        if(params.id){
            fetch(`/api/ratings/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                setRate(data.rating)
                setName(data.name)
                setText(data.text)
            })
        }
    },[])

    const onSubmit = async (e) =>{
        e.preventDefault();
        if (params.id){
            const result = await fetch(`/api/ratings/${params.id}`, {
                method: "PUT",
                body: JSON.stringify({ rate, name, text }),
                headers: { 'Content-Type': 'application/json' },
            })
        
        }else{
            await fetch('/api/ratings', {
                method: "POST",
                body: JSON.stringify({ rate:rate, name:name, text:text }),
                headers: { 'Content-Type': 'application/json' },
            })
            // const data = res.json()
            // console.log("datos => "+ data)
        }        
        router.push("/")
        router.refresh()
    }
    

    return (
        <div className='h-screen flex justify-center items-center'>
            <form className='bg-slate-800 p-10 lg:w-1/4 md:w-1/2' onSubmit={onSubmit}>
                <label htmlFor="rate" className='font-bold text-sm'>Calificacion</label>
                <input type='text' className='border border-gray-400 p-2 mb-4 w-full text-black' placeholder='calificacion de 1 al 5' id='rate' 
                onChange={(e) => setRate(e.target.value)}
                value={rate}/>
                {/* <div className='flex my-5 gap-1'>
                    {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1;
                        // const rate = currentRating
                        return (
                            <label>
                                <input
                                    onChange={() => setRate(currentRating)}
                                    type='radio'
                                    id='rate'
                                    value={rate}
                                    onClick={() => setRate(currentRating)}
                                />
                                
                                <FaStar 
                                    size={25} 
                                    className='starRating'
                                    color={currentRating <= (hover || rate)? "#ffc107" : "e4e5e9"}
                                    onMouseEnter={() => setHover(currentRating)}
                                    onMouseLeave={() => setHover(null)}
                                />
                                
                            </label>
                        )
                    })}
                </div> */}
                <label htmlFor="name" className='font-bold text-sm'>Nombre</label>
                <input type='text' className='border border-gray-400 p-2 mb-4 w-full text-black' required placeholder='Brian Regalado' id='name' 
                onChange={(e) => setName(e.target.value)}
                value={name}/>
                <label htmlFor="text" className='font-bold text-sm'>Descripcion</label>
                <textarea rows="3" className='border border-gray-400 p-2 mb-4 w-full text-black' required placeholder='Describe tu calificacion' id='text' 
                onChange={(e) => setText(e.target.value)}
                value={text}></textarea>
                <button type='onSubmit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Crear</button>
                {params.id && (
                    <button className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4' type='button'
                    onClick={async() => {
                        await fetch(`/api/ratings/${params.id}`, {
                            method: "DELETE"
                        })
                        router.push("/")
                        router.refresh()
                    }}>
                        Eliminar
                    </button>
                )}
            </form>
        </div>
    )
}
export default NewPage
