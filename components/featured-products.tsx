import Link from 'next/link'
import ProductCard from './product-card'
import { ArrowBigRight } from 'lucide-react'

const featuredProducts = [
  {
    id: 1,
    name: 'Brownies',
    price: 6.9,
    image: '/brownies1.png',
    category: 'Tote'
  },
  {
    id: 2,
    name: 'Galleta',
    price: 6.6,
    image: '/galleta1.png',
    category: 'Clutch'
  },
  {
    id: 3,
    name: 'Queque Vainilla',
    price: 26.0,
    image: '/quequevainilla1.png',
    category: 'Shoulder'
  },
  {
    id: 4,
    name: 'Chocolate',
    price: 6.9,
    image: '/chocolate1.png',
    category: 'Crossbody'
  }
]

export default function FeaturedProducts() {
  return (
    <section className='py-12'>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-bold mb-8 text-center'>
          Productos destacados
        </h2>
        <Link
          href={'collection'}
          className='flex items-center text-slate-800 hover:text-blue-800'
        >
          {' '}
          Ver coleccion <ArrowBigRight />
        </Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
