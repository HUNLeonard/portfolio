import { useState } from 'react'
import { cn } from '../utils/cn'

type IMGProp = {
  src?: string,
  title?: string,
  className?: string,
  hoverScale?: boolean
  hoverColor?: boolean
  loading?: "lazy" | "eager";
}

const Img = ({ src = "", title = "", className = "", loading = "lazy", hoverScale = false, hoverColor = false }: IMGProp) => {
  const [isError, setIsError] = useState(false)

  const handleError = () => {
    setIsError(true)
  }
  const placeHolder = "https://placehold.co/600x400/svg"

  return (
    <img
      src={isError || src.trim().length === 0 ? placeHolder : src}
      loading={loading}
      onError={handleError}
      alt={title ?? 'Loading..'}
      title={title ?? 'Loading..'}
      className={cn("w-full h-full object-center object-cover transform-gpu",
        hoverScale ? "hover:scale-105 transition-[scale] duraiton-200 ease-out" : "",
        hoverColor ? "hover:grayscale-0 transition-[all] duraiton-200 ease-out grayscale-100" : "",
        "", className)}
    />
  )
}

export default Img