'use client';

import { useRouter } from 'next/navigation';

import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import ListGithub from './list-github';

const GitHubSection = () => {
  const router = useRouter();

  return (
    <section id='github' className='border-b border-gray-500/20 py-5'>
      <Container>
        <Title title='Mis repositorios en github: ' />
        <ListGithub />
      </Container>
    </section>
  );
};

export default GitHubSection;
