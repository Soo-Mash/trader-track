import './Layout.scss'

const Layout = ({ children }: { children: React.ReactNode }) => (
   <div className="layout">
      <header className="header">HEADER</header>
      <main className="content">{children}</main>
      <footer className="footer">FOOTER</footer>
   </div>
)

export default Layout
