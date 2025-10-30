import Title from '@/components/Title';
import { getDealProducts } from '@/sanity/queries'
import { Container } from 'lucide-react';
import React from 'react'

const DealPage = async () => {
    const products = await getDealProducts();
  return (
    <div>
        <Container>
            <Title>Hot Deals of the Week</Title>
        </Container>
    </div>
  )
}

export default DealPage