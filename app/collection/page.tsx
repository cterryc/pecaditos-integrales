'use client'

import { useState } from 'react'
import ProductCard from '@/components/product-card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select'

const products = [
  {
    id: 1,
    name: 'Brownies',
    price: 6.9,
    image: '/brownies1.png',
    category: 'Tote',
    description: 'Delicioso brownie con una base crujiente y un sabor suave.'
  },
  {
    id: 2,
    name: 'Galleta',
    price: 6.6,
    image: '/galleta1.png',
    category: 'Clutch',
    description: 'Deliciosa galleta con un sabor suave y una textura crujiente.'
  },
  {
    id: 3,
    name: 'Queque Vainilla',
    price: 26.0,
    image: '/quequevainilla1.png',
    category: 'Shoulder',
    description: 'Delicioso queque con un sabor suave y una textura crujiente.'
  },
  {
    id: 4,
    name: 'Chocolate',
    price: 6.9,
    image: '/chocolate1.png',
    category: 'Crossbody',
    description:
      'Delicioso chocolate con un sabor suave y una textura crujiente.'
  },
  {
    id: 5,
    name: 'Cheese Cake Arandanos',
    price: 42.5,
    image: '/cheesecakearandanos1.png',
    category: 'Satchel',
    description:
      'Delicioso cheese cake con un sabor suave y una textura crujiente.'
  },
  {
    id: 6,
    name: 'Cheese Cake Coco',
    price: 42.5,
    image: '/cheesecakecoco1.png',
    category: 'Clutch',
    description:
      'Delicioso cheese cake con un sabor suave y una textura crujiente.'
  },
  {
    id: 7,
    name: 'Empanadas',
    price: 7.5,
    image: '/empanadas1.png',
    category: 'Tote',
    description:
      'Delicioso empanadas con un sabor suave y una textura crujiente.'
  },
  {
    id: 8,
    name: 'Muffin',
    price: 7.5,
    image: '/muffin2.png',
    category: 'Duffel',
    description: 'Delicioso muffin con un sabor suave y una textura crujiente.'
  },
  {
    id: 9,
    name: 'Pie',
    price: 45.0,
    image: '/pie3.png',
    category: 'Clutch',
    description: 'Delicioso pie con un sabor suave y una textura crujiente.'
  },
  {
    id: 10,
    name: 'Strudel',
    price: 7.5,
    image: '/strudel1.png',
    category: 'Tote',
    description: 'Delicioso strudel con un sabor suave y una textura crujiente.'
  },
  {
    id: 11,
    name: 'Queque Chocolate',
    price: 26.0,
    image: '/quequechocolate1.png',
    category: 'Duffel',
    description:
      'Delicioso queque chocolate con un sabor suave y una textura crujiente.'
  }
]

export default function Collection() {
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('name')

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(filter.toLowerCase()) ||
        product.category.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name)
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      return 0
    })

  return (
    <div className='container mx-auto px-4 py-8'>
      {/* <h1 className='text-3xl font-bold mb-8'>Nuestos</h1> */}
      <div className='flex flex-col md:flex-row gap-4 mb-8'>
        <Input
          type='text'
          placeholder='Search products...'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className='md:w-64'
        />
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className='md:w-48'>
            <SelectValue placeholder='Sort by' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='name'>Name</SelectItem>
            <SelectItem value='price-asc'>Price: Low to High</SelectItem>
            <SelectItem value='price-desc'>Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
