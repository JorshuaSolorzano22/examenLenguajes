import Container from '@/components/ui/container';
import Subtitle from '@/components/ui/subtitle';
import Image from 'next/image';

const SectionMyRole = () => {
  return (
    <section id='sectionMyRole' className='border-b border-gray-500/30 py-10'>
      <Container>
        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-10'>
          <Subtitle subtitle='Mi rol dentro del equipo' className='my-0' />
          <ul className='space-y-8'>
            <li className='max-w-2xl'>
              <h4 className='text-xl text-white font-medium mb-2'>
                Responsabilidades
              </h4>
              <p className='text-sm text-gray-500'>
              Como parte del equipo de desarrollo, mis responsabilidades incluyen el diseño y la implementación
              de funciones clave en nuestras aplicaciones, la identificación y resolución de problemas técnicos,
              y la colaboración estrecha con otros desarrolladores para asegurar la coherencia y calidad del código.
              También participo en revisiones de código, pruebas de software y la documentación técnica, contribuyendo
              a la mejora continua de nuestros procesos y productos.
              </p>
            </li>
            <li className='max-w-2xl'>
              <h4 className='text-xl text-white font-medium mb-2'>
                Colaboración
              </h4>
              <p className='text-sm text-gray-500'>
              Participé en colaboraciones interdepartamentales para mejorar la calidad de nuestros productos. Trabajé con 
              el equipo de diseño en la experiencia del usuario y con el equipo de control de calidad en la detección y 
              solución de problemas. Esta colaboración fortaleció nuestro trabajo y promovió un ambiente colaborativo.
              </p>
            </li>
          </ul>
        </div>
        <div className='relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl'>
          <Image
            src='https://img.freepik.com/free-photo/man-with-tablet-working-logistic_23-2148886824.jpg?t=st=1716482438~exp=1716486038~hmac=1bec5f8c4f1589d822b05fdaa1063ddd4aa1913eff83e31cc625c72f0d242a67&w=1060'
            alt='Image'
            fill
            className='object-cover rounded-xl'
          />
        </div>
      </Container>
    </section>
  );
};

export default SectionMyRole;
