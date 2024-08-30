import {prisma} from '@/libs/prisma'
import RateCard from'@/components/RateCard'

async function loadTasks() {
  return await prisma.rating.findMany();
  
}

// export const revalidate = 60;
export const dynamic = 'force-dynamic';

async function HomePage() {
  const rating = await loadTasks();
  return (
    <section className='container mx-auto'>
      <div className='grid grid-cols-3 gap-3 mt-10'>
        {rating.map((rating) =>(
          <RateCard rating={rating} key={rating.id}/>
        ))}
      </div>
    </section>
  )
}

export default HomePage