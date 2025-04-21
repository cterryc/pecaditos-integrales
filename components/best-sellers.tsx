import Link from 'next/link'
import ProductCard from './product-card'
import { ArrowBigRight } from 'lucide-react'

const bestSellers = [
  {
    id: 5,
    name: 'Cheese Cake Arandanos',
    price: 42.5,
    image: '/cheesecakearandanos1.png',
    category: 'Satchel'
  },
  {
    id: 6,
    name: 'Cheese Cake Coco',
    price: 42.5,
    image: '/cheesecakecoco1.png',
    category: 'Clutch'
  },
  {
    id: 7,
    name: 'Empanadas',
    price: 7.5,
    image: '/empanadas1.png',
    category: 'Tote'
  },
  {
    id: 8,
    name: 'Muffin',
    price: 7.5,
    image: '/muffin2.png',
    category: 'Duffel'
  },
  {
    id: 9,
    name: 'Pie',
    price: 45.0,
    image: '/pie3.png',
    category: 'Clutch'
  },
  {
    id: 10,
    name: 'Strudel',
    price: 7.5,
    image: '/strudel1.png',
    category: 'Tote'
  }
]

export default function BestSellers() {
  return (
    <section className='py-12'>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-bold mb-8 text-center'>
          Los más vendidos
        </h2>
        <Link
          href={'collection'}
          className='flex items-center text-slate-800 hover:text-blue-800'
        >
          {' '}
          Ver coleccion <ArrowBigRight />
        </Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
