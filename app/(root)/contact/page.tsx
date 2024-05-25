import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import Form from './components/form';
import { information } from '@/assets/data';
import ButtonSocialMedia from '@/components/ui/button-social-media';

const ContactPage = () => {
  return (
    <main className='pb-10 border-b border-gray-500/30'>
      <Container>
        <Title title='¡Contactame!' />
        <p className='text-gray-500 mb-10'>
        Si deseas hablar sobre un posible proyecto, envíame un mensaje o escríbeme a {' '}
          <span className='text-white'>solorzano.jorshua4002@gmail.com</span>
        </p>
        <Form />
        <div className="mb-14" />
        <div className='flex items-center gap-4'>
        Mis redes sociales:
            {information.socialMedia.map((social) => (
              <ButtonSocialMedia
                key={social.href}
                href={social.href}
                icon={social.icon}
              />
            ))}
          </div>
      </Container>
    </main>
  );
};

export default ContactPage;
