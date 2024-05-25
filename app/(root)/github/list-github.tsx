import GitHubPage from '@/app/(root)/github/GitHubPage';
import CardGithub from '@/app/(root)/github/card-github';

const ListCardGithub = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-10 lg:grid-cols-1 gap-10 mb-10'>
      <GitHubPage />
      <style jsx>{`
        .grid {
          margin-left: 10px; 
          margin-right: 10px; 
        }
      `}</style>
    </div>
  );
};

export default ListCardGithub;
