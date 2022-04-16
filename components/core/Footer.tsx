import tw from 'twin.macro'

const Footer = () => {
  return (
    <footer css={tw`bg-gray-1000 pb-16 text-gray-500`}>
      <div className="container">
        <div>&copy; 1997-2015, Unibet. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
