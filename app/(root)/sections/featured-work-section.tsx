'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/ui/button';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import ListFeaturedWork from '@/components/list-featured-work';

const FeaturedWorkSection = () => {
  const router = useRouter();

  return (
    <section id='FeaturedWork' className='border-b border-gray-500/30 py-10'>
      <Container>
        <Title title='Trabajos destacados' />
        <ListFeaturedWork />
        <Button label='Ver todos mis trabajos' onClick={() => router.push('/work')} />
      </Container>
    </section>
  );
};

export default FeaturedWorkSection;
