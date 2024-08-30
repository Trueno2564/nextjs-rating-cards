'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

function NewPage({ params }) {
    const router = useRouter();
    const [rate, setRate] = useState("")
    const [name, setName] = useState("")
    const [text, setText] = useState("")

    useEffect(() => {
        if(params.id){
            fetch(`/api/rating/${params.id}`)
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
            // const result = await fetch(`/api/ratings/${params.id}`, {
            //     method: "PUT",
            //     body: JSON.stringify({ rate, name, text }),
            //     headers: { 'Content-Type': 'application/json' },
            // })
            console.log("asdasdasdasd")
        
        }else{
            const result = await fetch('/api/ratings', {
                method: "POST",
                body: JSON.stringify({ rate:rate, name:name, text:text }),
                headers: { 'Content-Type': 'application/json' },
            })
            console.log(result)
        }        
        router.push("/")
        router.refresh()
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <form className='bg-slate-800 p-10 lg:w-1/4 md:w-1/2' onSubmit={onSubmit}>
                <label htmlFor="rate" className='font-bold text-sm'>Calificacion</label>
                <input type='text' className='bg-slate-800 p-2 mb-4 w-full text-black' required placeholder='⭐⭐⭐⭐⭐' id='rate' 
                onChange={(e) => setRate(e.target.value)}
                value={rate}/>
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
                        await fetch(`/api/task/${params.id}`, {
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
