import { authHeroData } from '../../../content/site.content';
import Card from './Card';

const LeftPanel = () => {
  return (
    <section className="mt-30 hidden h-100 flex-1 flex-col gap-10 bg-transparent p-10 md:flex">
      <header>
        <h1 className="flex flex-col text-[3.8rem] leading-16 font-bold">
          <span className="text-primary"> {authHeroData.titleTop} </span>
          <span className="text-blue-900"> {authHeroData.titleBottom} </span>
        </h1>
      </header>
      <p className="w-115 text-2xl leading-10 font-medium text-gray-500">
        {authHeroData.tagline}
      </p>

      <section className="flex md:gap-5 lg:gap-10">
        {authHeroData.features.map((f) => (
          <Card
            key={f.title}
            icon={f.icon}
            title={f.title}
            description={f.description}
          />
        ))}
      </section>
    </section>
  );
};

export default LeftPanel;
