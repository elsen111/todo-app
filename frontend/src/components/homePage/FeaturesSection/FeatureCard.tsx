import type { LucideIcon } from 'lucide-react';

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <section className="rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:-rotate-y-20 hover:border-transparent hover:shadow-[0_3px_6px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.23)] md:p-8">
      <div className="bg-primary/80 mb-5 flex h-20 w-20 items-center justify-center rounded-full">
        <Icon
          size={28}
          strokeWidth={1.8}
          className="text-white"
        />
      </div>
      <h6 className="text-primary/80 mb-5 text-[2.2rem] font-bold sm:text-[2.4rem] md:text-4xl">
        {title}
      </h6>
      <p className="text-secondary text-[1.6rem] font-medium md:text-[1.8rem]">
        {' '}
        {description}{' '}
      </p>
    </section>
  );
};

export default FeatureCard;
