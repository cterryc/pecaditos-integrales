'use client'

import { useCart } from '@/contexts/CartContext'
import { Button } from '@/components/ui/button'
import { X, CircleX } from 'lucide-react'
import './ShoppingCartPanel.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface ShoppingCartPanelProps {
  isOpen: boolean
  onClose: () => void
}

interface ProsItemsProduct {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

export default function ShoppingCartPanel({
  isOpen,
  onClose
}: ShoppingCartPanelProps) {
  const { cartItems, removeFromCart, clearCart, getCartTotal } = useCart()
  const [itemsProducts, setItemsProducts] = useState<ProsItemsProduct[]>([])
  const [showCardClientName, setShowCardClientName] = useState(false)
  const [clientName, setClientName] = useState('')
  const [clientTel, setClientTel] = useState('')
  const [clientAddress, setClientAddress] = useState('')
  const [clientError, setClientError] = useState(false)

  useEffect(() => {
    setItemsProducts(
      cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: item.quantity
      }))
    )
  }, [cartItems])

  if (!isOpen) return null

  // ! Contenido a copiar
  const contenidoACopiar = `Cliente: ${clientName}.

  ${itemsProducts
    .map(
      (item) =>
        `📌Producto: ${item.name}.
#️⃣Cantidad: ${item.quantity}.
💲Precio unidad: S/ ${item.price.toFixed(2)}.
\n`
    )
    .join('')}

💰Total: S/ ${getCartTotal().toFixed(2)}.`
  // ! Fin de contenido a copiar

  const countryCode = '51' // Código de país (cambiar según sea necesario)
  const phoneNumber = '907679229'

  const handleWhatsAppClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.id
    if (inputValue === 'inputName') {
      setClientName(e.target.value)
    } else if (inputValue === 'inputPhone') {
      setClientTel(e.target.value)
    } else if (inputValue === 'inputAddress') {
      setClientAddress(e.target.value)
    }
  }

  const handleVerifyError = () => {
    if (
      clientName.length > 3 &&
      clientTel.length > 9 &&
      clientAddress.length > 3
    ) {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className='fixed inset-0 bg-black bg-opacity-50 z-40'
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div className='cartPanelContainer'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-xl font-semibold text-gray-800'>Tu Carrito</h2>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 rounded-full hover:bg-gray-100'
          >
            <X size={24} />
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p className='text-gray-500 text-center py-8'>
            Tu carrito está vacío
          </p>
        ) : (
          <>
            <ul className='space-y-2 mb-6'>
              {cartItems.map((item) => (
                <li key={item.id} className='shoppingCartItem'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='imageCartPanel'
                  />
                  <div className='containerItemTitleCartPanel'>
                    <span className='font-medium text-gray-800'>
                      {item.name}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className='text-gray-400 hover:text-red-500 transition-colors duration-200 p-1 rounded-full hover:bg-gray-200'
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <div className='containerItemPriceCuantitiCartPanel'>
                    <span className='text-gray-600'>
                      Cantidad: {item.quantity}
                    </span>
                    <span className='font-medium text-gray-800'>
                      S/ {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <h2>Selecciona tu distrito</h2>
            <select className='w-full'>
              <option value='1'>Los Olivos</option>
              <option value='2'>Comas</option>
              <option value='3'>SMP</option>
            </select>
            <h2>Sector ubicacion de olivos</h2>
            <select className='w-full'>
              <option value='1'>entrada</option>
              <option value='2'>medio</option>
              <option value='3'>final</option>
            </select>
            <div className='border-t border-gray-200 pt-4 mb-6'>
              <div className='flex justify-between items-center mb-4'>
                <span className='text-gray-600 text-sm'>
                  Delivery: los olivos
                </span>
                <span className='text-sm font-semibold text-gray-800'>
                  S/ 10
                </span>
              </div>
              <div className='flex justify-between items-center mb-4'>
                <span className='text-gray-600'>Subtotal:</span>
                <span className='text-xl font-semibold text-gray-800'>
                  S/ {getCartTotal().toFixed(2)}
                </span>
              </div>
            </div>
            <div className='space-y-3'>
              <Button
                onClick={clearCart}
                variant='outline'
                className='w-full hover:bg-gray-100 transition-colors duration-200'
              >
                Limpiar Carrito
              </Button>
              <button
                style={{ backgroundColor: '#262626', marginTop: '10px' }}
                className='buttonShowCardClientName'
                onClick={() => setShowCardClientName(true)}
              >
                Continuar con{' '}
                <img
                  src='/BlackWhatsApp.svg'
                  alt='whatappicon'
                  className='h-8 [filter:brightness(0)_invert(1)]'
                />
              </button>
            </div>
          </>
        )}
      </div>
      {showCardClientName && (
        <div
          className='cardFormCaontainer'
          onClick={() => {
            setShowCardClientName(false)
            setClientName('')
          }}
        >
          <form className='formContainer' onClick={(e) => e.stopPropagation()}>
            <h1 className='labelClientName'>Mis datos</h1>
            <div>
              <label htmlFor='inputName'>Nombre</label>
              <input
                className='inputForm'
                id='inputName'
                placeholder='Nombre...'
                onChange={handleWhatsAppClick}
                value={clientName}
                type='text'
              />
            </div>
            <div>
              <label htmlFor='inputPhone'>Telefono</label>
              <input
                className='inputForm'
                id='inputPhone'
                placeholder='987654321'
                onChange={handleWhatsAppClick}
                value={clientTel}
                type='tel'
              />
            </div>
            <div>
              <label htmlFor='inputAddress'>Direccion</label>
              <input
                className='inputForm'
                id='inputAddress'
                placeholder='Urbanizacion / lote / Manzana'
                onChange={handleWhatsAppClick}
                value={clientAddress}
                type='text'
              />
            </div>
            <button
              style={{
                pointerEvents: handleVerifyError() ? 'none' : 'auto'
              }}
            >
              <Link
                href={`https://wa.me/+${countryCode}${phoneNumber}?text=${encodeURIComponent(
                  contenidoACopiar
                )}`}
                style={{
                  backgroundColor: clientName.length < 3 ? 'gray' : '#00d95f'
                }}
                className='linkWhatsapp'
              >
                Enviar pedido a{' '}
                <img
                  src='/BlackWhatsApp.svg'
                  alt='whatappicon'
                  className='h-8 [filter:brightness(0)_invert(1)]'
                />
              </Link>
            </button>
            <button
              className='buttonCloseCardClientName'
              onClick={() => {
                setShowCardClientName(false)
                setClientName('')
              }}
            >
              <X color='gray' />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
