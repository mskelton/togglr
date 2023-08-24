import AdminNav from './AdminNav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdminNav></AdminNav>
      <div className="p-6">{children}</div>
    </>
  )
}
