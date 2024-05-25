'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardGithub from '@/app/(root)/github/card-github';

const GitHubPage = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/JorshuaSolorzano22/repos', {
          headers: {
            
          },
        });
        setRepos(response.data);
      } catch (error) {
        console.error('Error al obtener repositorios de GitHub:', error);
      }
    };

    fetchRepos();

    const interval = setInterval(fetchRepos, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-20 mb-5">
      {repos.map(repo => (
        <CardGithub
          key={repo.id}
          href={repo.html_url}
          image= {'/github.png'}  
          category='Repositorio de GitHub'
          title={repo.name}
        />
      ))}
    </div>
  );
};

export default GitHubPage;
