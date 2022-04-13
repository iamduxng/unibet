import Header from '@/components/core/Header'
import Footer from '@/components/core/Footer'

const LayoutDefault = ({ children }) => {
  return (
    <>
      <Header />
      <div id="container" className="container">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default LayoutDefault
