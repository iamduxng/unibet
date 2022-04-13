import Header from '@/components/core/Header'
import Navbar from '@/components/core/Navbar'
import Footer from '@/components/core/Footer'

const LayoutDefault = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <div id="container" className="container">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default LayoutDefault
