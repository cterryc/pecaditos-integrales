import { Truck, HeadphonesIcon, ShieldCheck } from 'lucide-react'

const benefits = [
  {
    icon: Truck,
    title: 'Envio Gratis Lima',
    description: 'en ordenes mas de a S/ 50'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Soporte',
    description: 'Te ayudamos en cualquiero momento'
  },
  {
    icon: ShieldCheck,
    title: 'Pago Seguro',
    description: 'Tus pagos son 100% seguros'
  }
]

export default function Benefits() {
  return (
    <section className='py-12'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {benefits.map((benefit, index) => (
          <div key={index} className='flex flex-col items-center text-center'>
            <benefit.icon className='h-12 w-12 mb-4 text-primary' />
            <h3 className='text-xl font-semibold mb-2'>{benefit.title}</h3>
            <p className='text-gray-600'>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
