import { cn } from "../utils/cn"

type LableProp = {
  children?: React.ReactNode,
  className?: string,
  htmlFor?: string,
  required?: boolean
}

const Label = ({ children, className = "", htmlFor, required = false }: LableProp) => {
  return (
    <label
      className={cn("block w-full text-xl sm:text-2xl poppins-semibold mb-1",
        required ? "after:content-['*'] after:text-red-500 after:pl-1" : "",
        className)}
      htmlFor={htmlFor}>
      {children}
    </label>
  )
}

export default Label