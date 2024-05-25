import Image from 'next/image';
import { information } from '@/assets/data';
import Container from '@/components/ui/container';

const HeroSection = () => {
  return (
    <section id='home' className='border-b border-gray-500/30 py-10'>
      <Container>
        <div className='space-y-10'>
          <div className='relative w-24 h-24'>
            <Image
              src={information.photo}
              alt='Image'
              fill
              className='object-cover rounded-xl grayscale'
            />
          </div>
          <div className='max-w-3xl'>
            <h1 className='text-4xl text-white mb-5'>{`Hola, Soy Jorshua Solórzano, el dueño de esta pagina web.`}</h1>
            <p className='text-gray-500'>
             Soy un estudiante de informatica empresarial, me encuentro cursando el tercer año de carrera
             en estos momentos estoy explorando el ámbito de la programación web y de hecho esta página es producto de ello.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
