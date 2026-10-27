import React from 'react';
import clsx from 'clsx';
import { useAuth } from '../../../context/AuthContext';

interface FooterNavGroupProps {
  title: string;
  links: { label: string; path: string }[];
  className?: string;
}

const FooterNavGroup: React.FC<FooterNavGroupProps> = ({
  title,
  links,
  className,
}) => {
  const { user } = useAuth();

  if (user && title == 'Account') return;

  return (
    <div
      className={clsx(
        'xxs:text-left flex flex-col gap-4 text-center',
        className,
      )}
    >
      <h4 className="text-[1.8rem] font-bold tracking-tight text-slate-900">
        {title}
      </h4>

      <ul className="flex flex-col gap-3">
        {links.map((link, idx) => (
          <li key={`${link.path}-${idx}`}>
            <a
              href={link.path}
              className="hover:text-primary text-[1.5rem] font-normal text-slate-500 transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavGroup;
