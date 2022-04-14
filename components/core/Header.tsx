import Head from 'next/head'
import Logo from '@/components/core/Logo'

const Header = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Unibet Front-end test - Live matches</title>
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto" />
      </Head>
      <div className="container">
        <Logo />
      </div>
    </>
  )
}

export default Header
