import type { LucideIcon } from 'lucide-react';

type CardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const Card = ({ icon: Icon, title, description }: CardProps) => {
  return (
    <section className="flex-1 transition-all duration-300">
      <div className="mb-5 flex h-15 w-15 items-center justify-center rounded-2xl bg-gray-200">
        <Icon
          size={20}
          strokeWidth={1.8}
          className="text-primary font-bold"
        />
      </div>
      <h6 className="text-primary/80 mb-5 text-[2.2rem] font-bold sm:text-[2rem] md:text-3xl">
        {title}
      </h6>
      <p className="text-secondary max-w-50 text-[1.2rem] font-medium md:text-[1.4rem]">
        {description}
      </p>
    </section>
  );
};

export default Card;
