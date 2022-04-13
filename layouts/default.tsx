import tw from 'twin.macro'
import Header from '@/components/core/Header'
import Navbar from '@/components/core/Navbar'
import Footer from '@/components/core/Footer'

interface LayoutProps {
  children: React.ReactNode;
}

const styles = {
  container: tw`container mx-auto`,
}

const LayoutDefault = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Navbar />
      <div id="container" css={styles.container}>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default LayoutDefault
