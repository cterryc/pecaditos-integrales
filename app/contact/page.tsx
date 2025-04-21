'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Benefits from '@/components/benefits'
import { MdOutlinePhoneIphone, MdMailOutline } from 'react-icons/md'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className='container mx-auto px-4 pt-8 pb-0'>
      <h1 className='text-3xl font-bold mb-8'>Contactanos</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div> */}
        <div>
          <h2 className='text-2xl font-semibold mb-4'>
            Informacion de contacto
          </h2>
          <p className='mb-2 flex items-center'>
            <MdMailOutline />: info@elegantbags.com
          </p>
          <p className='mb-2 flex items-center'>
            <MdOutlinePhoneIphone />: +51 987654321
          </p>
          <h3 className='text-xl font-semibold mt-6 mb-2'>Horio de atencion</h3>
          <p className='mb-1'>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
          <p className='mb-1'>Sabados: 10:00 AM - 4:00 PM</p>
          <p>Domingos: Cerrado</p>
        </div>
      </div>
      <div className='mt-8'>
        <Benefits />
      </div>
    </div>
  )
}
