"use client"
import Modal from '@/components/Modal'
import React, { Fragment, useState } from 'react'
import { ProjectsCards } from '../../../data'
import Link from 'next/link'

function Projects() {
    const [showModal, setShowModal] = useState(false)
    return (
        <Fragment>
            <div className='p-10 text-center flex flex-col items-center'>
                <h1 className='text-6xl mb-5'>PROYECTOS</h1>
                <div className='flex grid grid-cols-3 justify-items-center gap-10 w-3/4 my-10'>
                    {ProjectsCards.map((item) => (
                        <button key={item.id} className='text-white bg-neutral-900 hover:bg-neutral-800 shadow-xl transition-shadow shadow-indigo-500/20 focus:outline-none front-medium text-sm rounded-lg mr-5 w-auto gap-3 flex flex-col' onClick={() => setShowModal(true)}>
                            <img src={item.srcImg} className='w-full rounded-tr-lg rounded-tl-lg'/>
                            <div className='w-full flex flex-col content-start mx-3'>
                                <p className='text-2xl font-bold w-auto self-start my-3'>{item.title}</p>
                                <div className='gap-1 flex flex-wrap mb-3'>
                                    <div className='text-sm border-solid border-fuchsia-800 border-2 rounded-md grid-flow-dense size-fit px-2'>{item.skill1}</div>
                                    <div className='text-sm border-solid border-fuchsia-800 border-2 rounded-md grid-flow-dense size-fit px-2'>{item.skill2}</div>
                                    <div className='text-sm border-solid border-fuchsia-800 border-2 rounded-md grid-flow-dense size-fit px-2'>{item.skill3}</div>
                                    <div className='text-sm border-solid border-fuchsia-800 border-2 rounded-md grid-flow-dense size-fit px-2'>{item.skill4}</div>
                                    <div className='text-sm border-solid border-fuchsia-800 border-2 rounded-md grid-flow-dense size-fit px-2'>{item.skill5}</div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)} className=''>
                <div className='flex gap-5 h-full'>
                    <div className='w-2/4 h-[500px] overflow-y-auto'>
                        <img src='https://workana.s3.amazonaws.com/portfolios/cl/596d8f16e8df03bdb30b008995b40b93/Prototipo0.png?response-content-disposition=inline%3Bfilename%3D%22Prototipo0.png%22&response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA33COQEVTJSIXHA73%2F20240902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240902T230802Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21600&X-Amz-Signature=d2c803df5e3ce77e126edc71e0d490d7ef5dedd594a463605b19b88addce9756' className='w-full py-1'/>
                        <img src='https://workana.s3.amazonaws.com/portfolios/cl/596d8f16e8df03bdb30b008995b40b93/Prototipo0.png?response-content-disposition=inline%3Bfilename%3D%22Prototipo0.png%22&response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA33COQEVTJSIXHA73%2F20240902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240902T230802Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21600&X-Amz-Signature=d2c803df5e3ce77e126edc71e0d490d7ef5dedd594a463605b19b88addce9756' className='w-full py-1'/>
                        <img src='https://workana.s3.amazonaws.com/portfolios/cl/596d8f16e8df03bdb30b008995b40b93/Prototipo0.png?response-content-disposition=inline%3Bfilename%3D%22Prototipo0.png%22&response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA33COQEVTJSIXHA73%2F20240902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240902T230802Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21600&X-Amz-Signature=d2c803df5e3ce77e126edc71e0d490d7ef5dedd594a463605b19b88addce9756' className='w-full py-1'/>
                        <img src='https://workana.s3.amazonaws.com/portfolios/cl/596d8f16e8df03bdb30b008995b40b93/Prototipo0.png?response-content-disposition=inline%3Bfilename%3D%22Prototipo0.png%22&response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA33COQEVTJSIXHA73%2F20240902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240902T230802Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21600&X-Amz-Signature=d2c803df5e3ce77e126edc71e0d490d7ef5dedd594a463605b19b88addce9756' className='w-full py-1'/>
                        <img src='https://workana.s3.amazonaws.com/portfolios/cl/596d8f16e8df03bdb30b008995b40b93/Prototipo0.png?response-content-disposition=inline%3Bfilename%3D%22Prototipo0.png%22&response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA33COQEVTJSIXHA73%2F20240902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240902T230802Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21600&X-Amz-Signature=d2c803df5e3ce77e126edc71e0d490d7ef5dedd594a463605b19b88addce9756' className='w-full py-1'/>
                    </div>
                    <div className=' p-6 w-2/4 h-[500px]'>
                        <h3 className='text-xl font-semibold text-gray-900 mb-5'>Modal Tittle</h3>
                        <p className='mb-5 font-normal text-gray-500  h-[400px] overflow-y-auto'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium hic mollitia cupiditate rerum. Eum, iure, facilis atque rerum fugiat magnam nihil debitis, unde distinctio nam voluptatem reprehenderit et? Obcaecati, eveniet!

                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat sed nulla officia praesentium, sit fuga consequatur unde at asperiores illo, autem suscipit! Et consectetur excepturi delectus veniam provident, quisquam tenetur!

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rem odio quisquam, ipsam suscipit quod eaque velit commodi minus possimus, sunt tempore, iste repellat praesentium? Architecto molestias eum inventore vero!

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestias et sit modi. Enim, quia, dolore architecto ab, fuga praesentium provident temporibus dolorem quis quos veritatis quae debitis aliquam eveniet.

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium hic mollitia cupiditate rerum. Eum, iure, facilis atque rerum fugiat magnam nihil debitis, unde distinctio nam voluptatem reprehenderit et? Obcaecati, eveniet!
                        </p>
                    </div>
                </div>
            </Modal>
        </Fragment>
    )
}

export default Projects
