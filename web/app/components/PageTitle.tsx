import clsx from 'clsx'

export interface PageTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export default function PageTitle({ className, ...props }: PageTitleProps) {
  return (
    <h1
      className={clsx('text-3xl font-bold mb-8', className)}
      id="page-title"
      {...props}
    >
      {props.children}
    </h1>
  )
}
