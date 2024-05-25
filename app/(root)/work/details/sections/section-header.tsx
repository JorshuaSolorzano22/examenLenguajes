'use client';

import Button from '@/components/ui/button';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import Image from 'next/image';

const SectionHeader = () => {
  return (
    <section id='sectionHeader' className='border-b border-gray-500/30 py-10'>
      <Container>
        <Title title='Gestión de inventario Sede del Sur UCR' className='mb-5' />
        <p>
          El objetivo de la aplicación es tener un control del inventario en la sede. Mediante una
          aplicación que tenga todas las funcionalidades de un CRUD, además de poder generar informes
          actualizados de todos los activos de la sede.
        </p>
      
        <div className='relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl'>
          <Image
            src='https://img.freepik.com/free-photo/man-with-helmet-working-logistic_23-2148886811.jpg?t=st=1716482010~exp=1716485610~hmac=81660f6422e623e58b2e9a21007d3537ee5d7d9448b3a59baf8c65f5c425b313&w=900'
            alt='Image'
            fill
            className='object-cover rounded-xl'
          />
        </div>
      </Container>
    </section>
  );
};

export default SectionHeader;
