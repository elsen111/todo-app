import type { LucideIcon } from "lucide-react"

type FeatureCardProps = {
      icon: LucideIcon | string,
      title: string,
      description: string
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
      const Icon = icon

      return (
            <section className="rounded-2xl border-2 border-gray-200 p-6 md:p-8 ">
                  <div className="bg-purple rounded-full flex items-center justify-center h-19 w-19 sm:h-20 sm:w-20 bg-primary/80 mb-5">
                        <Icon size={28} strokeWidth={1.8} className="text-white" />
                  </div>
                  <h6 className="text-[2.2rem] sm:text-[2.4rem] md:text-4xl mb-5 text-primary/80 font-bold"> {title} </h6>
                  <p className="text-[1.6rem] md:text-[1.8rem] text-secondary font-medium"> {description} </p>
            </section>
      )
}

export default FeatureCard