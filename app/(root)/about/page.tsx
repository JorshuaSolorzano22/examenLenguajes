import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <main className='border-b border-gray-500/30 pb-10'>
      <Container>
        <Title title='Sobre Jorshua Solórzano' />
        <div className='relative w-full h-[500px] rounded-xl'>
          <Image
            src='https://img.freepik.com/free-photo/crop-people-using-laptops-office_23-2147807990.jpg?t=st=1716485889~exp=1716489489~hmac=7de92410965709db4b49d70bddcba64d9cef21b9f8466e22b2d9b6899f9e9230&w=996'
            alt='Image'
            fill
            className='object-cover rounded-xl'
          />
        </div>
        <div className='mt-10 space-y-10'>
          <p className='text-gray-500'>
          Soy un estudiante dedicado y apasionado por el desarrollo de software, 
          con poca experiencia en la creación de aplicaciones, pero que resultan ser muy eficientes y que proporcionan soluciones 
          innovadoras. Como parte del equipo de desarrollo de una aplicación de 
          gestión de inventario en la sede del sur de la UCR, demostré mi capacidad
          para colaborar eficazmente, resolver problemas complejos y cumplir con altos estándares de calidad.
          </p>
          <p className='text-gray-500'>
          Mi enfoque se centra en combinar habilidades técnicas con una fuerte 
          capacidad de trabajo en equipo, lo que me permite contribuir significativamente
          a los objetivos del equipo y la organización. Me esfuerzo por mantenerme 
          actualizado con las últimas tendencias y tecnologías, siempre buscando mejorar 
          y expandir mis conocimientos. Estoy comprometido con la excelencia y la mejora 
          continua en todos los aspectos de mi trabajo.
          </p>
          <p className='text-gray-500'>
          Además, valoro la comunicación efectiva y la adaptabilidad en un entorno de 
          desarrollo dinámico. Creo firmemente en la importancia de escuchar y entender
          las necesidades del usuario final para entregar productos que realmente agreguen
          valor. Mi objetivo es seguir creciendo como profesional y enfrentar nuevos desafíos
           que me permitan aplicar y ampliar mis habilidades en el desarrollo de software.
          </p>

        </div>
      </Container>
    </main>
  );
};

export default AboutPage;
