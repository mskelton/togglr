export interface ReadViewProps {
  children: React.ReactNode
  onEdit: () => void
}

export default function ReadView({ children, onEdit }: ReadViewProps) {
  return (
    <div className="hover:bg-default-100 p-2 rounded-xl" onClick={onEdit}>
      {children}
    </div>
  )
}
