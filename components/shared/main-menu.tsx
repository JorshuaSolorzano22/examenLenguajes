import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/libs/utils';

import {
  RiHome3Line,
  RiShapeLine,
  RiBriefcase2Line,
  RiUserLine,
  RiMailLine,
  RiGithubLine,
} from 'react-icons/ri';

const MainMenu = () => {
  const routes = [
    {
      label: 'Principal',
      icon: RiHome3Line,
      href: '/',
    },
    {
      label: 'Trabajos',
      icon: RiShapeLine,
      href: '/work',
    },
    {
      label: 'Empresas',
      icon: RiBriefcase2Line,
      href: '/ventures',
    },
    {
      label: 'Sobre mí',
      icon: RiUserLine,
      href: '/about',
    },
    {
      label: 'Contactos',
      icon: RiMailLine,
      href: '/contact',
    },
  ];

  const pathname = usePathname();

  return (
    <ul>
      <li>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'flex items-center gap-4 text-gray-500 py-5 px-8 border-b border-gray-500/30 hover:bg-gray-500/5 hover:text-white transition-colors duration-300',
              pathname === route.href && 'text-white'
            )}
          >
            <route.icon size={18} />
            {route.label}
          </Link>
        ))}
      </li>
    </ul>
  );
};

export default MainMenu;
