import { MapPin } from 'lucide-react';
import React from 'react'


interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const data: ContactItemData[] = [
  {
    title: "Visit Us",
    subtitle: "New Orlean, USA",
    icon: (
      <MapPin className='h-6 w-6 text-gray-600 group-hover:text-primary transition-colors'/>
    ),
  },
]


const FooterTop = () => {
  return (
    <div>FooterTop</div>
  )
}

export default FooterTop