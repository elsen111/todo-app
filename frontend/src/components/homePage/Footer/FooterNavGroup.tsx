import React from 'react';
import clsx from 'clsx';
import { useAuth } from '../../../context/AuthContext';

interface FooterNavGroupProps {
      title: string;
      links: { label: string, path: string }[];
      className?: string;
}

const FooterNavGroup: React.FC<FooterNavGroupProps> = ({
      title,
      links,
      className
}) => {
      const { user } = useAuth();

      if(user && title == "Account") return;

      return (
            <div className={clsx('flex flex-col gap-4 text-center xxs:text-left', className)}>
                  <h4 className="font-bold text-slate-900 tracking-tight text-[1.8rem]">
                        {title}
                  </h4>

                  <ul className="flex flex-col gap-3">
                        {links.map((link, idx) => (
                              <li key={`${link.path}-${idx}`}>
                                    <a
                                          href={link.path}
                                          className="text-[1.5rem] font-normal text-slate-500 hover:text-primary transition-colors duration-200"
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
