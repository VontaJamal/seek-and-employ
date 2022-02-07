import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col flex-1 justify-center items-center">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
