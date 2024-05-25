import CardRecomendations from '@/components/ui/card-recomendations';

import Container from '@/components/ui/container';
import Title from '@/components/ui/title';

const RecomendationsSection = () => {
  return (
    <section id='Recomendations' className='border-b border-gray-500/30 py-10'>
      <Container>
        <Title title='Recomendaciones' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <CardRecomendations
            message='Es un placer recomendar a Jorshua Solórzano, quien fue líder de un proyecto de 
            programación en nuestro equipo. Jorshua demostró ser un líder excepcional y un profesional
             dedicado, capaz de motivar y guiar a su equipo eficientemente. Su profundo conocimiento 
             en diversas tecnologías y su compromiso con la calidad fueron clave para el éxito del proyecto.
            Jorshua es un activo valioso para cualquier equipo de desarrollo.'
            image='https://img.freepik.com/free-photo/entrepreneur-portrait-ai-generated-image_268835-5685.jpg?t=st=1716413300~exp=1716416900~hmac=5761d6ed50ebcc0c52c49113d27ad08fded94bf88f3fae4139b827e229964deb&w=996'
            name='Markus Porther'
            position='CEO DE MICROSOFT CORPORATION'
          />
          <CardRecomendations
            message='Recomiendo a Jorshua Solórzano, con quien trabajé en el desarrollo de una aplicación 
            de gestión de inventario en la sede del sur de la UCR. Jorshua demostró ser un desarrollador 
            talentoso y dedicado, creando una solución eficiente que mejoró significativamente la gestión de inventario.

            Además de sus habilidades técnicas, Jorshua mostró excelente trabajo en equipo y liderazgo, colaborando
             eficazmente con sus compañeros. Su atención al detalle y compromiso con la calidad fueron evidentes en cada etapa del proyecto.
            
            Jorshua es un profesional excepcional y será una valiosa adición para cualquier equipo de desarrollo. 
            Lo recomiendo sin reservas para futuras oportunidades laborales.'
            image='https://img.freepik.com/free-photo/close-up-handsome-man-smiling_23-2150771107.jpg?t=st=1716413515~exp=1716417115~hmac=f6c7e52406625f4122bbc6f24e57d206500b15e1640947cfdf70719522924f9e&w=360'
            name='Jose Pablo Noguera'
            position='LIDER DEL PROYECTO  DE GESTIÓN DE INVENTARIO EN SSUR UCR'
          />
        </div>
      </Container>
    </section>
  );
};

export default RecomendationsSection;
