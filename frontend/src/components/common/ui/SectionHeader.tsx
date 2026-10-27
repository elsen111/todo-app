import clsx from "clsx"

type SectionHeaderProps = {
      title: string,
      classNames?: string,
      tagline?: string,
}

const SectionHeader = ({title, tagline, classNames}:  SectionHeaderProps) => {

  return (
    <header className="w-full">
      <h3 className={clsx('text-[2.4rem] md:text-5xl lg:text-6xl font-extrabold tracking-tight text-main leading-tight text-center', classNames)}> {title} </h3>
      {tagline && <p className="text-[1.8rem] text-secondary font-normal leading-relaxed mt-4 text-center"> {tagline} </p>}
    </header>
  )
}

export default SectionHeader