import tw from 'twin.macro'
import { Header, Navbar, Footer } from '@/components/core'

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutDefault = ({ children }: LayoutProps) => {
  return (
    <main css={tw`flex flex-col w-full h-full`}>
      <Header />
      <Navbar />
      <div className="container" css={tw`flex-1 flex items-center`}>
        {children}
      </div>
      <Footer />
    </main>
  )
}

export default LayoutDefault
