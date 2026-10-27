

type CardProps = {
      step: string,
      title: string,
      description: string
}

const Card = ({step, title, description} : CardProps) => {
  return (
    <section className="bg-white p-6 md:p-8 transition-all duration-300">
                  <p className="rounded-full flex items-center text-[2rem] mx-auto sm:mr-auto sm:ml-0 sm:text-[2.4rem] md:text-4xl justify-center sm:h-20 sm:w-20 h-18 w-18 bg-primary/80 mb-5 text-white">
                        {step}
                  </p>
                  <h6 className="text-[2.2rem] sm:text-[2.4rem] sm:text-left text-center md:text-4xl mb-3 text-primary/80 font-bold"> {title} </h6>
                  <p className="text-[1.6rem] md:text-[1.8rem] sm:text-left text-center text-secondary font-medium"> {description} </p>
            </section>
  )
}

export default Card