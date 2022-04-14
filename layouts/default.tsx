import tw from 'twin.macro'
import { Header, Navbar, Footer } from '@/components/core'

const styles = {
  main: tw`flex flex-col w-full h-full`,
  container: tw`flex-1 flex items-center`
}

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutDefault = ({ children }: LayoutProps) => {
  return (
    <main css={styles.main}>
      <Header />
      <Navbar />
      <div className="container" css={styles.container}>
        {children}
      </div>
      <Footer />
    </main>
  )
}

export default LayoutDefault
