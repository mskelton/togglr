import { twMerge } from "tailwind-merge"

export interface PageTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export default function PageTitle({ className, ...props }: PageTitleProps) {
  return (
    <h1
      className={twMerge("text-3xl font-bold", className)}
      id="page-title"
      {...props}
    >
      {props.children}
    </h1>
  )
}
