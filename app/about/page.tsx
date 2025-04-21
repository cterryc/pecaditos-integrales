import Image from 'next/image'

export default function About() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>
        Acerca de Pecaditos Integrales
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        <div>
          <p className='mb-4'>
            Pecaditos Integrales es una marca dedicada a la elaboración de
            deliciosos productos de panadería y repostería integral. Nos
            especializamos en crear exquisitas galletas integrales, panetones
            artesanales, queques nutritivos, pies caseros, empanadas saludables
            y tortas especiales, todos elaborados con ingredientes integrales de
            la más alta calidad.
          </p>
          <p className='mb-4'>
            Nuestro compromiso con la calidad se refleja en cada producto que
            horneamos, utilizando ingredientes naturales y procesos artesanales.
            Creemos que los productos integrales no solo deben ser saludables,
            sino también deliciosos, brindando una experiencia única que combina
            el placer de un dulce con los beneficios de lo integral.
          </p>
        </div>
        <div className='relative h-64 md:h-full'>
          <Image
            src='/empresa1.png'
            alt='Elegant Bags Workshop'
            fill
            className='object-cover rounded-lg'
          />
        </div>
      </div>
      <h2 className='text-2xl font-bold mt-12 mb-6'>Nuestros Valores</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='bg-gray-100 p-6 rounded-lg'>
          <h3 className='text-xl font-semibold mb-2'>Calidad</h3>
          <p>
            Utilizamos ingredientes integrales de primera calidad y procesos
            artesanales para garantizar productos excepcionales.
          </p>
        </div>
        <div className='bg-gray-100 p-6 rounded-lg'>
          <h3 className='text-xl font-semibold mb-2'>Innovación</h3>
          <p>
            Creamos recetas únicas que combinan lo saludable con sabores
            deliciosos y texturas irresistibles.
          </p>
        </div>
        <div className='bg-gray-100 p-6 rounded-lg'>
          <h3 className='text-xl font-semibold mb-2'>Compromiso</h3>
          <p>
            Nos dedicamos a promover una alimentación saludable sin sacrificar
            el placer de disfrutar postres deliciosos.
          </p>
        </div>
      </div>
    </div>
  )
}
