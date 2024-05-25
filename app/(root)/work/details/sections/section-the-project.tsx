import Container from '@/components/ui/container';
import Subtitle from '@/components/ui/subtitle';
import Image from 'next/image';

const SectionTheProject = () => {
  return (
    <section
      id='SectionTheProject'
      className='border-b border-gray-500/30 py-10'
    >
      <Container>
        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between mb-10 gap-5'>
          <Subtitle subtitle='El proyecto' className='my-0' />
          <ul className='space-y-8'>
            <li className='max-w-2xl'>
              <h4 className='text-xl text-white font-medium mb-2'>Desafío del proyecto</h4>
              <p className='text-sm text-gray-500'>
              Uno de nuestros principales desafíos fue integrar sistemas heredados con tecnologías 
              modernas, garantizando la compatibilidad y la transición fluida de datos. Abordamos 
              esto con planificación meticulosa, pruebas exhaustivas y soluciones de integración 
              flexibles. Esta experiencia fortaleció nuestras habilidades en resolución de problemas
              técnicos y gestión de transiciones tecnológicas.
              </p>
            </li>
            <li className='max-w-2xl'>
              <h4 className='text-xl text-white font-medium mb-2'>Resultado</h4>
              <p className='text-sm text-gray-500'>
              Como resultado de nuestro arduo trabajo y colaboración, logramos desarrollar una 
              aplicación de gestión de inventario altamente eficiente y funcional. Esta aplicación
              permitió una gestión más precisa y ágil de los inventarios, reduciendo los tiempos
              de respuesta y mejorando la toma de decisiones en toda la organización. Además, 
              la implementación exitosa de la aplicación resultó en una mayor satisfacción del
              cliente y una mejora significativa en la eficiencia operativa de la sede.
              </p>
            </li>
          </ul>
        </div>
        <div className='relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl mb-10'>
          <Image
            src='https://img.freepik.com/free-photo/medium-shot-man-checking-documents_23-2149214305.jpg?t=st=1716482990~exp=1716486590~hmac=d92cd8557bfaddf8eef31d0ad799784f12b2f824bfd9fa38032955f38b3f1a08&w=996'
            alt='Image'
            fill
            className='object-cover rounded-xl'
          />
        </div>
      </Container>
    </section>
  );
};

export default SectionTheProject;
