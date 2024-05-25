import CardFeaturedWork from '@/components/ui/card-featured-work';

const ListFeaturedWork = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10'>
      <CardFeaturedWork
        href='/work/details'
        image='https://img.freepik.com/free-photo/variety-people-multitasking-3d-cartoon-scene_23-2151294527.jpg?t=st=1716407595~exp=1716411195~hmac=b1b637daf5b87c034c4560dd69928ffcba6854bc2d63e71954d019dd4d0f976c&w=740'
        category='Formación acádemica'
        title='App para gestionar el inventario de la Sede del Sur UCR'
      />
      
    </div>
  );
};

export default ListFeaturedWork;
