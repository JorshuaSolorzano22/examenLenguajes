import { cn } from '@/libs/utils';

import CardVentures from '@/components/ui/card-ventures';

interface ListVenturesProps {
  className?: string;
}

const ListVentures = ({ className }: ListVenturesProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10',
        className
      )}
    >
      <CardVentures
        href='https://www.microsoft.com/es-cr/'
        image='https://img.freepik.com/premium-photo/close-up-colorful-logo-with-white-background-generative-ai_1034964-51176.jpg?w=740'
        title='MICROSOFT CORPORATION'
        description='Durante mi tiempo en Microsoft, trabajé como Ingeniero de Software en la optimización de aplicaciones de Office 365, enfocándome 
                     en mejorar la experiencia del usuario y la integración de inteligencia artificial en Word y Excel.'
      />
<CardVentures
  href='https://sededelsur.ucr.ac.cr/'
  image={'/Logo UCR.png'} 
  title='UCR SEDE DEL SUR'
  description='En la sede del sur de la UCR, fuí parte el desarrollo de una aplicación de gestión de inventario. El enfoque fue crear una solución eficiente que mejorara la precisión y la eficiencia en la gestión de inventarios.'
/>


    </div>
  );
};

export default ListVentures;
