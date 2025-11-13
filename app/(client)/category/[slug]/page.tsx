import Title from '@/components/Title';
import { getCategories } from '@/sanity/queries'
import { Container } from 'lucide-react';
import React from 'react'

const CategoryPage = async({params}:{params:Promise<{slug: string}>}) => { 
  const categories = await getCategories();
  return (
    <div className='py-10'>
      <Container>
        <Title>Products by Category</Title>
      </Container>
    </div>
  )
}

export default CategoryPage