import clsx from 'clsx';

type SectionHeaderProps = {
  title: string;
  classNames?: string;
  tagline?: string;
};

const SectionHeader = ({ title, tagline, classNames }: SectionHeaderProps) => {
  return (
    <header className="w-full">
      <h3
        className={clsx(
          'text-main text-center text-[2.4rem] leading-tight font-extrabold tracking-tight md:text-5xl lg:text-6xl',
          classNames,
        )}
      >
        {title}
      </h3>
      {tagline && (
        <p className="text-secondary mt-4 text-center text-[1.8rem] leading-relaxed font-normal">
          {tagline}
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
