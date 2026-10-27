import type { LucideIcon } from "lucide-react"

type FeatureCardProps = {
      icon: LucideIcon, 
      title: string,
      description: string
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
      return (
            <section className="rounded-2xl border-2 border-gray-200 bg-white p-6 md:p-8 transition-all duration-300 hover:border-transparent hover:shadow-[0_3px_6px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.23)] hover:-rotate-y-20">
                  <div className="rounded-full flex items-center justify-center h-20 w-20 bg-primary/80 mb-5">
                        <Icon size={28} strokeWidth={1.8} className="text-white" />
                  </div>
                  <h6 className="text-[2.2rem] sm:text-[2.4rem] md:text-4xl mb-5 text-primary/80 font-bold"> {title} </h6>
                  <p className="text-[1.6rem] md:text-[1.8rem] text-secondary font-medium"> {description} </p>
            </section>
      )
}

export default FeatureCard
