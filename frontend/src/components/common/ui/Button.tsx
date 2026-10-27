import type { ReactNode } from "react"
import { Link } from "react-router-dom"

type ButtonProps = {
      variant: 'green' | 'white' | 'lightGreen'
      isLink?: boolean,
      path?: string,
      children: ReactNode
}

const colors = {
      green: " text-white  border-primary bg-primary hover:border-primary/90 hover:bg-primary/90 border-secondary/30",
      white: "text-main border-secondary/80 hover:border-secondary/50 hover:text-main/80 bg-white",
      lightGreen: "text-white bg-green/80 hover:border-green/70 hover:bg-green/70 border-green/30",
}

const Button = ({ variant, isLink, path = "#", children }: ButtonProps) => {
      return (
            <>
                  {isLink ? (
                        <Link
                              to={path}
                              className={`w-fit flex items-center justify-center rounded-2xl border-2 md:px-7 px-5 py-4 md:py-4.5 text-2xl sm:text-3xl font-medium  transition-all duration-200 ${colors[variant]}`}
                        >
                              {children}
                        </Link>
                  )
                        :

                        (
                              <button
                                    className={`w-fit flex items-center justify-center rounded-2xl border-2 md:px-7 px-5 py-4 md:py-4.5 text-2xl sm:text-3xl font-medium  transition-all duration-200 ${colors[variant]}`}
                              >
                                    {children}
                              </button>
                        )
                  }
            </>
      )
}

export default Button