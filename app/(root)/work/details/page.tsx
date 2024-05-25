import SectionMyRole from './sections/section-my-role';
import SectionHeader from './sections/section-header';
import SectionTheProject from './sections/section-the-project';

export const metadata = {
  title: 'Detalles del trabajo',
  description: 'Detalles',
};

const WorkDetails = () => {
  return (
    <main>
      <SectionHeader />
      <SectionMyRole />
      <SectionTheProject />
    </main>
  );
};

export default WorkDetails;
