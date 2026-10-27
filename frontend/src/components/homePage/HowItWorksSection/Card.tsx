type CardProps = {
  step: string;
  title: string;
  description: string;
};

const Card = ({ step, title, description }: CardProps) => {
  return (
    <section className="bg-white p-6 transition-all duration-300 md:p-8">
      <p className="bg-primary/80 mx-auto mb-5 flex h-18 w-18 items-center justify-center rounded-full text-[2rem] text-white sm:mr-auto sm:ml-0 sm:h-20 sm:w-20 sm:text-[2.4rem] md:text-4xl">
        {step}
      </p>
      <h6 className="text-primary/80 mb-3 text-center text-[2.2rem] font-bold sm:text-left sm:text-[2.4rem] md:text-4xl">
        {title}
      </h6>
      <p className="text-secondary text-center text-[1.6rem] font-medium sm:text-left md:text-[1.8rem]">
        {description}
      </p>
    </section>
  );
};

export default Card;
