'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/CartContext'
import styles from './product-card.module.css'
import { ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()

  console.log('product', product)

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    })
  }

  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden'>
      <div className={styles.imageContainer}>
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          fill
          className='object-cover w-full h-full'
        />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-semibold mb-2'>{product.name}</h3>
        <p className='text-gray-600 mb-4'>S/ {product.price.toFixed(2)}</p>
        <Button className='w-full' onClick={handleAddToCart}>
          Añadir al carrito <ShoppingCart />
        </Button>
      </div>
    </div>
  )
}
