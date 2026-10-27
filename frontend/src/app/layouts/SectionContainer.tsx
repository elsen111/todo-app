
type SectionContainerProps = {
  id?: string,
  children: React.ReactNode
}

const SectionContainer = ({ children, id="#" }: SectionContainerProps) => {
  return (
    <section id={id} className='lg:px-20 md:px-10 sm:py-25 sm:px-8 px-6 py-15 relative z-30 w-full'>
      {children}
    </section>
  )
}

export default SectionContainer